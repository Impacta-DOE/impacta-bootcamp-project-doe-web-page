import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import '../css/FormCadastro.css';
import logo from '../images/logo.png';
import FormPessoaFisica from './FormPessoaFisica';

class FormCadastro extends Component {
    render() {
        return (
            <div>
               <div className="container"> 
                    <div className="container-logo">
                        <Container fluid="md" >
                            <Row className="justify-content-md-center">
                                <Col id="col">
                                    <span className="span-1">
                                        Bem-vindo a plataforma
                                    </span>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col id="col">
                                    <img src={logo} className="logo-container"/>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col id="col">
                                    <span className="span-2">
                                        Contribua para que os sonhos de milhões de pessoas se tornem realidade
                                    </span>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center"> 
                                <Col id="col">
                                    <span className="span-2">
                                        Ajude milhares de organizações a se manterem de pé
                                    </span>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="container-form">
                        <Row>
                            <span className="titulo-formulario">Cadastre-se agora</span>
                        </Row>
                        <Row>
                            <Col sm="4">
                                <Form.Check
                                    checked
                                    type={'radio'}
                                    label={'Sou pessoa física'}
                                    name='group-kind-person'
                                    id={'default-radio-01'}
                                    className="radio-button"
                                />
                            </Col>
                            <Col>
                                <Form.Check
                                    type={'radio'}
                                    label={'Sou pessoa juridica'}
                                    name='group-kind-person'
                                    id={'default-radio-02'}
                                    className="radio-button"
                                />
                            </Col>
                        </Row>
                        <div className="forms-area">
                            <FormPessoaFisica />
                        </div>
                    </div>
               </div>
            </div>
        );
    }
}

export default FormCadastro;