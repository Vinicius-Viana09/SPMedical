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
                
            </View>
        );
    }
}