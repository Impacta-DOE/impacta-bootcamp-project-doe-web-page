import React, { Component } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import MenuTop from '../components/MenuTop';
import TabelaGerenciamentoDeVoluntarios from '../components/TabelaGerenciamentoDeVoluntarios';

import '../css/TelaGerenciamentoDeVoluntarios.css';

class TelaGerenciamentoDeVoluntarios extends Component {
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
                                <option value="pendentes">Pendentes</option>
                                <option value="ativos">Ativos</option>
                                <option value="inativos">Inativos</option>
                                <option value="todos">Todos</option>
                            </select>
                            <input type="button" value="Extrair lista de voluntarios" id="btn-extrair-lista-voluntario" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TabelaGerenciamentoDeVoluntarios />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default TelaGerenciamentoDeVoluntarios;