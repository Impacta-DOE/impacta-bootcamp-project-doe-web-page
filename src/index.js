import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from "react-cookie";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage';
import TelaCadastro from './pages/TelaCadastro';
import EditarPerfil from './pages/EditarPerfil';
import Busca from './pages/Busca';
import OrgPage from './pages/OrgPage';
import TelaCampanha from './pages/TelaCampanha';
import TelaMinhasCampanhas from './pages/TelaMinhasCampanhas';
import TelaHistoricoDoacoes from './pages/TelaHistoricoDoacoes';
import TelaMeusTrabalhosVoluntarios from './pages/TelaMeusTrabalhosVoluntarios';
import TelaMeusPlanosMensais from './pages/TelaMeusPlanosMensais';
import TelaGerenciamentoDePlanosMensais from './pages/TelaGerenciamentoDePlanosMensais';
import TelaGerenciamentoDeVoluntarios from './pages/TelaGerenciamentoDeVoluntarios';


ReactDOM.render(
  <Router>
      <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/cadastro" component={TelaCadastro}/>
          <Route path="/editar-perfil" component={EditarPerfil}/>
          <Route path="/buscar" component={Busca}/>
          <Route path="/org/:urlAmigavel" component={OrgPage}/>
          <Route path="/campanha/:urlAmigavel" component={TelaCampanha}/>
          <Route path="/campanhas" component={TelaMinhasCampanhas}/>
          <Route path="/historico-doacoes" component={TelaHistoricoDoacoes}/>
          <Route path="/trabalhos-voluntarios" component={TelaMeusTrabalhosVoluntarios}/>
          <Route path="/meus-planos-mensais" component={TelaMeusPlanosMensais}/>
          <Route path="/gerenciamento-planos-mensais" component={TelaGerenciamentoDePlanosMensais}/>
          <Route path="/gerenciamento-voluntarios" component={TelaGerenciamentoDeVoluntarios}/>
      </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
