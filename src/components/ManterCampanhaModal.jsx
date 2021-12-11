import React, { Component } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';

import '../css/ManterCampanhaModal.css';

import crossButton from '../images/cross.png';

class ManterCampanhaModal extends Component {
    render() {
        return (
            <Modal
                show={this.props.showModal} animation={false}
                aria-labelledby="m-campanha"
                centered
                dialogClassName="modal-campanha"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <div id="container-img-background">
                    <div style={{width : "100%", height : "auto", paddingRight : ".5em", paddingTop : ".4em"}}>
                        <img src={crossButton} id="crossButton" onClick={() => {this.props.setShowModal()}}/>
                    </div>
                    <div style={{width : "100%", height : "auto", position : "absolute", bottom: "0"}}>
                        <input type="button" value="Adicionar foto de capa" id="btn-mudar-foto-capa"/>
                    </div>
                </div>
                <Modal.Body style={{height: "30em", position: "relative", padding: "2em"}}>
                    <Row>
                        <Col>
                            <p className="titulo-desc-campanha">Criar campanha/ação</p>
                            <hr className="hr-titulo-desc-campanha"></hr>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        );
    }
}

export default ManterCampanhaModal;