import React, { Component } from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';

import crossButton from '../images/cross.png';

import '../css/GerenciarPontosDeColetaModal.css';
import LocalizacaoService from '../services/LocalizacaoService';
import TabelaPontosDeColeta from './TabelaPontosDeColeta';
import PontosColetaServices from '../services/PontosColetaServices';
import RegistroTabelaPontosDeColeta from './RegistroTabelaPontosDeColeta';

class GerenciarPontosDeColetaModal extends Component {

    constructor(props){
        super(props);
        this.state = {
                        localizacaoService : new LocalizacaoService(), 
                        pontosColetaService: new PontosColetaServices(),
                        pontosColeta: [],
                        getEstadoAtual : false, 
                        getCidadeAtual : false, 
                        estados : [], 
                        cidades : []
                    };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.state.localizacaoService.getEstados().then(estados => {
            this.setState({estados});
        });
    }

    changeCidades(uf){

        this.state.localizacaoService.getCidadesByUF(uf).then(cidades => {
            this.setState({cidades});
        })
           
    }

    handleChange(event){
        switch (event.target.name) {
            case "estado":
                this.changeCidades(event.target.value);
                break;   
        }
        
    }

    render() {
        return (
            <Modal
                show={this.props.showModal} animation={false}
                aria-labelledby="m-pontos-coleta"
                centered
                dialogClassName="modal-pontos-coleta"
            >
                <div style={{width : "100%", height : "auto", paddingRight : ".5em", paddingTop : ".4em"}}>
                    <img src={crossButton} id="crossButton" onClick={() => {this.props.setShowModalPontosColeta()}}/>
                </div>
                <Modal.Body style={{height: "auto", position: "relative", padding: "1em"}}>
                    <Row>
                        <Col>
                            <p className="titulo-desc-campanha">Gerenciar pontos de coleta</p>
                            <hr className="hr-titulo-desc-campanha"></hr>
                        </Col>
                    </Row>
                    <Form>
                        <Row>
                            <Col sm="4">
                                <Form.Control type="text" placeholder="CEP" id="input-cep"/>
                            </Col>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="Rua" id="input-rua"/>
                            </Col>
                        </Row>
                        <Row style={{marginTop: ".6em"}}>
                            <Col sm="2">
                                <Form.Control type="text" placeholder="N°" id="input-numero"/>
                            </Col>
                            <Col sm="3">
                                <Form.Control type="text" placeholder="Complemento" id="input-complemento"/>
                            </Col>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Bairro" id="input-rua"/>
                            </Col>
                        </Row>
                        <Row style={{marginTop: ".6em"}}>
                            <Col sm="6" style={{marginRight: "-2%"}}>
                                <select name="estado" id="estado" id="combobox-pontos-estados" className="selector" disabled={this.state.getEstadoAtual} onChange={this.handleChange}>
                                    <option value="" disabled selected>Estado</option>
                                    {this.state.estados.map(estado => <option value={estado.id}>{estado.nome}</option>)}
                                </select>
                            </Col>
                            <Col sm="6">
                                <select name="cidade" id="cidade" id="combobox-pontos-cidades" className="selector" disabled={this.state.getCidadeAtual} onChange={this.handleChange}>
                                    <option value="" disabled selected>Cidade</option>
                                    {this.state.cidades.map(cidade => <option value={cidade.id}>{cidade.nome}</option>)}
                                </select>
                            </Col>
                        </Row>
                        <Row style={{marginTop: ".6em"}}>
                            <Col>
                                <Form.Control type="text" placeholder="Responsavel (Opcional)" id="input-responsavel"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="titulo-pontos-coleta">Pontos de coleta</p>
                                <input type="button" value="Pesquisa" id="btn-pesquisa" onClick={() => this.showModal()}/>
                                <input type="button" value="Adicionar ponto de coleta" id="btn-add-ponto-coleta" onClick={() => this.showModal()}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr className="hr-titulo-pontos-coleta"></hr>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TabelaPontosDeColeta selectMode/>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: ".6em"}}>
                            <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <input type="button" value="Confirmar Pontos de coleta" id="btn-confirmar-pontos-coleta" align="center"/>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>

            </Modal>
        );
    }
}

export default GerenciarPontosDeColetaModal;