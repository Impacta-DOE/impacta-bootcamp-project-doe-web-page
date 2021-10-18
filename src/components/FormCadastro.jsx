import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import '../css/FormCadastro.css';
import logo from '../images/logo.png';
import FormPessoaFisica from './FormPessoaFisica';
import FormPessoaJuridica from './FormPessoaJuridica';

class FormCadastro extends Component {

    constructor(props){
        super(props);
        this.state = {tipoPessoa : "fisica"};
    }

    mudarTipoPessoa(novoTipoPessoa){
        this.setState({tipoPessoa : novoTipoPessoa});
    }

    getFormTipoPessoa(){
        if(this.state.tipoPessoa === "fisica"){
            return <FormPessoaFisica />
        } else {
            return <FormPessoaJuridica />
        }
    }

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
                                    checked={this.state.tipoPessoa === "fisica"}
                                    type={'radio'}
                                    label={'Sou pessoa física'}
                                    name='group-kind-person'
                                    id={'default-radio-01'}
                                    className="radio-button"
                                    onChange={() => this.mudarTipoPessoa("fisica")}
                                />
                            </Col>
                            <Col>
                                <Form.Check
                                    checked={this.state.tipoPessoa === "juridica"}
                                    type={'radio'}
                                    label={'Sou pessoa juridica'}
                                    name='group-kind-person'
                                    id={'default-radio-02'}
                                    className="radio-button"
                                    onChange={() => this.mudarTipoPessoa("juridica")}
                                />
                            </Col>
                        </Row>
                        <div className="forms-area">
                            {
                                this.getFormTipoPessoa()
                            }
                        </div>
                    </div>
               </div>
            </div>
        );
    }
}

export default FormCadastro;