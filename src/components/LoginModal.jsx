import React, { Component } from 'react';
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';

import '../css/LoginModal.css';
import crossButton from '../images/cross.png';


class LoginModal extends Component { 

    constructor(props){
        super(props);
    }

    render() {
        if(this.props.show){
            return ( 
                <div id="modal">
                    <Modal
                        show={this.props.show} animation={false}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        >
                        <div style={{"width" : "100%", "height" : "auto", "paddingRight" : ".5em", "paddingTop" : ".4em"}}>
                            <img src={crossButton} id="crossButton" onClick={() => {this.props.toogleLogin()}}/>
                        </div>
                        <div className="login-content m-5">
                            <div className="title">Login</div>
                            <Form>
                                <Form.Group controlId="formLogin">
                                    
                                    <Row>
                                        <Col className="col-form">
                                            <Form.Control type="text" placeholder="E-mail" className="input mt-2" name="email"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="col-form">
                                            <Form.Control type="password" placeholder="Senha" className="input mt-2" name="password"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button variant="link" className='btn-esqueceu-senha mt-2'>Esqueceu a senha?</Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button variant="primary" className='btn-entrar mt-2'>ENTRAR</Button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Form>
                        </div>
                    </Modal>
                </div>
            );
            
        }else{
            return (
                <div>
                    
                </div>
            );
        }
    }

}

export default LoginModal;