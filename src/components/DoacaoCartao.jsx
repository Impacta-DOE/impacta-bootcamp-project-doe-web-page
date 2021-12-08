import React, { Component } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

import "../css/DoacaoCartao.css";

class DoacaoCartao extends Component {


    render() {
        return (
            <div>
                <Form>
                    <Row >
                        <Col sm="5" className="col-form">
                            <Form.Control type="text" placeholder="Nome completo" id="input-nome"/>
                        </Col>
                        <Col sm="5" className="col-form">
                            <Form.Control type="text" placeholder=" N° Cartão xxxx.xxxx.xxxx.xxxx" id="input-ncartao"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <select name="bandeira-cartao" id="bandeiraCartao" id="selector-bandeira-cartao">
                                <option value="" disabled selected>Bandeira Cartão</option>
                                <option value="ctCredito">Cartão de crédito</option>
                                <option value="pix">PIX</option>
                            </select>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm="6" className="col-form">
                            <Form.Control type="text" placeholder="Data de validade" id="input-dt-validade"/>
                        </Col>
                        <Col sm="4" className="col-form">
                            <Form.Control type="text" placeholder="CVV" id="input-cvv"/>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <Form.Control type="text" placeholder="Valor Doação" id="input-valor-doado"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Check
                                active
                                type={'checkbox'}
                                label={'Salvar este cartão para doações futuras'}
                                id={'salvar-cartao-check'}
                                className="checkbox-doacao"
                                style={{marginTop : "1.5em"}}
                                onClick={() => this.onCheck("estado")}
                                onChange={this.handleChange}
                                name="checkbox-salvar-cartao"
                                value="salvar-cartao"
                            />
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
                            <input type="button" value="Realizar doação" id="btn-realizar-doacao" align="center"/>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default DoacaoCartao;