import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import crossButton from '../images/cross.png';

import '../css/AceitarVoluntarioModal.css';

class AceitarVoluntarioModal extends Component {
    render() {
        return (
            <Modal
                show={this.props.showModal} animation={false}
                aria-labelledby="m-cancelar-participacao"
                centered
                dialogClassName="modal-aceitar-voluntario"
            >
                <div style={{width : "100%", height : "auto", paddingRight : ".5em", paddingTop : ".4em"}}>
                    <img src={crossButton} id="crossButton" onClick={() => {this.props.setShowModalAceitarVoluntario()}}/>
                </div>
                <Modal.Body style={{width: "100%", height: "auto", textAlign: "center", padding: "0", marginTop: ".8em"}}>
                    <div style={{width: "100%", height: "4%", paddingLeft: "1.1em", paddingRight: "1.1em"}}>
                        <p id="p-cancelar-participacao">Deseja realmente aceitar o voluntario {this.props.contrato.voluntario.nome}?</p>
                    </div>
                    <div style={{width: "100%", height: "auto"}}>
                        <input type="button" value="Confirmar" id="btn-confirmar"/>
                        <input type="button" value="Cancelar" id="btn-cancelar" onClick={() => {this.props.setShowModalAceitarVoluntario()}}/>
                    </div>
                </Modal.Body>

            </Modal>
        );
    }
}

export default AceitarVoluntarioModal;