import React, { Component } from 'react';

import '../css/TabelaGerenciamentoDeVoluntarios.css';

class TabelaGerenciamentoDeVoluntarios extends Component {
    render() {
        return (
            <div id="tabela-gerenciamento-voluntarios">
                <div id="header-gerenciamento-voluntarios">
                    <p className="column-gerenciamento-voluntarios" style={{width: "9%"}}>Selecionar voluntario</p>
                    <div className="vertical-line-header-gerenciamento-voluntarios"></div>
                    <p className="column-gerenciamento-voluntarios" style={{width: "6%"}}>Status</p>
                    <div className="vertical-line-header-gerenciamento-voluntarios"></div>
                    <p className="column-gerenciamento-voluntarios" style={{width: "14%"}}>Nome voluntario</p>
                    <div className="vertical-line-header-gerenciamento-voluntarios"></div>
                    <p className="column-gerenciamento-voluntarios" style={{width: "13%"}}>Campanha selecionada</p>
                    <div className="vertical-line-header-gerenciamento-voluntarios"></div>
                    <p className="column-gerenciamento-voluntarios" style={{width: "15%"}}>E-mail</p>
                    <div className="vertical-line-header-gerenciamento-voluntarios"></div>
                    <p className="column-gerenciamento-voluntarios" style={{width: "9%"}}>Telefone</p>
                    <div className="vertical-line-header-gerenciamento-voluntarios"></div>
                    <p className="column-gerenciamento-voluntarios" style={{width: "10%"}}>Cidade</p>
                    <div className="vertical-line-header-gerenciamento-voluntarios"></div>
                    <p className="column-gerenciamento-voluntarios" style={{width: "10%"}}>Estado</p>
                    <div className="vertical-line-header-gerenciamento-voluntarios"></div>
                    <p className="column-gerenciamento-voluntarios" style={{width: "13%"}}>Aceitar voluntario</p>
                </div>
            </div>
        );
    }
}

export default TabelaGerenciamentoDeVoluntarios;