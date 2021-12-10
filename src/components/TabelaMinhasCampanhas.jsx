import React, { Component } from 'react';

import '../css/TabelaMinhasCampanhas.css';
import RegistroTabelaMinhasCampanhas from './RegistroTabelaMinhasCampanhas';

class TabelaMinhasCampanhas extends Component {
    render() {
        return (
            <div id="tabela-minhas-campanha">
                <div id="header-minhas-campanhas">
                    <p className="column-minhas-campanhas" style={{width: "10%"}}>Status</p>
                    <div className="vertical-line-header-minhas-campanhas"></div>
                    <p className="column-minhas-campanhas" style={{width: "31%"}}>Nome da campanha/ação</p>
                    <div className="vertical-line-header-minhas-campanhas"></div>
                    <p className="column-minhas-campanhas" style={{width: "14%"}}>Data limite</p>
                    <div className="vertical-line-header-minhas-campanhas"></div>
                    <p className="column-minhas-campanhas" style={{width: "14%"}}>Tipo doação</p>
                    <div className="vertical-line-header-minhas-campanhas"></div>
                    <p className="column-minhas-campanhas" style={{width: "10%"}}>Editar</p>
                    <div className="vertical-line-header-minhas-campanhas"></div>
                    <p className="column-minhas-campanhas" style={{width: "20%"}}>Inativar campanha/ação</p>
                </div>
                <RegistroTabelaMinhasCampanhas />
                <RegistroTabelaMinhasCampanhas />
                <RegistroTabelaMinhasCampanhas />
                <RegistroTabelaMinhasCampanhas />
                <RegistroTabelaMinhasCampanhas />
                <RegistroTabelaMinhasCampanhas />
            </div>
        );
    }
}

export default TabelaMinhasCampanhas;