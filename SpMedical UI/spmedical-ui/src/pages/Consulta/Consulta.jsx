import { Component } from "react";
import '../../assets/css/style.css';

import logo from '../../assets/img/logo.png';
import insta from '../../assets/img/instagran.png'
import perfil from '../../assets/img/icone.png'

class ConsultaAdm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaConsultas: [],
            medico: '',
            paciente: '',
            descricao: '',
            data_e_hora: new Date,
            situcacao: ''
        }
    };

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <header>
                    <Link><img className ="logo_spmedical" src={logo} alt="logo"/></Link>
                    <p className ="nome_site">Sp Medical Group</p>
                    <nav className ="menu_header">
                    <a href="#Inicio" className ="links">Inicio</a>
                    <a href="#Consulta" className ="links">Consulta</a>
                    <a href="#Login" className ="links">Login</a>
                    </nav>
                    <Link><img className ="perfil" src={perfil} alt=""/></Link>
                </header>

                <main>
                    <section className="container_consulta">
                        <p className="p_lista_2">Lista de Consultas</p>
                        <div>
                            <table>
                                <tr>
                                    <th>Médico/ Paciente</th>
                                    <th>Descrição</th>
                                    <th>Data e Hora</th>
                                    <th>Situação</th>
                                    <th>Ações</th>
                                </tr>
                                <tr>
                                    <td>a</td>
                                    <td>b</td>
                                    <td>c</td>
                                    <td>d</td>
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