import { Component } from "react";
import '../../assets/css/style.css';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.png';
import insta from '../../assets/img/instagran.png'
import perfil from '../../assets/img/icone.png'
import { usuarioAutenticado } from "../../services/auth";

export default class Consulta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaConsultas: [],
            medico: '',
            paciente: '',
            descricao: '',
            data_e_hora: new Date(),
            situcacao: ''
        }
    };

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <header>
                    <Link><img className="logo_spmedical" src={logo} alt="logo" /></Link>
                    <p className="nome_site">Sp Medical Group</p>
                    <nav className="menu_header">
                        <Link href="#Inicio" className="links" to="/">Inicio</Link>
                        <Link href="#Consulta" className="links" to="/consultaMedico">Consulta</Link>
                        <Link href="#Login" className="links" to="/login">Login</Link>
                    </nav>
                    <Link><img className="perfil" src={perfil} alt="" /></Link>
                </header>

                <main>
                    <section className="container_consulta">
                        <p className="p_lista_2">Lista de Consultas</p>
                        <div>
                            <table>
                                <tr>
                                    <th>Paciente</th>
                                    <th>Descrição</th>
                                    <th>Data e Hora</th>
                                    <th>Situação</th>
                                    <th>Ações</th>
                                </tr>
                                <tr>
                                    <td className="td_listar">a</td>
                                    <td className="td_listar">b</td>
                                    <td className="td_listar">c</td>
                                    <td className="td_listar">d</td>
                                    <td>
                                        <button className="botao_editar">Editar</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </section>
                </main>
                <footer className="footer_consulta">
                    <div className="div_footer">
                        <div>
                            <h3>Links Úteis</h3>
                            <p className="p_h3">- Central de Ajuda</p>
                            <p className="p_h3">- Contato</p>
                            <p className="p_h3">- Suporte</p>
                        </div>
                        <h4>SpMedical</h4>
                        <div className="rede_social">
                            <Link><img className="instagran" src={insta} alt="logo_instagran" /></Link>
                            <p className="arroba">@sp_medical_gp</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}