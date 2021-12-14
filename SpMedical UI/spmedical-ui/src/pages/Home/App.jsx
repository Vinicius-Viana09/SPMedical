import '../../assets/css/style.css';

import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.png';
import insta from '../../assets/img/instagran.png'
import perfil from '../../assets/img/icone.png'
import mapa from '../../assets/img/mapa.png'

function Home() {
  return (
    <div className="App">
      <header>
        <div class="container container_header">
        <Link to="/"><img class="logo_spmedical" src={logo} alt="logo"/></Link>
            <p class="nome_site">Sp Medical Group</p>
            <nav class="menu_header">
                <a href="#Inicio" class="links" >Inicio</a>
                <Link href="#Consulta" class="links" to="/consultamedico">Consulta</Link>
                <Link href="#Login" class="links" to="/login">Login</Link>
            </nav>
            <img class="perfil" src={perfil} alt="icone"/>
        </div>
    </header>

    <main>
        <section class="banner">
            <div>
                <h1>SpMedical</h1>
                <p class="p_banner">Experiência em cuidar de você.</p>
            </div>
        </section>

        <section class="container_consulta_home">
            <h2>Consultas</h2>
        </section>

        <section class="container_mapa">
            <div class="div_mapa">
            <Link><img class="mapa" src={mapa} alt="mapa"/></Link>
                <p class="endereco">Av. Barão Limeira, 532, São Paulo, SP</p>
            </div>
        </section>

        <section class="container_qm_somos">
            <h2>Quem somos?</h2>
            <p class="qm_somos">Uma nova clínica médica chamada SP Medical Group, empresa de pequeno porte que 
                atua no ramo da saúde, foi criada pelo médico Fernando Strada em 2020 na região da 
                Paulista em São Paulo. Fernando tem uma equipe de médicos que atuam em diversas 
                áreas (pediatria, odontologia, gastrenterologia etc.).
            </p>
        </section>
    </main>

    <footer class="footer">
        <div class="div_footer">
            <div>
                <h3>Links Úteis</h3>
                <p class="p_h3">- Central de Ajuda</p>
                <p class="p_h3">- Contato</p>
                <p class="p_h3">- Regra de utilização</p>
                <p class="p_h3">- Suporte</p>
            </div>
            <h4>SpMedical</h4>
            <div class="rede_social">
                <Link to="/"><img class="instagran" src={insta} alt="logo_instagran"/></Link>
                <p class="arroba">@sp_medical_gp</p>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default Home;
