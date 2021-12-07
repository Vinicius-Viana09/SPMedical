import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Consultas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaMinhasConsultas: [],
        }
    }

    buscarMinhasConsultas = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');

            const resposta = await api.get('/ControllerConsulta/minhas', {
                headers: {
                    Authorization: 'Bearer' + token,
                },
            });

            if (resposta.status === 200) {
                const dadosDaApi = resposta.data;
                this.setState({ listaMinhasConsultas: dadosDaApi });
            }
        } catch (error) {
            console.warn(error);
        }
    };

    componentDidMount() {
        this.buscarMeusEventos();
    }

    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.mainHeaderText}>
                    Consultas
                </Text>
                <FlatList
                    contentContainerStyle={styles.mainBodyContent}
                    data={this.state.listaMinhasConsultas}
                    keyExtractor={item => item.idConsulta}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }

    renderItem = ({ item }) => (
        <View style={styles.flatItemRow}>
            <View style={styles.flatItemContainer}>
                <View style={styles.flatItemImg}>
                    <Image
                        source={
                            item.idSituacaoConsulta === 1
                            && require('../../assets/img/calendarioRealizada.svg'),

                            item.idSituacaoConsulta === 2
                            && require('../../assets/img/calendarioCancelda.svg'),

                            item.idSituacaoConsulta === 3
                            && require('../../assets/img/calendarioAgendada.svg')
                        }
                        style={styles.flatItemImgIcon}
                    />
                    <Text style={styles.flatItemInfo}>
                        {item.idSituacaoNavigation.nomeSitucao}
                    </Text>
                </View>
                <Text style={styles.flatItemItem}>{"Medico: " + item.idMedicoNavigation.idUsuarioNavigation.nomeUsuario}</Text>
                <Text style={styles.flatItemInfo}>{"Data: " + item.dataConsulta}</Text>
                <Text style={styles.flatItemInfo}>{item.descricao}</Text>
            </View>
        </View>
    );
}

