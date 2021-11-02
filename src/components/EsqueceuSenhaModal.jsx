import React, { Component } from 'react';
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';

import '../css/EsqueciSenhaModal.css';
import crossButton from '../images/cross.png';

class EsqueciSenhaModal extends Component {

    constructor(props) {
        super(props);
        this.state = {envio : null};
    }

    envioSenha(tipo){
        this.setState({envio : tipo});
        this.getFormaEnvioSenha();
    }

    getFormaEnvioSenha(){
        if(this.state.envio === "sms"){
            return (
                <div className='text-sms mt-3 border border-dark text-center'>
                    Um SMS com as instruções para a recuperação da senha foi enviado para o seguinte número <strong>(xx) xxxx-xxxx</strong>
                </div>
            );
        } else if (this.state.envio === "email"){
            return (
                <div className='text-sms mt-3 border border-dark text-center'>
                    Um e-mail com as instruções para a recuperação da senha foi enviado para o seguinte e-mail <strong>email-fake@gmail.com</strong>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

    render() {
        if (this.props.show) {
            return (
                <div>
                    <Modal
                        show={this.props.show} animation={false}
                        aria-labelledby="m-password"
                        dialogClassName="password-modal"
                        centered
                        >
                        <div style={{"width" : "100%", "height" : "auto", "paddingRight" : ".5em", "paddingTop" : ".4em"}}>
                            <img src={crossButton} id="crossButton" onClick={() => {this.props.toogleEsqueceuSenha()}}/>
                        </div>
                        <div className="password-content m-5">

                            <div className='title mb-3'>Esqueci minha senha</div>
                            
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Digite seu CPF/CNPJ</Form.Label>
                                    <Form.Control type="text" placeholder="CPF/CNPJ" id="input-cnpj-cpf" required maxlength="20" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <div className="pass-description mb-3 mt-3">Como deseja recuperar sua senha?</div>
                                
                                    <Button variant="primary" className='btn-sms mb-4' onClick={() => this.envioSenha("sms")}>SMS</Button>
                                    <Button variant="primary" className='btn-email' onClick={() => this.envioSenha("email")}>E-MAIL</Button>
                                
                                </Form.Group>
                            </Form>
                            <Row>
                                {
                                    this.getFormaEnvioSenha()
                                }
                            </Row>
                        </div>
                    </Modal>
                </div>
            );

        } else {
            return (
                <div>

                </div>
            );
        }
    }

}

export default EsqueciSenhaModal;