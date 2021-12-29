import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import '../css/CancelarParticipacaoModal.css';

import crossButton from '../images/cross.png';

class CancelarParticipacaoModal extends Component {
    render() {
        return (
            <Modal
                show={this.props.showModal} animation={false}
                aria-labelledby="m-cancelar-participacao"
                centered
                dialogClassName="modal-cancelar-participacao"
            >
                <div style={{width : "100%", height : "auto", paddingRight : ".5em", paddingTop : ".4em"}}>
                    <img src={crossButton} id="crossButton" onClick={() => {this.props.setShowModalCancelarParticipacao()}}/>
                </div>
                <Modal.Body style={{width: "100%", height: "auto", textAlign: "center", padding: "0", marginTop: ".8em"}}>
                    <div style={{width: "100%", height: "4%", paddingLeft: "1.1em", paddingRight: "1.1em"}}>
                        <p id="p-cancelar-participacao">Deseja realmente cancelar sua participação no trabalho da {this.props.campanha.organizacao.nome}?</p>
                    </div>
                    <div style={{width: "100%", height: "auto"}}>
                        <input type="button" value="Confirmar" id="btn-confirmar"/>
                        <input type="button" value="Cancelar" id="btn-cancelar" onClick={() => {this.props.setShowModalCancelarParticipacao()}}/>
                    </div>
                </Modal.Body>

            </Modal>
        );
    }
}

export default CancelarParticipacaoModal;