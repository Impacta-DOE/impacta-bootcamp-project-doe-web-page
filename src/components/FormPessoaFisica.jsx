import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import '../css/FormPessoaFisica.css';
import LocalizacaoService from '../services/LocalizacaoService';
import Select from 'react-select';

class FormPessoaFisica extends Component {

    constructor(props){
        super(props);
        this.state = {
                        type : 'text', 
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

    changeInputType(newType) {
        this.setState({type : newType});
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
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formInformacoesPessois">
                        <Row>
                            <Col>
                                <Form.Control type="text" placeholder="Nome Completo" id="input-nome-completo"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="5" className="col-form">
                                <input 
                                    id="date" 
                                    type={this.state.type} 
                                    placeholder="Data de nascimento" 
                                    className="input-date" 
                                    style={{width: '16em'}}
                                    onFocus={() => this.changeInputType('date')}
                                    onBlur={() => this.changeInputType('text')}
                                ></input>
                            </Col>
                            <Col sm="5" className="col-form">
                                <select name="sexo" id="sexo" id="selector-sexo" className="selector">
                                    <option value="" disabled selected>Sexo</option>
                                    <option value="Feminino">Feminino</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Outros">Outros</option>
                                    <option value="Não quero informar">Não quero informar</option>
                                </select>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="5" className="col-form">
                                <select name="nascionalidade" id="nascionalidade" id="input01" className="selector">
                                    <option value="" disabled selected>Nacionalidade</option>
                                    <option value="nasc01">Nascionalidade 01</option>
                                    <option value="nasc02">Nascionalidade 02</option>
                                    <option value="nasc03">Nascionalidade 03</option>
                                    <option value="nasc04">Nascionalidade 04</option>
                                </select>
                            </Col>
                            <Col sm="5" className="col-form">
                                <Form.Control type="text" placeholder="CPF / RNE" id="input02"/>
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
                    <Button variant="success" id="btn-cadastrar">CADASTRAR</Button>
                </Form>
            </div>
        );
    }
}

export default FormPessoaFisica;