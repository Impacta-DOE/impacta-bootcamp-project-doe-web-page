import React, { Component } from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';

import crossButton from '../images/cross.png';

import '../css/GerenciarPontosDeColetaModal.css';
import LocalizacaoService from '../services/LocalizacaoService';
import TabelaPontosDeColeta from './TabelaPontosDeColeta';
import PontosColetaServices from '../services/PontosColetaServices';
import RegistroTabelaPontosDeColeta from './RegistroTabelaPontosDeColeta';
import { PontosColeta } from '../entities/PontosColeta';

class GerenciarPontosDeColetaModal extends Component {

    constructor(props){
        super(props);
        this.state = {
                        localizacaoService : new LocalizacaoService(), 
                        pontosColetaService: new PontosColetaServices(),
                        pontosColeta: [],
                        pontosColetaAtivos: [],
                        getEstadoAtual : false, 
                        getCidadeAtual : false, 
                        estados : [], 
                        cidades : [],
                        cep: "",
                        rua: "",
                        numero: "",
                        complemento: "",
                        bairro: "",
                        idEstado: 0,
                        idCidade: 0,
                        responsavel: ""
                    };
        this.handleChange = this.handleChange.bind(this);
        this.setPontosColetaAtivos = this.setPontosColetaAtivos.bind(this);
        this.criarPontoDeColeta = this.criarPontoDeColeta.bind(this);
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
                this.setState({idCidade: 0});
                this.setState({idEstado: event.target.value});
                break;   
            case "cidade":
                this.setState({idCidade: event.target.value});
                break;
            case "cep":
                this.setState({cep: event.target.value});
                break;
            case "rua":
                this.setState({rua: event.target.value});
                break;
            case "numero":
                this.setState({numero: event.target.value});
                break;
            case "complemento":
                this.setState({complemento: event.target.value});
                break;
            case "bairro":
                this.setState({bairro: event.target.value});
                break;
            case "responsavel":
                this.setState({responsavel: event.target.value});
                break;
        }
        
    }

    setPontosColetaAtivos(pontosColetaAtivos){
        this.setState({pontosColetaAtivos});
    }

    confirmarPontosColeta(){
        this.props.atualizarPontosColeta(this.state.pontosColetaAtivos);
        this.props.setShowModalPontosColeta();
    }

    criarPontoDeColeta(){
        let pontoColeta = new PontosColeta(
            0,
            this.state.cep, 
            this.state.rua, 
            this.state.numero, 
            this.state.complemento, 
            this.state.bairro, 
            this.state.idEstado, 
            this.state.idCidade, 
            this.state.responsavel,
            false
        );
        this.state.pontosColetaService.create(pontoColeta);
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
                                <Form.Control type="text" name="cep" value={this.state.cep} placeholder="CEP" id="input-cep" onChange={this.handleChange}/>
                            </Col>
                            <Col sm="8">
                                <Form.Control type="text" name="rua" value={this.state.rua} placeholder="Rua" id="input-rua" onChange={this.handleChange}/>
                            </Col>
                        </Row>
                        <Row style={{marginTop: ".6em"}}>
                            <Col sm="2">
                                <Form.Control type="text" name="numero" value={this.state.numero} placeholder="N°" id="input-numero" onChange={this.handleChange}/>
                            </Col>
                            <Col sm="3">
                                <Form.Control type="text" name="complemento" value={this.state.complemento} placeholder="Complemento" id="input-complemento" onChange={this.handleChange}/>
                            </Col>
                            <Col sm="7">
                                <Form.Control type="text" name="bairro" value={this.state.bairro} placeholder="Bairro" id="input-rua" onChange={this.handleChange}/>
                            </Col>
                        </Row>
                        <Row style={{marginTop: ".6em"}}>
                            <Col sm="6" style={{marginRight: "-2%"}}>
                                <select name="estado" id="estado" value={this.state.idEstado} id="combobox-pontos-estados" className="selector" disabled={this.state.getEstadoAtual} onChange={this.handleChange}>
                                    <option value="" disabled selected>Estado</option>
                                    {this.state.estados.map(estado => <option value={estado.id}>{estado.nome}</option>)}
                                </select>
                            </Col>
                            <Col sm="6">
                                <select name="cidade" id="cidade" value={this.state.idCidade} id="combobox-pontos-cidades" className="selector" disabled={this.state.getCidadeAtual} onChange={this.handleChange}>
                                    <option value="" disabled selected>Cidade</option>
                                    {this.state.cidades.map(cidade => <option value={cidade.id}>{cidade.nome}</option>)}
                                </select>
                            </Col>
                        </Row>
                        <Row style={{marginTop: ".6em"}}>
                            <Col>
                                <Form.Control type="text" name="responsavel" value={this.state.responsavel} placeholder="Responsavel (Opcional)" id="input-responsavel" onChange={this.handleChange}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="titulo-pontos-coleta">Pontos de coleta</p>
                                <input type="button" value="Pesquisa" id="btn-pesquisa"/>
                                <input type="button" value="Adicionar ponto de coleta" id="btn-add-ponto-coleta" onClick={() => this.criarPontoDeColeta()}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr className="hr-titulo-pontos-coleta"></hr>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TabelaPontosDeColeta selectMode pontosColetaCampanha={this.props.pontosColetaCampanha} setPontosColetaAtivos={this.setPontosColetaAtivos}/>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: ".6em"}}>
                            <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <input type="button" value="Confirmar Pontos de coleta" id="btn-confirmar-pontos-coleta" align="center" onClick={() => this.confirmarPontosColeta()}/>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>

            </Modal>
        );
    }
}

export default GerenciarPontosDeColetaModal;