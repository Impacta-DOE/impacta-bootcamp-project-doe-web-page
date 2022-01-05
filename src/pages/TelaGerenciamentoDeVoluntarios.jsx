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
            filtrarStatus: 3
        };
        this.handleChange = this.handleChange.bind(this);
        this.setAtualizarTabelaDeVoluntarios = this.setAtualizarTabelaDeVoluntarios.bind(this);
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
        }
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
                            <input type="button" value="Extrair lista de voluntarios" id="btn-extrair-lista-voluntario" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TabelaGerenciamentoDeVoluntarios
                                filtrarStatus={this.state.filtrarStatus}
                                setAtualizarTabelaDeVoluntarios={this.setAtualizarTabelaDeVoluntarios} 
                                atualizarTabelaDeVoluntarios={this.state.atualizarTabelaDeVoluntarios}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default TelaGerenciamentoDeVoluntarios;