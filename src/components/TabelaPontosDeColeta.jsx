import React, { Component } from 'react';

import '../css/TabelaPontosDeColeta.css';
import PontosColetaServices from '../services/PontosColetaServices';
import RegistroTabelaPontosDeColeta from './RegistroTabelaPontosDeColeta';

class TabelaPontosDeColeta extends Component {

    constructor(props){
        super(props);
        this.state = {
                        pontosColetaService: new PontosColetaServices(),
                        pontosColeta: [],
                        pontosColetaAtivos: []
                    };
        this.setPontoColetaSelecionado = this.setPontoColetaSelecionado.bind(this);
    }

    componentWillMount(){
        if(this.props.selectMode) {
            this.selecionarPontosColeta();
        } else {
            this.getPontosColeta(this.state.pontosColetaService.getPontosColeta());
        }
    }

    setPontoColetaSelecionado(id, checked){
        let pontosColeta = this.state.pontosColetaService.getPontosColeta();
        if(checked){
            for(let i=0; i<pontosColeta.length; i++){
                if(pontosColeta[i].id === id){
                    pontosColeta[i].pontoSelecionado = true;
                    this.state.pontosColetaAtivos.push(pontosColeta[i]);
                }
            }   
        } else {
            for(let i=0; i<this.state.pontosColetaAtivos.length; i++){
                if(this.state.pontosColetaAtivos[i].id === id){
                    this.state.pontosColetaAtivos.splice(this.state.pontosColetaAtivos.indexOf(this.state.pontosColetaAtivos[i]), 1);
                }
            } 
        }
        this.props.setPontosColetaAtivos(this.state.pontosColetaAtivos);
    }

    getPontosColeta(pontosColeta){
        let pontosColetaTag = [];
        for(var i=0; i<pontosColeta.length; i++){
            pontosColetaTag.push(
                                    <RegistroTabelaPontosDeColeta 
                                        selectMode={this.props.selectMode} 
                                        pontoColeta={pontosColeta[i]}
                                        setPontoColetaSelecionado={this.setPontoColetaSelecionado}
                                    />
                                );
        }
        this.setState({pontosColeta: pontosColetaTag});
    }

    selecionarPontosColeta(){
        let pontosColeta = this.state.pontosColetaService.getPontosColeta();
        let pontosColetaCampanha = this.props.pontosColetaCampanha;
        for(var i=0; i<pontosColetaCampanha.length; i++){
            for(var j=0; j<pontosColeta.length; j++){
                if(pontosColetaCampanha[i].id === pontosColeta[j].id){
                    pontosColeta[j].pontoSelecionado = true;
                    this.state.pontosColetaAtivos.push(pontosColeta[j]);
                    break;
                }
            }
        }
        this.getPontosColeta(pontosColeta);
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