import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
} from 'react-native';

// import { 
//     Montserrat_100Thin,
//     Montserrat_100Thin_Italic,
//     Montserrat_200ExtraLight,
//     Montserrat_200ExtraLight_Italic,
//     Montserrat_300Light,
//     Montserrat_300Light_Italic,
//     Montserrat_400Regular,
//     Montserrat_400Regular_Italic,
//     Montserrat_500Medium,
//     Montserrat_500Medium_Italic,
//     Montserrat_600SemiBold,
//     Montserrat_600SemiBold_Italic,
//     Montserrat_700Bold,
//     Montserrat_700Bold_Italic,
//     Montserrat_800ExtraBold,
//     Montserrat_800ExtraBold_Italic,
//     Montserrat_900Black,
//     Montserrat_900Black_Italic 
//   } from '@expo-google-fonts/montserrat'

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';
import App from '../../../App';

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

        if (resposta.status == 200) {
            this.props.navigation.navigate('');
        }

        console.warn(token);

    };

    render() {
        return (

                <View style={styles.main}>
                    <Image
                        source={require('../../../assets/img/logoLogin.png')}
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