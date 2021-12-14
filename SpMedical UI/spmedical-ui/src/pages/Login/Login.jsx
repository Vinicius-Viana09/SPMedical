import { Component } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth';
import { Link } from 'react-router-dom';

import '../../assets/css/style.css';
import logo from '../../assets/img/logo.png';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            erroMensagem: '',
            isLoading: false
        }
    };

    
    efetuaLogin = (event) => {
        
        event.preventDefault();

        this.setState({ erroMensagem: '', isLoading: true });

        axios.post('http://localhost:5000/api/Login', {
            email: this.state.email,
            senha: this.state.senha
        })


            .then(resposta => {

                if (resposta.status === 200) {

                    localStorage.setItem('usuario-login', resposta.data.token);

                    this.setState({ isLoading: false });


                    let base64 = localStorage.getItem('usuario-login').split('.')[1];

                    console.log(base64);

                    console.log(this.props);


                    if (parseJwt().role === '1') {
                        this.props.history.push('/tiposeventos');
                        console.log('estou logado: ' + usuarioAutenticado())
                    }

                    else {
                        this.props.history.push('/meusEventos');
                    }
                }
            })


            .catch(() => {

                this.setState({ erroMensagem: 'E-mail e/ou senha inválidos!', isLoading: false })
            })
    };

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value })
    };

    render() {
        return (
            <div>
                <div className="div_container_login">
                    <div className="container_login">

                    </div>
                    <form className="inputs_login">
                        <Link to="/"><img src={logo} className="logo_login" alt="logo" /></Link>
                        <input
                            className="inputs"
                            placeholder="Email"
                            type="email"
                            onChange={this.atualizaStateCampo}
                            value={this.state.email}
                        />

                        <input
                            className="inputs"
                            placeholder="Senha"
                            type="password"
                            value={this.state.senha}
                        />

                        {
                            <p style={{ color: 'red' }} >{this.state.erroMensagem}</p>
                        }

                        {
                            this.state.isLoading === true &&
                            <button type="submit" disabled className="botao_logar" id="botao_logar">
                                Loading...
                            </button>
                        }

                        {
                            this.state.isLoading === false &&
                            <button
                                className="botao_logar"
                                type="submit"
                                disabled={this.state.email === '' || this.state.senha === '' ? 'none' : ''}>
                                Logar
                            </button>
                        }
                    </form>
                </div>
            </div>
        )
    }
}