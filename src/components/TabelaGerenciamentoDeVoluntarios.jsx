import React, { Component } from 'react';

import '../css/TabelaGerenciamentoDeVoluntarios.css';
import TrabalhoVoluntarioService from '../services/TrabalhoVoluntarioService';
import RegistroTabelaGerenciamentoDeVoluntarios from './RegistroTabelaGerenciamentoDeVoluntarios';

class TabelaGerenciamentoDeVoluntarios extends Component {

    constructor(props){
        super(props);
        this.state = {
            trabalhoVoluntarioService: new TrabalhoVoluntarioService(),
            meusContratosVoluntario: [],
            contratosVoluntarioObj: [],
            selecionarTodos: false,
        };
        this.getContratosVoluntario = this.getContratosVoluntario.bind(this);
    }

    getContratosVoluntario(estadoSelecao){
        let contratosVoluntario = this.state.trabalhoVoluntarioService.getVoluntariadosByOrgID("");
        let meusContratosVoluntario = [];
        for(let i=0; i<contratosVoluntario.length; i++){
            if(contratosVoluntario[i].status == this.props.filtrarStatus || this.props.filtrarStatus == 3){
                meusContratosVoluntario.push(<RegistroTabelaGerenciamentoDeVoluntarios 
                                                contrato={contratosVoluntario[i]}
                                                contratoSelecionado={this.props.selecionarTodos}
                                                adicionarContratoSelecionado={this.props.adicionarContratoSelecionado}
                                                removerContratoSelecionado={this.props.removerContratoSelecionado}
                                            />);
            }
        }
        this.setState({meusContratosVoluntario});
        this.setState({contratosVoluntarioObj: contratosVoluntario});
    }

    atualizarSelecaoDeContratos(){
        if(this.props.selecionarTodos){
            this.props.adicionarTodos(this.state.contratosVoluntarioObj);
            this.getContratosVoluntario(1);
        } else {
            this.props.removerTodos();
            this.getContratosVoluntario(0);
        }
        this.props.setAtualizarContratosSelecionados(false);
    }

    render() {
        if(this.props.atualizarTabelaDeVoluntarios){
            this.setState({meusContratosVoluntario: []});
            this.props.setAtualizarTabelaDeVoluntarios(false);
            this.getContratosVoluntario(0);
        }
        if(this.props.atualizarContratosSelecionados){
            this.setState({meusContratosVoluntario: []});
            this.atualizarSelecaoDeContratos();
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