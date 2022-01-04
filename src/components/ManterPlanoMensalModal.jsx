import React, { Component } from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import crossButton from '../images/cross.png';

import '../css/ManterPlanoMensalModal.css';
import TabelaRecompensasPlanoMensal from './TabelaRecompensasPlanoMensal';
import { Recompensa } from '../entities/Recompensa';

class ManterPlanoMensalModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            nomePlano: "",
            valorMensal: "",
            recompensas: [
                new Recompensa(0, "Recompensa A"),
                new Recompensa(0, "Recompensa B"),
                new Recompensa(0, "Recompensa C"),
                new Recompensa(0, "Recompensa D")
            ]
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
                                    "Alterar plano"
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
                                value={this.state.metaDoacao} 
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
                            <TabelaRecompensasPlanoMensal recompensas={this.state.recompensas}/>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        );
    }
}

export default ManterPlanoMensalModal;
