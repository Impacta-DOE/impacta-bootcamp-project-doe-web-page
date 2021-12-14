import React, { Component } from 'react';
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';

import '../css/AssinarPlanoModal.css';
import crossButton from '../images/cross.png';

class AssinarPlanoModal extends Component {

    constructor(props){
        super(props);
        this.state = {showModalConfirm: false};
        this.showModalConfirm = this.showModalConfirm.bind(this);
    }

    showModalConfirm(){
        this.setState({showModalConfirm: !this.state.showModalConfirm});
    }

    onCheck() {
        var checkBox = document.getElementById("salvar-cartao-check");
        if (checkBox.checked == true){
            this.setState({salvaCartao : true});
        } else {
            this.setState({salvaCartao : false});
        }
    }

    render() {
        return (
            <Modal
                show={this.props.showModal} animation={false}
                aria-labelledby="m-assinar-plano"
                centered
                dialogClassName="modal-assinar-planos"
            >
                <div style={{width : "100%", height : "auto", paddingRight : ".5em", paddingTop : ".4em"}}>
                    <img src={crossButton} id="crossButton" onClick={() => {this.props.setShowModal()}}/>
                </div>
                {
                    (!this.state.showModalConfirm) ? 
                        <>
                            <Modal.Body style={{height: "20em", position: "relative", paddingLeft: "1em", paddingTop: ".2em"}}>
                                <Row>
                                    <Col>
                                        <p className="titulo-desc-assinar-plano">[Titulo Plano] - Assinar Plano</p>
                                        <hr className="hr-titulo-desc-assinar-plano"></hr>
                                    </Col>
                                </Row>

                                <Form>
                                    <Form.Group style={{marginBottom : "1.5em"}}>
                                        <Row >
                                            <Col sm="6" className="col-form">
                                                <Form.Control type="text" placeholder="Nome completo" id="input-nome"/>
                                            </Col>
                                            <Col sm="6" className="col-form">
                                                <Form.Control type="text" placeholder=" N° Cartão xxxx.xxxx.xxxx.xxxx" id="input-ncartao"/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <select name="bandeira-cartao" id="bandeiraCartao" id="selector-bandeira-cartao">
                                                    <option value="" disabled selected>Bandeira Cartão</option>
                                                    <option value="mastercard">Mastercard</option>
                                                    <option value="visa">Visa</option>
                                                    <option value="american-express">American Express</option>
                                                    <option value="hipercard">Hipercard</option>
                                                    <option value="elo">Elo</option>
                                                </select>
                                            </Col>
                                        </Row>
                                        <Row >
                                            <Col sm="8" className="col-form">
                                                <Form.Control type="text" placeholder="Data de validade" id="input-dt-validade"/>
                                            </Col>
                                            <Col sm="4" className="col-form">
                                                <Form.Control type="text" placeholder="CVV" id="input-cvv"/>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    active
                                                    type={'checkbox'}
                                                    label={'Salvar este cartão para doações futuras'}
                                                    id={'salvar-cartao-check'}
                                                    className="checkbox-assinar-plano"
                                                    onClick={() => this.onCheck()}
                                                    onChange={this.handleChange}
                                                    name="checkbox-salvar-cartao"
                                                    value="salvar-cartao"
                                                />
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Form>
                                <div className='div-button-efetuar-pagamento-plano'>
                                    <input type="button" value="Efetuar Pagamento" id="btn-efetuar-pagamento-plano" onClick={this.showModalConfirm}/>
                                </div>
                            </Modal.Body>
                        </> :
                        <>
                            <Modal.Body style={{height: "10em", position: "relative", paddingLeft: "1em", paddingTop: ".2em"}}>
                                <Row>
                                    <p className='txt-assinatura-sucesso'>Assinatura efetuada com sucesso!!!</p>
                                </Row>
                                    <p className='txt-click-aqui'>Para visualizar suas assinatura clique aqui</p>
                            </Modal.Body>
                        </>
                }

            </Modal>
        );
    }

}

export default AssinarPlanoModal;