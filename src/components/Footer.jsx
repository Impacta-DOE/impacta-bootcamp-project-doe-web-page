import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import '../css/Footer.css';
import logo from '../images/logo.png';
import DoacaoModal from './DoacaoModal';

class Footer extends Component {

    constructor(props){
        super(props);
        this.state = {showModal: false};
        this.setShowModal = this.setShowModal.bind(this);
    }

    setShowModal() {
        this.setState({showModal : !this.state.showModal});
    }

    render() {
        return (
            <>
                <footer id="content-footer" style={{marginTop : this.props.marginTop}}>
                    <div id="div-text">
                        <Row style={{width : "100%", height : "100%", marginLeft : ".0em"}}>
                            <Col style={{width : "50%", height : "100%", paddingTop : "6em"}}>
                                <p className="footer-text">Ajude a plataforma</p>
                                <img src={logo} id="footer-logo"/>
                                <p className="footer-text">a se manter de pé</p>
                            </Col>
                            <Col style={{width : "50%", height : "100%", paddingTop : "6em"}}>
                                <input type="button" value="Clique aqui" className="btn-doacao" onClick={() => this.setShowModal()}/>
                                <div style={{width : "21em"}}>
                                    <p className="footer-text">e mantenha a rede do bem operante</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </footer>
                <DoacaoModal showModal={this.state.showModal} setShowModal={this.setShowModal}/>
            </>
        );
    }
}

export default Footer;