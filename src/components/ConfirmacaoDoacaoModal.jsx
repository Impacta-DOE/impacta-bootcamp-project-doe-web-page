import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import '../css/ConfirmacaoDoacaoModal.css';

class ConfirmacaoDoacaoModal extends Component {

    render() {
        return (
            <Modal
                show={this.props.showModal} animation={false}
                aria-labelledby="m-confirmacao-doacao"
                centered
                dialogClassName="modal-confirmacao-doacao"
            >
                <Modal.Body style={{width: "100%", height: "auto", textAlign: "center", padding: "0", marginTop: ".8em"}}>
                    <div id="header-animado">
                        
                    </div>
                    <div id="container-mensagem">
                        <input type="button" value="Finalizar Doação" />
                    </div>
                </Modal.Body>

            </Modal>
        );
    }
}

export default ConfirmacaoDoacaoModal;