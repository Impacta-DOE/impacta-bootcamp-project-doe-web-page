import React, { Component } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';

import '../css/DoacaoPIX.css';

class DoacaoPIX extends Component {

    constructor(props){
        super(props);
        this.state = {showQRCForm: false};
    }

    showQRCForm(){
        this.setState({showQRCForm: true});
        this.props.setDisplayComboTpPagamento("none");
    }

    render() {
        if(!this.state.showQRCForm){
            return (
                <div>
                    <Form>
                        <Form.Group style={{marginBottom: "8.5em"}}>
                            <Row >
                                <Col>
                                    <Form.Control type="text" placeholder="Nome Completo" id="input-nome-completo"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control type="text" placeholder="CPF/RNE/CNPJ" id="input-registro"/>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Check
                                    active
                                    type={'checkbox'}
                                    label={'Doar como anônimo'}
                                    id={'doacao-anonima-check'}
                                    className="checkbox-doacao"
                                    style={{marginTop : ".1em"}}
                                    onClick={() => this.onCheck("cidade")}
                                    onChange={this.handleChange}
                                    name="checkbox-doacao-anonima"
                                    value="doacao-anonima"
                                />
                                <Form.Check
                                    active
                                    type={'checkbox'}
                                    label={'Esconder valor doado'}
                                    id={'esconder-valor-check'}
                                    className="checkbox-doacao"
                                    style={{marginTop : ".1em"}}
                                    onChange={this.handleChange}
                                    name="checkbox-esconder-valor"
                                    value="esconder-valor"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="titulo-comentario-doacao">Comentario</p>
                                <hr className="hr-titulo-desc-campanha"></hr>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div id="div-img-usuario">
                                    <div id="avatar-usuario">
                                        <div style={{
                                                    width: "100%", 
                                                    height: "100%",
                                                    backgroundColor: "rgba(0, 0, 0, .4)", 
                                                    zIndex: "0",
                                                    borderRadius: "15em",
                                                    paddingTop: ".65em"
                                                }}>
                                            <p>NU</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="div-comentario" style={{width: "92%", float: "right"}}>
                                    <p id="comentario-nome-usuario">Nome usuario</p>
                                    <Form.Control type="text-area" placeholder="Escrever um comentario..." id="area-comentario"/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <Button variant="success" id="btn-proximo" onClick={() => this.showQRCForm()}>Próximo</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            );
        } else {
            return (
                <div style={{width: "100%", height: "10em", backgroundColor: "yellow"}}>
                </div>
            );
        }
    }
}

export default DoacaoPIX;