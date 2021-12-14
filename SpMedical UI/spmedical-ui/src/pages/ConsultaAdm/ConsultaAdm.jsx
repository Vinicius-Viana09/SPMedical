import { Component } from "react";
import '../../assets/css/style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


import logo from '../../assets/img/logo.png';
import insta from '../../assets/img/instagran.png'
import perfil from '../../assets/img/icone.png'


export default class ConsultaAdm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaConsultas: [],
            medico: '',
            paciente: '',
            descricao: '',
            dataConsulta: new Date(),
            situcacao: ''
        }
    };

    buscarConsulta = () => {
        axios('http://localhost:5000/api/ControllerConsulta/minhas')
            .then((resposta) => {
                if (resposta.status === 200) {
                    this.setState({ listaConsultas: resposta.data });
                    console.log(this.state.listaConsultas);
                }
            })
            .catch((erro) => console.log(erro));
    };

    atualizaStateCampo = (campo) => {

        this.setState({ [campo.target.name]: campo.target.value });
    };

    componentDidMount() {
        this.buscarConsulta();
    }

    cadastrarEvento = (event) => {
        event.preventDefault();

        this.setState({ isLoading: true });

        let evento = {
            nomeMedico: this.state.medico,
            nomePaciente: this.state.paciente,
            descricao: this.state.descricao,
            dataConsulta: new Date(this.state.dataConsulta),
            situcacao: this.state.situcacaoConsulta
        };

        axios
            .post('http://localhost:5000/api/ControllerConsulta/consultar', evento, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('usuario-login'),
                },
            })
            .then((resposta) => {
                if (resposta.status === 201) {
                    console.log('Consulta cadastrada!');
                    this.setState({ isLoading: false });
                }
            })
            .catch((erro) => {
                console.log(erro);
                this.setState({ isLoading: false });
            })
            .then(this.buscarConsultas);
    };

    render() {
        return (
            <div>
                <header>
                    <div className="container container_header">
                        <Link to="/"><img class="logo_spmedical" src={logo} alt="logo" /></Link>
                        <p className="nome_site">Sp Medical Group</p>
                        <nav className="menu_header">
                            <Link href="#Inicio" className="links" to="/">Inicio</Link>
                            <Link href="#Consulta" className="links" to="/consultaAdm">Consulta</Link>
                            <Link href="#Login" className="links" to="/login">Login</Link>
                        </nav>
                        <img className="perfil" src={perfil} alt="perfil" />
                    </div>
                </header>
                <main>
                    <section className="container_consulta">
                        <div>
                            <div className="div_buscar">
                                <p className="p_lista">Lista de Consultas</p>
                            </div>
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Médico</th>
                                            <th>Paciente</th>
                                            <th>Descrição</th>
                                            <th>Data e Hora</th>
                                            <th>Situação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.listaConsultas.map((consulta) => {
                                            return (
                                                <tr key={consulta.idConsulta}>
                                                    <td className="td_listar">{consulta.idMedicoNavigation.idUsuarioNavigation.nomeUsuario}</td>
                                                    <td className="td_listar">{consulta.idPacienteNavigatio.idUsuarioNavigation.nomeUsuario}</td>
                                                    <td className="td_listar">{consulta.descricao}</td>
                                                    <td>{consulta.dataConsulta}</td>
                                                    <td>{consulta.idSituacaoConsultaNavigation.nomeSitucacao}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="div_margin">
                            <div className="div_buscar">
                                <p className="p_lista">Cadastrar Consulta</p>
                            </div>
                            <div>
                                <form>
                                    <form onSubmit={this.cadastrarEvento}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                width: '20vw',
                                            }}
                                        >
                                            <input
                                                required
                                                type="text"
                                                name="nomeMedico"
                                                value={this.state.nomeMedico}
                                                onChange={this.atualizaStateCampo}
                                                placeholder="Médico"
                                            />

                                            <input
                                                required
                                                type="text"
                                                name="nomePaciente"
                                                value={this.state.nomePaciente}
                                                onChange={this.atualizaStateCampo}
                                                placeholder="Paciente"
                                            />

                                            <input
                                                required
                                                type="text"
                                                name="descricao"
                                                value={this.state.descricao}
                                                onChange={this.atualizaStateCampo}
                                                placeholder="Descrição da Consulta"
                                            />

                                            <input
                                                type="datetime-local"
                                                name="dataEvento"
                                                value={this.state.dataConsulta}
                                                onChange={this.atualizaStateCampo}
                                            />

                                            <select
                                                name="situacao"
                                                value={this.state.idSitucacaoCosnsulta}
                                                onChange={this.atualizaStateCampo}
                                            >
                                                <option value="">Selecione a situação</option>
                                                <option value="3">Agendada</option>
                                                <option value="2">Cancelada</option>
                                                <option value="1">Realizada</option>
                                            </select>

                                            {this.state.isLoading === true && (
                                                <button type="submit">Loading...</button>
                                            )}

                                            {this.state.isLoading === false && (
                                                <button type="submit">Cadastrar</button>
                                            )}
                                        </div>
                                    </form>
                                </form>
                            </div>
                            <button className="botao_cadastrar_consulta" type="submit">Cadastrar</button>
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