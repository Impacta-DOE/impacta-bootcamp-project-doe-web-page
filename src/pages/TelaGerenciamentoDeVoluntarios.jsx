import React, { Component } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import MenuTop from '../components/MenuTop';
import TabelaGerenciamentoDeVoluntarios from '../components/TabelaGerenciamentoDeVoluntarios';

import '../css/TelaGerenciamentoDeVoluntarios.css';
import TrabalhoVoluntarioService from '../services/TrabalhoVoluntarioService';

class TelaGerenciamentoDeVoluntarios extends Component {

    constructor(props){
        super(props);
        this.state = {
            trabalhoVoluntarioService: new TrabalhoVoluntarioService(),
            atualizarTabelaDeVoluntarios: true,
            filtrarStatus: 3,
            contratosSelecionados: [],
            selecionarTodos: false,
            atualizarContratosSelecionados: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.setAtualizarTabelaDeVoluntarios = this.setAtualizarTabelaDeVoluntarios.bind(this);
        this.adicionarContratoSelecionado = this.adicionarContratoSelecionado.bind(this);
        this.removerContratoSelecionado = this.removerContratoSelecionado.bind(this);
        this.setSelecionarTodos = this.setSelecionarTodos.bind(this);
        this.adicionarTodos = this.adicionarTodos.bind(this);
        this.removerTodos = this.removerTodos.bind(this);
        this.setAtualizarContratosSelecionados = this.setAtualizarContratosSelecionados.bind(this);
        this.gerarArquivoCSV = this.gerarArquivoCSV.bind(this);
    }

    setSelecionarTodos(selecionarTodos){
        this.setState({selecionarTodos});
        this.setState({atualizarContratosSelecionados: true});
    }

    setAtualizarContratosSelecionados(atualizarContratosSelecionados){
        this.setState({atualizarContratosSelecionados});
    }

    adicionarContratoSelecionado(contrato){
        let contratosSelecionados = this.state.contratosSelecionados;
        contratosSelecionados.push(contrato);
        this.setState({contratosSelecionados});
    }

    removerContratoSelecionado(contrato){
        let contratosSelecionados = this.state.contratosSelecionados;
        let index = contratosSelecionados.indexOf(contrato);
        if(index != -1){
            contratosSelecionados.splice(index, 1);
        }
        this.setState({contratosSelecionados});
    }

    removerTodos(){
        this.setState({contratosSelecionados: []});
    }

    adicionarTodos(contratos){
        let contratosSelecionados = [];
        for(let i=0; i<contratos.length; i++){
            contratosSelecionados.push(contratos);
        }
        this.setState({contratosSelecionados});
    }

    setAtualizarTabelaDeVoluntarios(status){
        this.setState({atualizarTabelaDeVoluntarios: status});
    }

    handleChange(event) {
        switch (event.target.name) {
            case "status":
                this.setState({filtrarStatus: event.target.value});
                this.setAtualizarTabelaDeVoluntarios(true);
                break;   
            case "checkbox-selecionar-todos":
                this.setSelecionarTodos(event.target.checked);
                break;
        }
    }

    gerarArquivoCSV(){
        var csv = 'status;nome;campanha;email;telefone;cidade;estado\n';
 
        this.state.contratosSelecionados.forEach(function(contrato) {
                csv += contrato.status;
                csv += ';'+ contrato.voluntario.nome;
                csv += ';'+ contrato.campanhaSelecionada;
                csv += ';'+ contrato.voluntario.dadosContato.email;
                csv += ';'+ contrato.voluntario.dadosContato.telefone;
                csv += ';'+ contrato.voluntario.endereco.idCidade;
                csv += ';'+ contrato.voluntario.endereco.idEstado;
                csv += '\n';
        });
    
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'voluntarios.csv';
        hiddenElement.click();
    }

    render() {
        return (
            <div>
                <MenuTop />
                <div id="div-content">
                    <Row>
                        <Col>
                            <p className="titulo-meus-planos-mensais-gerenciamento">Voluntarios</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr className="hr-titulo-meus-planos-mensais-gerenciamento"></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{paddingTop: "1.2%"}}>
                            <Form.Check
                                active
                                type={'checkbox'}
                                label={'Selecionar todos'}
                                id={'selecionar-todos-check'}
                                className="checkbox-selecionar-todos"                                
                                onChange={this.handleChange}
                                name="checkbox-selecionar-todos"
                                value="selecionar-todos"
                            />
                        </Col>
                        <Col>
                            <select name="status" id="status" id="selector-status" className="selector-status" onChange={this.handleChange}>
                                <option value="" disabled selected>Filtrar por status</option>
                                <option value="0">Pendentes</option>
                                <option value="1">Ativos</option>
                                <option value="2">Inativos</option>
                                <option value="3">Todos</option>
                            </select>
                            <input type="button" value="Extrair lista de voluntarios" id="btn-extrair-lista-voluntario" onClick={() => this.gerarArquivoCSV()} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TabelaGerenciamentoDeVoluntarios
                                filtrarStatus={this.state.filtrarStatus}
                                setAtualizarTabelaDeVoluntarios={this.setAtualizarTabelaDeVoluntarios} 
                                atualizarTabelaDeVoluntarios={this.state.atualizarTabelaDeVoluntarios}
                                adicionarContratoSelecionado={this.adicionarContratoSelecionado}
                                removerContratoSelecionado={this.removerContratoSelecionado}
                                adicionarTodos={this.adicionarTodos}
                                removerTodos={this.removerTodos}
                                atualizarContratosSelecionados={this.state.atualizarContratosSelecionados}
                                selecionarTodos={this.state.selecionarTodos}
                                setAtualizarContratosSelecionados={this.setAtualizarContratosSelecionados}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default TelaGerenciamentoDeVoluntarios;
