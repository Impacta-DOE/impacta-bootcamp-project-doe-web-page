import React, { Component } from 'react';

import '../css/RegistroDoacao.css';

class RegistroDoacao extends Component {

    constructor(props){
        super(props);
    }

    apresentarValorDoado(){
        if(this.props.doacao.exibirValorDoado){
            if(this.props.tipoDoacao === 'dinheiro'){
                return this.props.unidadeMedida + ' ' + 
                this.props.doacao.valorDoado.toFixed(2).replace('.', ',');
            }else{
                return this.props.doacao.valorDoado + ' ' + 
                this.props.unidadeMedida;
            }
        } else {
            return this.props.unidadeMedida;
        }
    }

    apresentarNomeDoador(){
        if(this.props.doacao.exibirNomeDoador){
            if(this.props.doacao.nomeDoador.length >= 16){
                return this.props.doacao.nomeDoador.substring(0, 15).trim() + "...";
            }else{
                return this.props.doacao.nomeDoador;
            }
        }else{
            return "Anônimo";
        }
    }

    render() {
        return (
            <div id="container-registro-doacao">
                <p id="valor-doacao">{this.apresentarValorDoado()}</p>
                <div className="vertical-line-registro-doacao"></div>
                <p id="doador" alt={this.props.doacao.nomeDoador}>{this.apresentarNomeDoador()}</p>
                <div className="vertical-line-registro-doacao"></div>
                <p id="data-doacao">{this.props.doacao.dataDoacao}</p>
            </div>
        );
    }
}

export default RegistroDoacao;