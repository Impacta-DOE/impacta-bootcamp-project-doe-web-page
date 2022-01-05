import React, { Component } from 'react';

import '../css/TabelaGerenciamentoDeVoluntarios.css';
import TrabalhoVoluntarioService from '../services/TrabalhoVoluntarioService';
import RegistroTabelaGerenciamentoDeVoluntarios from './RegistroTabelaGerenciamentoDeVoluntarios';

class TabelaGerenciamentoDeVoluntarios extends Component {

    constructor(props){
        super(props);
        this.state = {
            trabalhoVoluntarioService: new TrabalhoVoluntarioService(),
            meusContratosVoluntario: []
        };
        this.getContratosVoluntario = this.getContratosVoluntario.bind(this);
    }

    getContratosVoluntario(){
        let contratosVoluntario = this.state.trabalhoVoluntarioService.getVoluntariadosByOrgID("");
        let meusContratosVoluntario = [];
        for(let i=0; i<contratosVoluntario.length; i++){
            if(contratosVoluntario[i].status == this.props.filtrarStatus || this.props.filtrarStatus == 3){
                meusContratosVoluntario.push(<RegistroTabelaGerenciamentoDeVoluntarios contrato={contratosVoluntario[i]}/>);
            }
        }
        this.setState({meusContratosVoluntario});
    }

    render() {
        if(this.props.atualizarTabelaDeVoluntarios){
            this.setState({meusContratosVoluntario: []});
            this.props.setAtualizarTabelaDeVoluntarios(false);
            this.getContratosVoluntario();
        }
        return (
            <div id="tabela-gerenciamento-voluntarios">
                <div id="header-gerenciamento-voluntarios">
                    <p className="column-gerenciamento-voluntarios" style={{width: "9%"}}>Selecionar voluntario</p>
                    <div className="vertical-line-header-gerenciamento-voluntarios"></div>
                    <p className="column-gerenciamento-voluntarios" style={{width: "6%"}}>Status</p>
                    <div className="vertical-line-header-gerenciamento-voluntarios"></div>
                    <p className="column-gerenciamento-voluntarios" style={{width: "14%"}}>Nome voluntario</p>
                    <div className="vertical-line-header-gerenciamento-voluntarios"></div>
                    <p className="column-gerenciamento-voluntarios" style={{width: "13%"}}>Campanha selecionada</p>
                    <div className="vertical-line-header-gerenciamento-voluntarios"></div>
                    <p className="column-gerenciamento-voluntarios" style={{width: "15%"}}>E-mail</p>
                    <div className="vertical-line-header-gerenciamento-voluntarios"></div>
                    <p className="column-gerenciamento-voluntarios" style={{width: "9%"}}>Telefone</p>
                    <div className="vertical-line-header-gerenciamento-voluntarios"></div>
                    <p className="column-gerenciamento-voluntarios" style={{width: "10%"}}>Cidade</p>
                    <div className="vertical-line-header-gerenciamento-voluntarios"></div>
                    <p className="column-gerenciamento-voluntarios" style={{width: "10%"}}>Estado</p>
                    <div className="vertical-line-header-gerenciamento-voluntarios"></div>
                    <p className="column-gerenciamento-voluntarios" style={{width: "13%"}}>Aceitar voluntario</p>
                </div>
                {this.state.meusContratosVoluntario}
            </div>
        );
    }
}

export default TabelaGerenciamentoDeVoluntarios;