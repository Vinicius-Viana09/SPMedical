import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router , Switch, } from 'react-router-dom';
import { parseJwt, usuarioAutenticado } from './services/auth';

import './index.css';

import Home from './pages/home/App';
import ConsultaAdm from './pages/ConsultaAdm/ConsultaAdm';
import Login from './pages/Login/Login';
import Consulta from './pages/Consulta/Consulta';
import NotFound from './pages/NotFound/NotFound';


import reportWebVitals from './reportWebVitals.js';

const PermissaoAdm = ({ component: Component }) => (
  <Route
    render={(props) =>
      usuarioAutenticado() && parseJwt().role === '1' ? (
        // operador spread
        <Component {...props} />
      ) : (
        <Redirect to="login" />
      )
    }
  />
);

const PermissaoComum = ({ component: Component }) => (
  <Route
    render={(props) =>
      usuarioAutenticado() && parseJwt().role === '2' && '3' ? (
        // operador spread
        <Component {...props} />
      ) : (
        <Redirect to="login" />
      )
    }
  />
);

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" componet={Home} /> {/*Home*/}
        <PermissaoAdm path="/consultaAdm" componet={ConsultaAdm} /> {/*ConsultaAdm*/}
        <PermissaoComum path="/consulta" componet={Consulta} /> {/*Consulta*/}
        <Route path="/login" componet={Login} /> {/*Login*/}
        <Route path="/notfound" componet={NotFound} /> {/*Not Found*/}

        <Redirect to="/notFound" />
      </Switch>
    </div>
  </Router>
)


ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
