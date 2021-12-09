import React, { Component } from 'react';

import '../css/RegistroTabelaPontosDeColeta.css';

class RegistroTabelaPontosDeColeta extends Component {
    render() {
        return (
        <div id="registry">
            <p className="column-registry" style={{width: "24%"}}>Rua Quinze De Novembro</p>
            <div className="vertical-line-registry"></div>
            <p className="column-registry" style={{width: "5%"}}>N°</p>
            <div className="vertical-line-registry"></div>
            <p className="column-registry" style={{width: "9%"}}>Complemento</p>
            <div className="vertical-line-registry"></div>
            <p className="column-registry" style={{width: "16%"}}>Cidade</p>
            <div className="vertical-line-registry"></div>
            <p className="column-registry" style={{width: "16%"}}>Estado</p>
            <div className="vertical-line-registry"></div>
            <p className="column-registry" style={{width: "7%"}}>CEP</p>
            <div className="vertical-line-registry"></div>
            <p className="column-registry" style={{width: "16%", marginLeft: "3%"}}>Responsavel</p>
        </div>
        );
    }
}

export default RegistroTabelaPontosDeColeta;