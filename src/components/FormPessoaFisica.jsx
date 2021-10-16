import React, { Component } from 'react';
import { Row, Col, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import '../css/FormPessoaFisica.css';

class FormPessoaFisica extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formInformacoesPessois">
                        <Form.Control type="text" placeholder="Nome Completo" />
                        <Row>
                            <Col sm="5" className="col-form">
                                <input id="date" type="date" placeholder="Data de nascimento"></input>
                            </Col>
                            <Col sm="5" className="col-form">
                                <DropdownButton id="dropdown-item-button" title="Sexo">
                                    <Dropdown.Item eventKey="Feminino">Feminino</Dropdown.Item>
                                    <Dropdown.Item eventKey="Masculino">Masculino</Dropdown.Item>
                                    <Dropdown.Item eventKey="Outros">Outros</Dropdown.Item>
                                    <Dropdown.Item eventKey="Não quero informar">Não quero informar</Dropdown.Item>
                                </DropdownButton>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="5" className="col-form">
                                <DropdownButton id="dropdown-item-button" title="Nacionalidade">
                                    <Dropdown.Item eventKey="option-1">Nacionalidade 01</Dropdown.Item>
                                    <Dropdown.Item eventKey="option-2">Nacionalidade 02</Dropdown.Item>
                                    <Dropdown.Item eventKey="option-3">Nacionalidade 03</Dropdown.Item>
                                    <Dropdown.Item eventKey="option-4">Nacionalidade 04</Dropdown.Item>
                                </DropdownButton>
                            </Col>
                            <Col sm="5" className="col-form">
                                <Form.Control type="text" placeholder="CPF / RNE" />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formDadosContato">
                        <Form.Label>
                            Dados de contato
                        </Form.Label>
                        <hr />
                        <Row>
                            <Col sm="5" className="col-form">
                                <Form.Control type="text" placeholder="E-mail" />
                            </Col>
                            <Col sm="5" className="col-form">
                                <Form.Control type="text" placeholder="Telefone" />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formEndereco">
                        <Form.Label>
                            Endereço
                        </Form.Label>
                        <hr />
                        <Row>
                            <Col sm="5" className="col-form">
                                <Form.Control type="text" placeholder="CEP" />
                            </Col>
                            <Col sm="5" className="col-form">
                                <Form.Control type="text" placeholder="Rua" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="2" className="col-form">
                                <Form.Control type="text" placeholder="N°" />
                            </Col>
                            <Col sm="4" className="col-form">
                                <Form.Control type="text" placeholder="Complemento" />
                            </Col>
                            <Col sm="4" className="col-form">
                                <Form.Control type="text" placeholder="Bairro" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="5" className="col-form">
                                <DropdownButton id="dropdown-item-button" title="Estado">
                                    <Dropdown.Item eventKey="option-1">Estado 01</Dropdown.Item>
                                    <Dropdown.Item eventKey="option-2">Estado 02</Dropdown.Item>
                                    <Dropdown.Item eventKey="option-3">Estado 03</Dropdown.Item>
                                    <Dropdown.Item eventKey="option-4">Estado 04</Dropdown.Item>
                                </DropdownButton>
                            </Col>
                            <Col sm="5" className="col-form">
                                <DropdownButton id="dropdown-item-button" title="Cidade">
                                    <Dropdown.Item eventKey="option-1">Cidade 01</Dropdown.Item>
                                    <Dropdown.Item eventKey="option-2">Cidade 02</Dropdown.Item>
                                    <Dropdown.Item eventKey="option-3">Cidade 03</Dropdown.Item>
                                    <Dropdown.Item eventKey="option-4">Cidade 04</Dropdown.Item>
                                </DropdownButton>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formSenha">
                        <Form.Label>
                            Senha
                        </Form.Label>
                        <hr />
                        <Row>
                            <Col sm="5" className="col-form">
                                <Form.Control type="password" placeholder="Senha" />
                            </Col>
                            <Col sm="5" className="col-form">
                                <Form.Control type="password" placeholder="Confirmar Senha" />
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default FormPessoaFisica;