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

    buscarConsulta = () => {
        axios('http://localhost:5000/api/consultaadm')
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

    render() {
        return (
            <div>
                <header>
                    <div class="container container_header">
                        <Link to="/"><img class="logo_spmedical" src={logo} alt="logo" /></Link>
                        <p class="nome_site">Sp Medical Group</p>
                        <nav class="menu_header">
                            <a href="#Inicio" class="links">Inicio</a>
                            <a href="#Consulta" class="links">Consulta</a>
                            <a href="#Login" class="links">Login</a>
                        </nav>
                        <Link><img class="perfil" src={perfil} alt="" /></Link>
                    </div>
                </header>
                <main>
                    <section class="container_consulta">
                        <div>
                            <div class="div_buscar">
                                <p class="p_lista">Lista de Consultas</p>
                                <input class="buscar" type="search" placeholder="Buscar" />
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
                                                    <td>{consulta.idMedicoNavigation.nomeMedico}</td>
                                                    <td>{consulta.idPacienteNavigatio.nomePaciente}</td>
                                                    <td>{consulta.descricao}</td>
                                                    <td>{consulta.dataConsulta}</td>
                                                    <td>{evento.situcacao}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="div_margin">
                            <div class="div_buscar">
                                <p class="p_lista">Cadastrar Consulta</p>
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
                                        <tr>
                                            <td><input type="text" class="input_cadastrar" /></td>
                                            <td><input type="text" class="input_cadastrar" /></td>
                                            <td><input type="text" class="input_cadastrar" /></td>
                                            <td><input type="datetime-local" class="input_cadastrar" /></td>
                                            <td><select name="" id="">
                                                <option>Agendada</option>
                                                <option>Cancelada</option>
                                                <option>Realizada</option>
                                            </select></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button class="botao_cadastrar_consulta" type="submit">Cadastrar</button>
                        </div>
                    </section>
                </main>
                <footer class="footer_consulta">
                    <div class="div_footer">
                        <div>
                            <h3>Links Úteis</h3>
                            <p class="p_h3">- Central de Ajuda</p>
                            <p class="p_h3">- Contato</p>
                            <p class="p_h3">- Suporte</p>
                        </div>
                        <h4>SpMedical</h4>
                        <div class="rede_social">
                            <Link><img class="instagran" src={insta} alt="logo_instagran" /></Link>
                            <p class="arroba">@sp_medical_gp</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}