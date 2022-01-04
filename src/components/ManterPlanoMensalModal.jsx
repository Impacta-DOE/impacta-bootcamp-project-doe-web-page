import React, { Component } from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import crossButton from '../images/cross.png';

import '../css/ManterPlanoMensalModal.css';
import TabelaRecompensasPlanoMensal from './TabelaRecompensasPlanoMensal';

class ManterPlanoMensalModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            nomePlano: "",
            valorMensal: "",
            recompensas: [],
            inicializeFields: true
        };
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        switch (event.target.id) {
            case "input-nome-plano":
                this.setState({nomePlano : event.target.value});
                break;
            case "input-valor-mensal":
                this.setState({valorMensal : event.target.value});
                break;
        }
    }

    inicializeFields(){
        this.setState({nomePlano : this.props.plano.nomePlano});
        this.setState({valorMensal : this.props.plano.valorMensal});
        this.setState({recompensas: this.props.plano.recompensas});
    }

    clearFields(){
        this.setState({nomePlano: ""});
        this.setState({valorMensal: ""});
        this.setState({recompensas: []});
    }

    closeModal(){
        this.setState({inicializeFields: true});
        if(this.props.modoTelaPlano==="alteracao") this.clearFields();
        this.props.setShowModal();
        window.location.reload();
    }

    render() {
        if(this.state.inicializeFields && this.props.plano != null){
            this.inicializeFields();
            this.setState({inicializeFields: false});
        }
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
                <Modal.Body style={{height: "auto", position: "relative", padding: "2em"}}>
                    <Row>
                        <Col>
                            <p className="titulo-plano-mensal">
                                {
                                    (this.props.modoTelaPlano==="cadastro") ? 
                                    "Criar plano" : 
                                    "Editar plano"
                                }
                            </p>
                            <hr className="hr-titulo-plano-mensal"></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="6">
                            <Form.Control 
                                type="text"
                                placeholder="Nome do plano" 
                                value={this.state.nomePlano}
                                id="input-nome-plano"
                                onChange={this.onInputChange}
                            />
                        </Col>
                        <Col sm="6">
                            <Form.Control 
                                type="number" 
                                step=".01"
                                placeholder="Valor mensal" 
                                value={this.state.valorMensal} 
                                id="input-valor-mensal"
                                onChange={this.onInputChange}
                            />
                            <p style={{float: "right", fontSize: "18px", fontFamily: "Roboto Bold", marginTop: "2%"}}>R$</p>
                        </Col>
                    </Row>
                    <Row style={{marginTop: "6%"}}>
                        <Col>
                            <p className="titulo-recompensas">
                                Recompensas (opcional)
                            </p>
                            <hr className="hr-titulo-recompensas"></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TabelaRecompensasPlanoMensal recompensas={(this.props.plano != null) ? this.props.plano.recompensas : []} atualizarTabela/>
                        </Col>
                    </Row>
                    <Row style={{marginTop: "3em"}}>
                        <Col>
                            <div style={{width : "28em", height : "3.3em", margin : "0 auto"}}>
                                <input type="button" value={(this.props.modoTelaPlano==="cadastro") ? "Salvar plano" : "Editar plano"} className="btn-criar-campanha"/>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        );
    }
}

export default ManterPlanoMensalModal;
