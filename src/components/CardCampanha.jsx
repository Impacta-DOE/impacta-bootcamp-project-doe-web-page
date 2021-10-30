import React, { Component } from 'react';

import '../css/CardCampanha.css';

class CardCampanha extends Component {

    constructor(props){
        super(props);
    }

    calculaPorcentagem(){
        if(this.props.campanha.doacao.valorAtual > this.props.campanha.doacao.valorTotal) return 100;
        return ((this.props.campanha.doacao.valorAtual * 100) / this.props.campanha.doacao.valorTotal);
    }

    apresentarValores(){
        if(this.props.campanha.doacao.tipoArrecadacao === 'dinheiro'){
            return this.props.campanha.doacao.unidadeMedida + ' ' + this.props.campanha.doacao.valorAtual + ' / ' + this.props.campanha.doacao.unidadeMedida + ' ' + this.props.campanha.doacao.valorTotal;
        }else{
            return this.props.campanha.doacao.valorAtual + ' ' + this.props.campanha.doacao.unidadeMedida + ' / ' + this.props.campanha.doacao.valorTotal + ' ' + this.props.campanha.doacao.unidadeMedida;
        }
    }

    render() {
        return (
            <div id="card-campanha-body">
                <img src={this.props.campanha.img_background_card} id="background-img-card"/>
                <div id="painel-card">
                    <div id="text-area">
                        <p id="titulo-card">{this.props.campanha.nome_campanha}</p>
                        <p id="desc-card">Curabitur at ultricies felis. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
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