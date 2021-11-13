import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

import '../css/FormPessoaJuridica.css';
import LocalizacaoService from '../services/LocalizacaoService';

class FormPessoaJuridica extends Component {

    constructor(props){
        super(props);
        this.state = {
                        localizacaoService : new LocalizacaoService(),
                        estados : [],
                        cidades : []
                    };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.state.localizacaoService.getEstados().then(estados => {           
            this.setState({estados});
        });
    }

    changeCidades(uf){
        this.state.localizacaoService.getCidadesByUF(uf).then(cidades => {
            this.setState({cidades});
        })
    }

    handleChange(event){
        switch (event.target.name) {
            case "estado":
                this.changeCidades(event.target.value);
                break;   
        }
    }

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
                                <select name="estado" id="estado" id="input01" className="selector" onChange={this.handleChange}>
                                    <option value="" disabled selected>Estado</option>
                                    {this.state.estados.map(estado => <option value={estado.id}>{estado.nome}</option>)}
                                </select>
                            </Col>
                            <Col sm="5" className="col-form">
                                <select name="cidade" id="cidade" id="input03" className="selector">
                                    <option value="" disabled selected>Cidade</option>
                                    {this.state.cidades.map(cidade => <option value={cidade.id}>{cidade.nome}</option>)}
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