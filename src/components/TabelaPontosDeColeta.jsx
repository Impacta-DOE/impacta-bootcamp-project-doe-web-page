import React, { Component } from 'react';

import '../css/TabelaPontosDeColeta.css';
import RegistroTabelaPontosDeColeta from './RegistroTabelaPontosDeColeta';

class TabelaPontosDeColeta extends Component {
    render() {
        return (
            <div id="tabela-pontos-coleta">
                <div id="header">
                    <p className="column" style={{width: "24%"}}>Rua</p>
                    <div className="vertical-line-header"></div>
                    <p className="column" style={{width: "5%"}}>N°</p>
                    <div className="vertical-line-header"></div>
                    <p className="column" style={{width: "9%"}}>Complemento</p>
                    <div className="vertical-line-header"></div>
                    <p className="column" style={{width: "16%"}}>Cidade</p>
                    <div className="vertical-line-header"></div>
                    <p className="column" style={{width: "16%"}}>Estado</p>
                    <div className="vertical-line-header"></div>
                    <p className="column" style={{width: "7%"}}>CEP</p>
                    <div className="vertical-line-header"></div>
                    <p className="column" style={{width: "16%", marginLeft: "3%"}}>Responsavel</p>
                </div>
                <RegistroTabelaPontosDeColeta />
                <RegistroTabelaPontosDeColeta />
                <RegistroTabelaPontosDeColeta />
                <RegistroTabelaPontosDeColeta />
                <RegistroTabelaPontosDeColeta />
                <RegistroTabelaPontosDeColeta />
                <RegistroTabelaPontosDeColeta />
                <RegistroTabelaPontosDeColeta />
                
            </div>
        );
    }
}

export default TabelaPontosDeColeta;