import React, { Component } from 'react';
import { Form, Modal } from 'react-bootstrap';

import '../css/DoacaoModal.css';

import crossButton from '../images/cross.png';

import DoacaoCartao from './DoacaoCartao';
import DoacaoPIX from './DoacaoPIX';
import DoacaoPontosDeColeta from './DoacaoPontosDeColeta';

class DoacaoModal extends Component {

    constructor(props) {
        super(props);
        this.state = {formSelecionado : null, displayComboTpPagamento: "block"};
        this.handleChange = this.handleChange.bind(this);
        this.setDisplayComboTpPagamento = this.setDisplayComboTpPagamento.bind(this);
    }

    setDisplayComboTpPagamento(display){
        this.setState({displayComboTpPagamento : display});
    }

    closeModal(){
        this.setDisplayComboTpPagamento("block");
        this.props.setShowModal();
    }

    handleChange(event){
        if(event.target.value === "ctCredito"){
            this.setState({formSelecionado: <DoacaoCartao 
                                                habilitarComentario={this.props.habilitarComentario} 
                                                habilitarSalvamentoCartao={this.props.habilitarSalvamentoCartao}
                                                closeModal={this.props.setShowModal}
                                                addDoacaoListaDoacoes={this.props.addDoacaoListaDoacoes}
                                                addComentarioListaComentario={this.props.addComentarioListaComentario}
                                            />
                        });
        } else {
            this.setState({formSelecionado: <DoacaoPIX 
                                                    setDisplayComboTpPagamento={this.setDisplayComboTpPagamento} 
                                                    habilitarComentario={this.props.habilitarComentario}
                                            />
                            });
        }
    }

    render() {
        return (
            <Modal
                show={this.props.showModal} animation={false}
                aria-labelledby="m-doacao"
                centered
                dialogClassName="modal-doacao"
                aria-labelledby="example-custom-modal-styling-title"
                >
                <div style={{"width" : "100%", "height" : "auto", "paddingRight" : ".5em", "paddingTop" : ".4em"}}>
                    <img src={crossButton} id="crossButton" onClick={() => {this.closeModal()}}/>
                </div>
                <Modal.Body id="modal-doacao-body">
                    <p className="titulo-desc-campanha">Área de doação</p>
                    <hr className="hr-titulo-desc-campanha"></hr>
                    {
                        (this.props.tipoArrecadacao === "dinheiro") ?
                            <>
                                <select 
                                    name="tipo-pagamento" 
                                    id="tpPagamento" 
                                    id="selector-tipo-pagamento" 
                                    style={{display: this.state.displayComboTpPagamento}} 
                                    onChange={this.handleChange}
                                >
                                    <option value="" disabled selected>Forma de pagamento</option>
                                    <option value="ctCredito">Cartão de crédito</option>
                                    <option value="pix">PIX</option>
                                </select>
                                {this.state.formSelecionado}
                            </>
                        :          
                            <DoacaoPontosDeColeta />                   

                    }
                </Modal.Body>
            </Modal>
        );
    }
}

export default DoacaoModal;