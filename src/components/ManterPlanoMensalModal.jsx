import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import crossButton from '../images/cross.png';

import '../css/ManterPlanoMensalModal.css';

class ManterPlanoMensalModal extends Component {

    closeModal(){
        this.props.setShowModal();
    }

    render() {
        return (
            <Modal
                show={this.props.showModal} animation={false}
                aria-labelledby="m-plano"
                centered
                dialogClassName="modal-plano"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <div style={{width : "100%", height : "auto", paddingRight : ".5em", paddingTop : ".4em",  position: "absolute", zIndex: "5"}}>
                    <img src={crossButton} id="crossButton" onClick={() => {this.closeModal()}}/>
                </div>
            </Modal>
        );
    }
}

export default ManterPlanoMensalModal;
