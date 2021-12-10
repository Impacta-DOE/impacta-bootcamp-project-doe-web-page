import React, { Component } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';

import qrc from '../images/exemploQRC.png';

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
                        <Form.Group style={{marginBottom: "6.5em"}}>
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
                            <Row >
                                <Col>
                                    <Form.Control type="text" placeholder="Valor Doação" id="input-valor-doado"/>
                                </Col>
                            </Row>
                        </Form.Group>

                        {
                            (this.props.habilitarComentario) ?
                                <>
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
                                            <div id="div-comentario" style={{width: "94%", float: "right"}}>
                                                <p id="comentario-nome-usuario">Nome usuario</p>
                                                <textarea id="textarea-comentario" name="comentario" cols="50" placeholder="Escrever um comentario...">
                                                </textarea>
                                            </div>
                                        </Col>
                                    </Row>
                                </>
                            : null
                        }
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
                <div>
                    <Row>
                        <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <p id="msg-finalizar-pagamento">Finalize o pagamento usando o PIX!</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <img src={qrc} className="qrc-img" />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <textarea id="qrc-link" name="qrc-link" cols="50" style={{resize: "none"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a cursus felis. Aenean auctor ligula metus, ac molestie ante iaculis nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec posuere viverra velit eu ultricies. Nulla volutpat eget erat nec congue. Ut sagittis elit nec lectus sagittis suscipit. Nulla ullamcorper nisl a tellus fringilla, vel elementum metus aliquet. Nam gravida nisl vitae leo rutrum, et consectetur erat placerat. Nam feugiat, nunc vel placerat rutrum, nisi est rutrum arcu, vitae consectetur urna augue nec nulla.
                            </textarea>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <input type="button" value="Finalizar doação" id="btn-finalizar-doacao" align="center"/>
                        </Col>
                    </Row>
                </div>
            );
        }
    }
}

export default DoacaoPIX;