import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router , Switch, Redirect} from 'react-router-dom';
import { parseJwt, usuarioAutenticado } from './services/auth';

import './index.css';

import Home from './pages/Home/App'
import ConsultaAdm from './pages/ConsultaAdm/ConsultaAdm.jsx';
import Login from './pages/Login/Login.jsx';
import Consulta from './pages/Consulta/Consulta.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';


import reportWebVitals from './reportWebVitals.js';

const PermissaoAdm = ({ component: Component }) => (
  <Route
    render={(props) =>
      usuarioAutenticado() && parseJwt().role === '1' ? (
        // operador spread
        <Component {...props} />
      ) : (
        <Redirect to="Login" />
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
        <Redirect to="Login" />
      )
    }
  />
);


const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} /> {/* Home */}
        <Route path="/login" component={Login} /> {/* Login */}      
        <Route path="/notFound" component={NotFound} /> {/* Not Found */}
        <Redirect to="/notFound" /> {/* Redireciona para Not Found caso não encontre nenhuma rota */}
      </Switch>
    </div>
  </Router>
);

// const routing = (
//   <Router>
//     <div>
//       <Switch>
//         <Route exact path="/" componet={Home} /> {/*Home*/}
//         <PermissaoAdm path="/consultaAdm" componet={ConsultaAdm} /> {/*ConsultaAdm*/}
//         <PermissaoComum path="/consulta" componet={Consulta} /> {/*Consulta*/}
//         <Route path="/login" componet={Login} /> {/*Login*/}
//         <Route path="/notfound" componet={NotFound} /> {/*Not Found*/}

//         <Redirect to="/notFound" />
//       </Switch>
//     </div>
//   </Router>
// )


ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
