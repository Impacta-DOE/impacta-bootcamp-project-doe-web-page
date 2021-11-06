import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import '../css/FormEdicaoPessoaFisica.css';

class FormEdicaoPessoaFisica extends Component {

    constructor(props){
        super(props);
        this.state = {type : 'text'};
    }

    changeInputType(newType) {
        this.setState({type : newType});
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
                            <Col>
                                <Form.Control type="text" placeholder="Nome Completo" id="input-nome-completo"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="6" className="col-form">
                                <input 
                                    id="date" 
                                    type={this.state.type} 
                                    placeholder="Data de nascimento" 
                                    className="input-date-edicao" 
                                    onFocus={() => this.changeInputType('date')}
                                    onBlur={() => this.changeInputType('text')}
                                ></input>
                            </Col>
                            <Col xs="6" className="col-form">
                                <select name="sexo" id="selector-sexo-edicao" className="selector">
                                    <option value="" disabled selected>Sexo</option>
                                    <option value="Feminino">Feminino</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Outros">Outros</option>
                                    <option value="Não quero informar">Não quero informar</option>
                                </select>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="6" className="col-form">
                                <select name="nascionalidade" id="input-edicao-nacionalidade" className="selector">
                                    <option value="" disabled selected>Nacionalidade</option>
                                    <option value="nasc01">Nascionalidade 01</option>
                                    <option value="nasc02">Nascionalidade 02</option>
                                    <option value="nasc03">Nascionalidade 03</option>
                                    <option value="nasc04">Nascionalidade 04</option>
                                </select>
                            </Col>
                            <Col sm="6" className="col-form">
                                <Form.Control type="text" placeholder="CPF / RNE" id="input-edicao-cpf"/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="titulo-group" className="mt-3">
                            Dados bancários
                        </Form.Label>
                        <hr className="separador-profile-group"/>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default FormEdicaoPessoaFisica;