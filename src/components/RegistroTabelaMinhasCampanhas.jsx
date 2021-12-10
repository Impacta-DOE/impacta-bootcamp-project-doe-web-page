import React, { Component } from 'react';

import '../css/RegistroTabelaMinhasCampanhas.css';

import editar from '../images/editar.png';

class RegistroTabelaMinhasCampanhas extends Component {
    render() {
        return (
            <div id="registry-minhas-campanhas">
                <p className="column-registry-minhas-campanhas" style={{width: "10%"}}>Status</p>
                <div className="vertical-line-registry-minhas-campanhas"></div>
                <p className="column-registry-minhas-campanhas" style={{width: "31%"}}>Nome da campanha/ação</p>
                <div className="vertical-line-registry-minhas-campanhas"></div>
                <p className="column-registry-minhas-campanhas" style={{width: "14%"}}>Data limite</p>
                <div className="vertical-line-registry-minhas-campanhas"></div>
                <p className="column-registry-minhas-campanhas" style={{width: "14%"}}>Tipo doação</p>
                <div className="vertical-line-registry-minhas-campanhas"></div>
                <p className="column-registry-minhas-campanhas" style={{width: "10%"}}><img src={editar} id="icon-editar"/></p>
                <div className="vertical-line-registry-minhas-campanhas"></div>
                <p className="column-registry-minhas-campanhas" style={{width: "20%"}}><input type="button" value="Inativar" id="btn-inativar"/></p>
            </div>
        );
    }
}

export default RegistroTabelaMinhasCampanhas;