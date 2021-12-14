import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
} from 'react-native';

// import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';
import jwtDecode from 'jwt-decode';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailUsuario: '',
            senhaUsuario: ''
        };
    }

    realizarLogin = async () => {
        console.warn(this.state.email + '' + this.state.senha);

        const resposta = await api.post('/login', {
            email: this.state.emailUsuario,
            senha: this.state.senhaUsuario,
        });

        const token = resposta.data.token;
        await AsyncStorage.setItem('userToken', token);

        console.warn(jwtDecode(token));

        if (jwtDecode(token).idTipoUsuario == '1') {
            this.props.navigation.navigate('ListaPaciente');
        }
        if (jwtDecode(token).idTipoUsuario == '2') {
            this.props.navigation('ListaMedico')
        }
        console.warn(token);
    };



    render() {
        return (

                <View style={styles.main}>

                    <Text>Funfou?</Text>
                    <Image
                        source={require('../../assets/img/logoLogin.png')}
                        style={styles.mainImgLogin}
                    />

                    <TextInput
                        style={styles.inputLogin}
                        placeholder="Email"
                        placeholderTextColor="#FFF"
                        keyboardType="email-address"
                        onChangeText={emailUsuario => this.setState({ emailUsuario })}
                    />

                    <TextInput
                        style={styles.inputLogin}
                        placeholder="Senha"
                        placeholderTextColor="#FFF"
                        keyboardType="default"
                        secureTextEntry={true}
                        onChangeText={senhaUsuario => this.setState({ senhaUsuario })}
                    />

                    <TouchableOpacity
                        style={styles.btnLogin}
                        onPress={this.realizarLogin}>
                        <Text style={styles.btnLoginText}>Entrar</Text>
                    </TouchableOpacity>

                </View>
                );
    };
};

const styles = StyleSheet.create({

    main: {
        backgroundColor: 'linear-gradient(180deg, #81DF99 13.28%, #83BEDF 100%)',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },

    mainImgLogin: {
        height: 100,
        width: 100,
        margin: 30,
    },

    inputLogin: {
        width: 230,
        marginBottom: 40,
        fontSize: 25,
        color: '#fff',
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
    },

    btnLoginText: {
        fontSize: 20,
        color: "#83BEDF",
        letterSpacing: 4,
        textTransform: 'uppercase',
    },

    btnLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        width: 140,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderRadius: 10,
    },
});