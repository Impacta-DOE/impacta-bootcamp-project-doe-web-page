import React, { Component } from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';

import '../css/ManterCampanhaModal.css';

import crossButton from '../images/cross.png';

class ManterCampanhaModal extends Component {

    constructor(props){
        super(props);
        this.state = { type : 'text', precisaVoluntario : false, tipoDoacao : "", tipoDoacaoInputs : null};
        this.setPrecisaVoluntario = this.setPrecisaVoluntario.bind(this);
        this.setTipoDoacao = this.setTipoDoacao.bind(this);
    }

    changeInputType(newType) {
        this.setState({type : newType});
    }

    setPrecisaVoluntario(event) {
        this.setState({precisaVoluntario : event.target.checked});
    }

    setTipoDoacao(event){
        this.state.tipoDoacao = event.target.value;
        if(this.state.tipoDoacao === "financeira"){
            let inputDoacaoFinanceira = (
                                            <div style={{width: "100%", paddingTop: "1.8%"}}>
                                                <p style={{float: "left", fontSize: "18px", fontFamily: "Roboto Bold", marginTop: ".7%"}}>R$</p>
                                                <Form.Control type="text" placeholder="Meta de doações (Opcional)" id="input-meta-doacao"/>
                                            </div>
                                        );
            this.setState({tipoDoacaoInputs: inputDoacaoFinanceira});
        } else if(this.state.tipoDoacao === "arrecadacao") {
            let inputDoacaoArrecadacao = (
                                            <div style={{width: "100%", backgroundColor: "yellow"}}>

                                            </div>
                                        );
            this.setState({tipoDoacaoInputs: inputDoacaoArrecadacao});
        }
    }

    render() {
        return (
            <Modal
                show={this.props.showModal} animation={false}
                aria-labelledby="m-campanha"
                centered
                dialogClassName="modal-campanha"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <div id="container-img-background">
                    <div style={{width : "100%", height : "auto", paddingRight : ".5em", paddingTop : ".4em"}}>
                        <img src={crossButton} id="crossButton" onClick={() => {this.props.setShowModal()}}/>
                    </div>
                    <div style={{width : "100%", height : "auto", position : "absolute", bottom: "0"}}>
                        <input type="button" value="Adicionar foto de capa" id="btn-mudar-foto-capa"/>
                    </div>
                </div>
                <Modal.Body style={{height: "auto", position: "relative", padding: "2em"}}>
                    <Row>
                        <Col>
                            <p className="titulo-desc-campanha">Criar campanha/ação</p>
                            <hr className="hr-titulo-desc-campanha"></hr>
                        </Col>
                    </Row>
                    <Form>
                        <Row>
                            <Col>
                                <select name="tipo-campanha" id="tipoCampanha" className="selector-tipo-campanha">
                                    <option value="" disabled selected>Tipo (campanha/ação)</option>
                                    <option value="campanha" >Campanha</option>
                                    <option value="acao" >Ação</option>
                                </select>
                            </Col>
                            <Col >
                                <Form.Control type="text" placeholder="Título campanha" id="input-titulo-campanha"/>
                            </Col>
                            <Col >
                                <input 
                                    id="date" 
                                    type={this.state.type} 
                                    placeholder="Data limite (opcional)" 
                                    className="input-date-campanha" 
                                    style={{width: '16em'}}
                                    onFocus={() => this.changeInputType('date')}
                                    onBlur={() => this.changeInputType('text')}
                                ></input>
                            </Col>
                        </Row>
                        <Row style={{marginTop: "2em"}}>
                            <Col>
                                <p className="subtitulo-desc-campanha">Descrição campanha/ação</p>
                                <hr className="hr-titulo-desc-campanha"></hr>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <textarea id="textarea-desc-campanha" name="desc-campanha" cols="50" placeholder="Insira aqui uma descrição a respeito de sua campanha/ação...">
                                </textarea>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="3">
                                <select name="tipo-doacao" id="tipoDoacao" className="selector-tipo-doacao" onChange={this.setTipoDoacao}>
                                    <option value="" disabled selected>Tipo doação</option>
                                    <option value="financeira" >Financeira</option>
                                    <option value="arrecadacao" >Arrecadação</option>
                                </select>
                            </Col>
                            <Col sm="9">
                                {this.state.tipoDoacaoInputs}
                            </Col>
                        </Row>
                        <Row style={{marginTop: "1em"}}>
                            <Col>
                                <Form.Check
                                    active
                                    type={'checkbox'}
                                    label={'Precisa-se de voluntarios'}
                                    id={'precisase-voluntario-check'}
                                    className="checkbox-precisase-voluntario"
                                    style={{marginTop : ".1em"}}
                                    onChange={this.setPrecisaVoluntario}
                                    name="checkbox-precisase-voluntario"
                                    value="precisase-voluntario"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <textarea 
                                    id="textarea-desc-voluntario" 
                                    name="desc-voluntario" 
                                    cols="50" 
                                    placeholder="Insira aqui uma descrição e os requisitos que devem ser atendidos pelos voluntarios para serem aceitos..."
                                    style={{display: (this.state.precisaVoluntario) ? "block" : "none"}}
                                >
                                </textarea>
                            </Col>
                        </Row>
                        <Row style={{marginTop: "1.8em"}}>
                            <Col>
                                <div style={{width : "28em", height : "3.3em", margin : "0 auto"}}>
                                    <input type="button" value="Criar Campanha" className="btn-criar-campanha"/>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}

export default ManterCampanhaModal;