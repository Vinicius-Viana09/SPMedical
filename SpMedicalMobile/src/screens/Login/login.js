import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ImageBackground,
    TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';
import App from '../../../App';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        };
    }

    realizarLogin = async () => {
        console.warn(this.state.email + '' + this.state.senha);

        const resposta = await api.post('/login', {
            email: this.state.email,
            senha: this.state.senha,
        });

        const token = resposta.data.token;
        await AsyncStorage.setItem('userToken', token);

        if (resposta.status == 200) {
            this.props.navigation.navigate('');
        }

        console.warn(token);

    };

    render() {
        return (

                <View style={styles.main}>
                    <Image
                        source={require('../../../assets/img/logoRoman.png')}
                        style={styles.mainImgLogin}
                    />

                    <TextInput
                        style={styles.inputLogin}
                        placeholder="email"
                        placeholderTextColor="#FFF"
                        keyboardType="email-address"
                        onChangeText={email => this.setState({ email })}
                    />

                    <TextInput
                        style={styles.inputLogin}
                        placeholder="senha"
                        placeholderTextColor="#FFF"
                        keyboardType="default"
                        secureTextEntry={true}
                        onChangeText={email => this.setState({ senha })}
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