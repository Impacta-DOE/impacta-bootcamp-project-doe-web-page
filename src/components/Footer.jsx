import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import '../css/Footer.css';
import logo from '../images/logo.png';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div id="content-footer">
                    <div id="div-text">
                        <Row style={{width : "100%", height : "100%", marginLeft : ".0em"}}>
                            <Col style={{width : "50%", height : "100%", paddingTop : "6em"}}>
                                <p className="footer-text">Ajude a plataforma</p>
                                <img src={logo} id="footer-logo"/>
                                <p className="footer-text">a se manter de pé</p>
                            </Col>
                            <Col style={{width : "50%", height : "100%", paddingTop : "6em"}}>
                                <input type="button" value="Clique aqui" className="btn-doacao"/>
                                <div style={{width : "21em"}}>
                                    <p className="footer-text">e mantenha a rede do bem operante</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;