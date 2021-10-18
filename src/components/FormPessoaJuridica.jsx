import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

import '../css/FormPessoaJuridica.css';

class FormPessoaJuridica extends Component {
    render() {
        return (
            <div id="div-form">
                <Form>
                    <Form.Group className="mb-3" controlId="formIdentificacao">
                        <Row>
                            <Col sm="2" className="col-form">
                                <Form.Control type="text" placeholder="CNPJ" id="input04"/>
                            </Col>
                            <Col sm="8" className="col-form">
                                <Form.Control type="text" placeholder="Razão Social" id="input05"/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formDadosBancarios">
                        <Form.Label id="titulo-group">
                            Dados Bancarios
                        </Form.Label>
                        <hr className="separador"/>
                        <Row>
                            <Col sm="2" className="col-form">
                                <Form.Control type="text" placeholder="Conta" id="input04"/>
                            </Col>
                            <Col sm="8" className="col-form">
                                <Form.Control type="text" placeholder="Agência" id="input-agencia"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="2" className="col-form">
                                <Form.Control type="text" placeholder="Código Banco" id="input04"/>
                            </Col>
                            <Col sm="8" className="col-form">
                                <select name="estado" id="estado" id="input-cod-banco" className="selector">
                                    <option value="" disabled selected>Código/Banco</option>
                                    <option value="01/Banco01">01/Banco01</option>
                                    <option value="02/Banco02">02/Banco02</option>
                                    <option value="03/Banco03">03/Banco03</option>
                                    <option value="04/Banco04">04/Banco04</option>
                                </select>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formDadosContato">
                        <Form.Label id="titulo-group">
                            Dados de contato
                        </Form.Label>
                        <hr className="separador"/>
                        <Row>
                            <Col sm="5" className="col-form">
                                <Form.Control type="text" placeholder="E-mail" id="input01"/>
                            </Col>
                            <Col sm="5" className="col-form">
                                <Form.Control type="text" placeholder="Telefone" id="input03"/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formEndereco">
                        <Form.Label id="titulo-group">
                            Endereço
                        </Form.Label>
                        <hr className="separador"/>
                        <Row>
                            <Col sm="5" className="col-form">
                                <Form.Control type="text" placeholder="CEP" id="input01"/>
                            </Col>
                            <Col sm="5" className="col-form">
                                <Form.Control type="text" placeholder="Rua" id="input03"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="2" className="col-form">
                                <Form.Control type="text" placeholder="N°" id="input-numero-casa"/>
                            </Col>
                            <Col sm="4" className="col-form">
                                <Form.Control type="text" placeholder="Complemento" id="input-complemento"/>
                            </Col>
                            <Col sm="4" className="col-form">
                                <Form.Control type="text" placeholder="Bairro" id="input-bairro"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="5" className="col-form">
                                <select name="estado" id="estado" id="input01" className="selector">
                                    <option value="" disabled selected>Estado</option>
                                    <option value="estado01">Estado 01</option>
                                    <option value="estado02">Estado 02</option>
                                    <option value="estado03">Estado 03</option>
                                    <option value="estado04">Estado 04</option>
                                </select>
                            </Col>
                            <Col sm="5" className="col-form">
                                <select name="cidade" id="cidade" id="input03" className="selector">
                                    <option value="" disabled selected>Cidade</option>
                                    <option value="cidade01">Cidade 01</option>
                                    <option value="cidade02">Cidade 02</option>
                                    <option value="cidade03">Cidade 03</option>
                                    <option value="cidade04">Cidade 04</option>
                                </select>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formSenha">
                        <Form.Label id="titulo-group">
                            Senha
                        </Form.Label>
                        <hr className="separador"/>
                        <Row>
                            <Col sm="5" className="col-form">
                                <Form.Control type="password" placeholder="Senha" id="input01"/>
                            </Col>
                            <Col sm="5" className="col-form">
                                <Form.Control type="password" placeholder="Confirmar Senha" id="input03"/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Button variant="success" id="btn-cadastrar-pessoa-juridica">CADASTRAR</Button>
                </Form>
            </div>
        );
    }
}

export default FormPessoaJuridica;