import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage';
import TelaCadastro from './pages/TelaCadastro';
import EditarPerfil from './pages/EditarPerfil';
import Busca from './pages/Busca';
import OngPage from './pages/OngPage';


ReactDOM.render(
  <Router>
      <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/cadastro" component={TelaCadastro}/>
          <Route path="/editar-perfil" component={EditarPerfil}/>
          <Route path="/buscar" component={Busca}/>
          <Route path="/ong/:urlAmigavel" component={OngPage}/>
      </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
