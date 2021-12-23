import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import crossButton from '../images/cross.png';

import '../css/InativarCampanhaModal.css';

class InativarCampanhaModal extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <Modal
                show={this.props.showModal} animation={false}
                aria-labelledby="m-inativar-campanha"
                centered
                dialogClassName="modal-inativar-campanha"
            >
                <div style={{width : "100%", height : "auto", paddingRight : ".5em", paddingTop : ".4em"}}>
                    <img src={crossButton} id="crossButton" onClick={() => {this.props.setShowModalInativarCampanha()}}/>
                </div>
                <Modal.Body style={{width: "100%", height: "auto", textAlign: "center", padding: "0", marginTop: ".8em"}}>
                    <div style={{width: "100%", height: "4%", paddingLeft: "1.1em", paddingRight: "1.1em"}}>
                        <p id="p-inativar-campanha">Deseja realmente inativar a campanha/ação {this.props.campanha.nome_campanha}?</p>
                    </div>
                    <div style={{width: "100%", height: "auto"}}>
                        <input type="button" value="Confirmar" id="btn-confirmar"/>
                        <input type="button" value="Cancelar" id="btn-cancelar" onClick={() => {this.props.setShowModalInativarCampanha()}}/>
                    </div>
                </Modal.Body>

            </Modal>
        );
    }
}

export default InativarCampanhaModal;