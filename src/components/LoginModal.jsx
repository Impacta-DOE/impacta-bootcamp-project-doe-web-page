import React, { Component } from 'react';
import { Row, Col, Form, Button, Modal, Spinner } from 'react-bootstrap';

import '../css/LoginModal.css';
import crossButton from '../images/cross.png';
import AuthenticationService from '../services/AuthenticationService';
import EsqueciSenhaModal from './EsqueceuSenhaModal';


class LoginModal extends Component { 

    constructor(props){
        super(props);
        this.state = {toogleEsqueceuSenha : false, authService : new AuthenticationService(), username : '', password : '', loading : false};
        this.showModalEsqueceuSenha = this.showModalEsqueceuSenha.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    showModalEsqueceuSenha(){
        this.setState({toogleEsqueceuSenha : !this.state.toogleEsqueceuSenha});
    }

    handleChange(event){
        switch (event.target.name) {
            case "email":
                this.setState({username: event.target.value});
                break;
            case "password":
                this.setState({password: event.target.value});
                break;      
        }
    }

    async login(){
        this.setState({loading : true});
        await this.state.authService.login(this.state.username, this.state.password)
                                    .then(() => {
                                        this.setState({loading : false})
                                        this.props.toogleLogin();
                                        localStorage.setItem("isLoggedIn", true);
                                        window.location.reload();
                                    }).catch(() => {
                                        this.setState({loading : false})
                                        alert("Usuário não encontrado");
                                        localStorage.setItem("isLoggedIn", false);
                                    });
    }

    render() {
        if(this.props.show){
            return ( 
                <div id="modal">
                    <Modal
                        show={this.props.show} animation={false}
                        aria-labelledby="m-login"
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
                                            <Form.Control type="text" placeholder="E-mail" className="input mt-2" name="email" onChange={this.handleChange} disabled={this.state.loading}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="col-form">
                                            <Form.Control type="password" placeholder="Senha" className="input mt-2" name="password" onChange={this.handleChange} disabled={this.state.loading}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button variant="link" className='btn-esqueceu-senha mt-2' onClick={() => this.showModalEsqueceuSenha()}>Esqueceu a senha?</Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button 
                                                variant="primary" 
                                                className='btn-entrar mt-2' 
                                                onClick={() => this.login()} 
                                                disabled={this.state.loading}
                                                style={{'display' : ((this.state.loading) ? 'none' : 'block')}}
                                            >ENTRAR</Button>
                                            <Spinner 
                                                animation="border" 
                                                variant="primary"
                                                style={{
                                                        'margin' : '0 auto',
                                                        'marginTop' : '2em',
                                                        'marginBottom' : '-2em',
                                                        'display' : ((!this.state.loading) ? 'none' : 'block')}} 
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Form>
                        </div>
                    </Modal>
                    <EsqueciSenhaModal show={this.state.toogleEsqueceuSenha} toogleEsqueceuSenha={this.showModalEsqueceuSenha}/>
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