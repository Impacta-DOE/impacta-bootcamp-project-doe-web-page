import React, { Component } from 'react';
import Comentario from '../components/Comentario';
import Footer from '../components/Footer';
import MenuTop from '../components/MenuTop';
import RegistroDoacao from '../components/RegistroDoacao';

import '../css/TelaCampanha.css';

class TelaCampanha extends Component {

    constructor(props){
        super(props);        
        this.state = {doacoes : []};
    }

    componentWillMount(){
        if(this.props.location.state.campanha.doacao.tipoArrecadacao === "dinheiro"){
            this.apresentarDoacoes();
        }
    }

    apresentarValores(){
        if(this.props.location.state.campanha.doacao.tipoArrecadacao === 'dinheiro'){
            return this.props.location.state.campanha.doacao.unidadeMedida + ' ' + 
            this.props.location.state.campanha.doacao.valorAtual.toFixed(2).replace('.', ',') + ' / ' + 
            this.props.location.state.campanha.doacao.unidadeMedida + ' ' +
            this.props.location.state.campanha.doacao.valorTotal.toFixed(2).replace('.', ',');
        }else{
            return this.props.location.state.campanha.doacao.valorAtual + ' ' + 
            this.props.location.state.campanha.doacao.unidadeMedida + ' / ' + 
            this.props.location.state.campanha.doacao.valorTotal + ' ' + 
            this.props.location.state.campanha.doacao.unidadeMedida;
        }
    }

    apresentarDoacoes() {
        let doacoes = [];
        for(let i=0; i < this.props.location.state.campanha.doacao.historicoDoacoes.length; i++){
            doacoes.push(<RegistroDoacao 
                            tipoArrecadacao={this.props.location.state.campanha.doacao.tipoArrecadacao} 
                            unidadeMedida={this.props.location.state.campanha.doacao.unidadeMedida} 
                            doacao={this.props.location.state.campanha.doacao.historicoDoacoes[i]}
                        />);
        }
        this.setState({doacoes});
    }

    calculaPorcentagem(){
        if(this.props.location.state.campanha.doacao.valorAtual > this.props.location.state.campanha.doacao.valorTotal) return 100;
        return ((this.props.location.state.campanha.doacao.valorAtual * 100) / this.props.location.state.campanha.doacao.valorTotal);
    }

    render() {
        return (
            <div id="content-campanha">
                <MenuTop isLoggedIn={true}/>
                <div id="div-titulo" style={{backgroundImage : "url(" + this.props.location.state.campanha.img_background + ")"}}>
                    <div style={{
                                    width: "100%", 
                                    height: "100%", 
                                    position: "relative", 
                                    backgroundColor: "rgba(0, 0, 0, .6)", 
                                    zIndex: "0",
                                    paddingTop: "9em"
                                }}>
                        <p id="titulo-campanha">{this.props.location.state.campanha.nome_campanha}</p>
                    </div>
                </div>
                <div id="div-info-org">
                    <img src={this.props.location.state.campanha.organizacao.logo} id="logo-organizacao"/>
                    <p id="nome-organizacao">{this.props.location.state.campanha.organizacao.nomeOrganizacao}</p>
                    <input type="button" value="Voluntariar-se" id="btn-voluntariar"/>
                </div>
                <div id="infos-campanha">
                    <div id="div-desc">
                        <p className="titulo-desc-campanha">Descrição da Campanha</p>
                        <hr className="hr-titulo-desc-campanha"></hr>
                        <p id="texto-desc">{this.props.location.state.campanha.desc_campanha}</p>
                        <p className="titulo-desc-campanha">Comentários</p>
                        <hr className="hr-titulo-desc-campanha"></hr>
                        <div id="div-comentarios">
                            <Comentario />
                            <Comentario />
                            <Comentario />
                            <Comentario />
                            <Comentario />
                            <Comentario />
                            <Comentario />
                            <Comentario />
                            <Comentario />
                        </div>
                    </div>
                    <div id="div-doacao">
                        <div id="slider-arrecadados-tela-campanha">
                            <p id="text-slider-tela-campanha">{this.apresentarValores()}</p>
                            <div id="slider-tela-campanha">
                                <div id="load-slider-tela-campanha" style={{"width" : this.calculaPorcentagem() + "%"}}/>
                            </div>
                        </div>
                        <div style={{"width" : "100%", "height" : "auto", "padding" : "1em"}}>
                            {
                                (this.props.location.state.campanha.doacao.tipoArrecadacao === "dinheiro") ? 
                                    <div>
                                        <p className="titulo-desc-campanha">Doações realizadas</p>
                                        <hr className="hr-titulo-desc-campanha"></hr>
                                        <div id="div-doacoes">{this.state.doacoes}</div>
                                    </div> : null
                            }
                            <input type="button" value="Doar" id="btn-doar-campanha"/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default TelaCampanha;