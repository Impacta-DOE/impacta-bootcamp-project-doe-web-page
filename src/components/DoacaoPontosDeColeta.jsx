import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import '../css/DoacaoPontosDeColeta.css';
import TabelaPontosDeColeta from './TabelaPontosDeColeta';

class DoacaoPontosDeColeta extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <p id="titulo-pontos-coleta">Pontos de coleta:</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TabelaPontosDeColeta />
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
            </div>
        );
    }
}

export default DoacaoPontosDeColeta;