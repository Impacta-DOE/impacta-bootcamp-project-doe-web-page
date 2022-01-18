import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import '../css/ConfirmacaoDoacaoModal.css';

class ConfirmacaoDoacaoModal extends Component {

    render() {
        return (
            <Modal
                show={this.props.showModalConfirmacaoDoacao} animation={false}
                aria-labelledby="m-confirmacao-doacao"
                centered
                dialogClassName="modal-confirmacao-doacao"
            >
                <Modal.Body style={{width: "100%", height: "auto", textAlign: "center", padding: "0", marginTop: ".8em"}}>
                    <div id="header-animado">
                        <div id="img_gatinho">

                        </div>
                    </div>
                    <div id="container-mensagem">
                        <p id="p_agradecimento_01">Muito obrigado pela sua ajuda tão importante!!!</p>
                        <p id="p_agradecimento_02">Não teriamos conseguido sem a sua forcinha.</p>
                        <input type="button" id="btn_confirmar_doacao" value="Finalizar Doação" onClick={() => this.props.setShowModalConfirmacaoDoacao()}/>
                    </div>
                </Modal.Body>

            </Modal>
        );
    }
}

export default ConfirmacaoDoacaoModal;