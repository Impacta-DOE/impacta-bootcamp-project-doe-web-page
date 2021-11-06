import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import '../css/FormEdicaoPessoaJuridica.css';

class FormEdicaoPessoaJuridica extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Row>
                    <div className="box-titulo-principal mb-2">
                        Dados do perfil
                    </div>
                    <hr className="separador-profile"/>
                </Row>
                <Form>
                    <Form.Group>
                        <Row>
                            <Col sm="4" className="col-form">
                                <Form.Control type="text" placeholder="CNPJ" className="input-default"/>
                            </Col>
                            <Col sm="8" className="col-form">
                                <Form.Control type="text" placeholder="Razão Social" className="input-default"/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="titulo-group" className="mt-3">
                            Dados bancários
                        </Form.Label>
                        <hr className="separador-profile-group"/>
                        <Row>
                            <Col sm="8" className="col-form">
                                <Form.Control type="text" placeholder="Conta" className="input-default"/>
                            </Col>
                            <Col sm="4" className="col-form">
                                <Form.Control type="text" placeholder="Agência" className="input-default"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="4" className="col-form">
                                <Form.Control type="text" placeholder="Código Banco" className="input-default"/>
                            </Col>
                            <Col sm="8" className="col-form">
                                <select name="cod-banco" className="select input-default">
                                    <option value="" disabled selected>Cód / Banco</option>
                                    <option value="001">001 - Banco do Brasil</option>
                                    <option value="237">237 - Banco Bradesco</option>
                                    <option value="077">077 - Banco Inter</option>
                                    <option value="033">033 - Banco Santander</option>
                                </select>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="titulo-group" className="mt-3">
                            Dados de contato
                        </Form.Label>
                        <hr className="separador-profile-group"/>
                        <Row>
                            <Col sm="6" className="col-form">
                                <Form.Control type="text" placeholder="E-mail" className="input-default"/>
                            </Col>
                            <Col sm="6" className="col-form">
                                <Form.Control type="text" placeholder="Telefone" className="input-default"/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="titulo-group" className="mt-3">
                            Endereço
                        </Form.Label>
                        <hr className="separador-profile-group"/>
                        <Row>
                            <Col sm="4" className="col-form">
                                <Form.Control type="text" placeholder="CEP" className="input-default"/>
                            </Col>
                            <Col sm="8" className="col-form">
                                <Form.Control type="text" placeholder="Rua" className="input-default"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="2" className="col-form">
                                <Form.Control type="text" placeholder="N°" className="input-default"/>
                            </Col>
                            <Col sm="5" className="col-form">
                                <Form.Control type="text" placeholder="Complemento" className="input-default"/>
                            </Col>
                            <Col sm="5" className="col-form">
                                <Form.Control type="text" placeholder="Bairro" className="input-default"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="6" className="col-form">
                                <select name="estado" id="estado" className="selector input-default">
                                    <option value="" disabled selected>Estado</option>
                                    <option value="estado01">Estado 01</option>
                                    <option value="estado02">Estado 02</option>
                                    <option value="estado03">Estado 03</option>
                                    <option value="estado04">Estado 04</option>
                                </select>
                            </Col>
                            <Col sm="6" className="col-form">
                                <select name="cidade" id="cidade" className="selector input-default">
                                    <option value="" disabled selected>Cidade</option>
                                    <option value="cidade01">Cidade 01</option>
                                    <option value="cidade02">Cidade 02</option>
                                    <option value="cidade03">Cidade 03</option>
                                    <option value="cidade04">Cidade 04</option>
                                </select>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="titulo-group" className="mt-3">
                            Senha
                        </Form.Label>
                        <hr className="separador-profile-group"/>
                        <Row>
                            <Col sm="6" className="col-form">
                                <Form.Control type="password" placeholder="Senha" className="input-default"/>
                            </Col>
                            <Col sm="6" className="col-form">
                                <Form.Control type="password" placeholder="Confirmar Senha" className="input-default"/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" id="btn-editar">Editar dados</Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default FormEdicaoPessoaJuridica;