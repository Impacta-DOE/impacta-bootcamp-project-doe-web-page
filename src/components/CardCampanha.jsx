import React, { Component } from 'react';
import { Redirect } from 'react-router';

import '../css/CardCampanha.css';

class CardCampanha extends Component {

    constructor(props){
        super(props);
        this.state = {redirect: false, page: "/campanha"};
    }

    calculaPorcentagem(){
        if(this.props.campanha.doacao.valorAtual > this.props.campanha.doacao.valorTotal) return 100;
        return ((this.props.campanha.doacao.valorAtual * 100) / this.props.campanha.doacao.valorTotal);
    }

    apresentarValores(){
        if(this.props.campanha.doacao.tipoArrecadacao === 'dinheiro'){
            return this.props.campanha.doacao.unidadeMedida + ' ' + this.props.campanha.doacao.valorAtual.toFixed(2).replace('.', ',') + ' / ' + this.props.campanha.doacao.unidadeMedida + ' ' + this.props.campanha.doacao.valorTotal.toFixed(2).replace('.', ',');
        }else{
            return this.props.campanha.doacao.valorAtual + ' ' + this.props.campanha.doacao.unidadeMedida + ' / ' + this.props.campanha.doacao.valorTotal + ' ' + this.props.campanha.doacao.unidadeMedida;
        }
    }

    abrirPaginaCampanha() {
        this.setState({redirect : true});
    }

    render() {
        if(this.state.redirect){
            this.setState({redirect : false});
            return <Redirect to={{pathname: this.state.page, state: { campanha : this.props.campanha }}} />
        }
        return (
            <div id="card-campanha-body" 
                style={{
                    marginRight : this.props.marginRight,
                    marginBottom : this.props.marginBottom, 
                    width : this.props.newWidth
                }} 
                onClick={() => this.abrirPaginaCampanha()}
            >
                <img src={this.props.campanha.img_background_card} id="background-img-card"/>
                <div id="painel-card">
                    <div id="text-area">
                        <p id="titulo-card">{this.props.campanha.nome_campanha}</p>
                        <p id="desc-card">{this.props.campanha.resumirDescricao(70)}</p>
                    </div>
                    <div id="slider-arrecadados">
                        <p id="text-slider">{this.apresentarValores()}</p>
                        <div id="slider-card">
                            <div id="load-slider" style={{"width" : this.calculaPorcentagem() + "%"}}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardCampanha;