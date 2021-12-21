import React, { Component } from 'react';

import '../css/RegistroTabelaMinhasCampanhas.css';

import editar from '../images/editar.png';

class RegistroTabelaMinhasCampanhas extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id="registry-minhas-campanhas">
                <p className="column-registry-minhas-campanhas" style={{width: "10%"}}>{(this.props.campanha.status) ? "Ativo" : "Inativo"}</p>
                <div className="vertical-line-registry-minhas-campanhas"></div>
                <p className="column-registry-minhas-campanhas" style={{width: "31%"}}>{this.props.campanha.nome_campanha}</p>
                <div className="vertical-line-registry-minhas-campanhas"></div>
                <p className="column-registry-minhas-campanhas" style={{width: "14%"}}>{this.props.campanha.dataLimite}</p>
                <div className="vertical-line-registry-minhas-campanhas"></div>
                <p className="column-registry-minhas-campanhas" style={{width: "14%"}}>{this.props.campanha.doacao.tipoDoacao}</p>
                <div className="vertical-line-registry-minhas-campanhas"></div>
                <p className="column-registry-minhas-campanhas" style={{width: "10%"}}><img src={editar} id="icon-editar" onClick={() => this.props.abrirTelaAlteraçãoCampanha(this.props.campanha)}/></p>
                <div className="vertical-line-registry-minhas-campanhas"></div>
                <p className="column-registry-minhas-campanhas" style={{width: "20%"}}><input type="button" value="Inativar" id="btn-inativar"/></p>
            </div>
        );
    }
}

export default RegistroTabelaMinhasCampanhas;