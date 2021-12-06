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

                <View style={styles.mainHeader}>
                    <View style={styles.mainHeaderRow}>
                        <Image
                            source={require('../../assets/img/calendarioAgendada.svg')}
                            style={styles.mainHeaderImg}
                        />
                        <Text style={styles.mainHeaderText}>
                            Consultas
                        </Text>
                    </View>
                    <View style={styles.mainHeaderLine} />
                </View>

                <View>
                    <TouchableOpacity
                        onPress={this.buscarMinhasConsultas}
                        styles={secaoConsulta}>
                        <Text styles={(styles.flatItemTitle, { color: '#65B2DD' })}>
                            Agendada
                        </Text>
                    </TouchableOpacity>
                    <FlatList
                        contentContainerStyle={styles.mainBodyContent}
                        data={this.state.listaMinhasConsultas}
                        keyExtractor={item => item.idConsulta}
                        renderItem={this.renderItem}
                    />
                </View>

            </View>


        );
    }

    renderItem = ({ item }) => (
        <View style={styles.flatItemRow}>
            <View style={styles.flatItemContainer}>
                <Text style={styles.flatItemTitle}>
                    {item.idPacienteNavigation.nomePaciente}
                </Text>
                <Text style={styles.flatItemInfo}>
                    {item.idConsultaNavigation.descricao}
                </Text>
                <Text style={styles.flatItemInfo}>
                    {Intl.DateTimeFormat("pt-BR", {
                        year: 'numeric', month: 'numeric', day: 'numeric',
                        hour: 'numeric', minute: 'numeric',
                        hour12: true
                    }).format(new Date(item.idConsultaNavigation.dataConsulta))}
                </Text>
                <Text style={styles.flatItemInfo}>
                    {item.idSituacaoNavigation.descricao}
                </Text>
            </View>
            <View style={styles.flatItemImg}>
                <Image
                    source={
                        item.idSituacao === 1
                            ? require('../../assets/img/calendarioRealizada.svg')
                            : require('../../assets/img/calendarioAgendada.svg')
                        // : require('../../assets/img/calendarioCAncelada.svg')
                    }
                    style={styles.flatItemImgIcon}
                />
            </View>

            <Image
                source={require('../../assets/img/logoEditar.png')}
                onPress={this.atualizarConsulta}
                style={styles.btnAtualizar}
            />
        </View>
    );
}

