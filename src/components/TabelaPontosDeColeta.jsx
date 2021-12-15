import React, { Component } from 'react';

import '../css/TabelaPontosDeColeta.css';
import PontosColetaServices from '../services/PontosColetaServices';
import RegistroTabelaPontosDeColeta from './RegistroTabelaPontosDeColeta';

class TabelaPontosDeColeta extends Component {

    constructor(props){
        super(props);
        this.state = {
                        pontosColetaService: new PontosColetaServices(),
                        pontosColeta: []
                    };
    }

    componentWillMount(){
        this.getPontosColeta();
    }

    getPontosColeta(){
        let pontosColeta = this.state.pontosColetaService.getPontosColeta();
        let pontosColetaTag = [];
        for(var i=0; i<pontosColeta.length; i++){
            pontosColetaTag.push(
                                    <RegistroTabelaPontosDeColeta 
                                        selectMode={this.props.selectMode} 
                                        pontoColeta={pontosColeta[i]}
                                    />
                                );
        }
        this.setState({pontosColeta: pontosColetaTag});
    }

    render() {
        return (
            <div id="tabela-pontos-coleta">
                <div id="header">
                    {(this.props.selectMode) ? 
                        <>
                            <p className="column" style={{width: "10%"}}>Selecionar ponto</p>
                            <div className="vertical-line-header"></div>
                        </>
                        : null
                    }
                    <p className="column" style={{width: "24%"}}>Rua</p>
                    <div className="vertical-line-header"></div>
                    <p className="column" style={{width: "5%"}}>N°</p>
                    <div className="vertical-line-header"></div>
                    <p className="column" style={{width: "9%"}}>Complemento</p>
                    <div className="vertical-line-header"></div>
                    <p className="column" style={{width: (this.props.selectMode) ? "12%" : "16%"}}>Cidade</p>
                    <div className="vertical-line-header"></div>
                    <p className="column" style={{width: (this.props.selectMode) ? "12%" : "16%"}}>Estado</p>
                    <div className="vertical-line-header"></div>
                    <p className="column" style={{width: "7%"}}>CEP</p>
                    <div className="vertical-line-header"></div>
                    <p className="column" style={{width: "16%", marginLeft: "3%"}}>Responsavel</p>
                </div>
                {this.state.pontosColeta}
            </div>
        );
    }
}

export default TabelaPontosDeColeta;