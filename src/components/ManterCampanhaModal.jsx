import React, { Component } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

import '../css/ManterCampanhaModal.css';
import { PontosColeta } from '../entities/PontosColeta';

import crossButton from '../images/cross.png';
import GerenciarPontosDeColetaModal from './GerenciarPontosDeColetaModal';
import CardCampanha from './CardCampanha';
import { Campanha } from '../entities/Campanha';
import { Organizacao } from '../entities/Organizacao';
import { Doacao } from '../entities/Doacao';
import { HistoricoDoacao } from '../entities/HistoricoDoacao';

class ManterCampanhaModal extends Component {

    constructor(props){
        super(props);
        this.state = { 
                        type : 'text', 
                        precisaVoluntario : false, 
                        tipoDoacao : "", 
                        tipoDoacaoInputs : null, 
                        image: null, 
                        imageCard: null,
                        pontosColeta : [],
                        showModalPontosColeta : false,
                        item_campanha: new Campanha(
                            new Organizacao(
                                "Exemplo Card",
                                "Este é um exemplo de como ficara o card",
                                null,
                                "",
                                [],[],[]
                            ),
                            "Exemplo Card",
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                            "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                            "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                            0,
                            null,
                            null,
                            new Doacao('dinheiro', 'R$', 0, 0, [
                                new HistoricoDoacao(true, 0.0001, true, "", "00/00/0000")
                            ]), []
                        ),
                        showCardExample: true,
                        displayCardExample: "none"
                    };
        this.setPrecisaVoluntario = this.setPrecisaVoluntario.bind(this);
        this.setTipoDoacao = this.setTipoDoacao.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.onImageCardChange = this.onImageCardChange.bind(this);
        this.setShowModalPontosColeta = this.setShowModalPontosColeta.bind(this);
        this.atualizarPontosColeta = this.atualizarPontosColeta.bind(this);
        this.showCardExample = this.showCardExample.bind(this);
    }

    changeInputType(newType) {
        this.setState({type : newType});
    }

    setPrecisaVoluntario(event) {
        this.setState({precisaVoluntario : event.target.checked});
    }

    setShowModalPontosColeta(){
        this.setState({showModalPontosColeta : !this.state.showModalPontosColeta});
        this.props.setShowModal();
    }

    showCardExample(){
        this.setState({showCardExample: !this.state.showCardExample});
        this.setState({displayCardExample: (this.state.showCardExample) ? "block" : "none"});
        
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
                                            <div style={{width: "100%"}}>
                                                <select name="tipo-arrecadacao" id="tipoArrecadacao" className="selector-tipo-arrecadacao">
                                                    <option value="" disabled selected>Tipo arrecadação</option>
                                                    <option value="sangue" >Doação de sangue</option>
                                                    <option value="brinquedo" >Doação de brinquedo</option>
                                                    <option value="roupas" >Doação de roupas</option>
                                                    <option value="alimentos" >Doação de alimentos</option>
                                                    <option value="mobilia" >Doação de mobilias</option>
                                                    <option value="eletronicos" >Doação de eletroeletronicos</option>
                                                    <option value="outros" >Outros</option>
                                                </select>
                                                <Form.Control type="text" placeholder="Meta de arrecadação (Opcional)" id="input-meta-arrecadacao"/>
                                                <select name="unidade-medida" id="tipoUnidadeMedida" className="selector-unidade-medida">
                                                    <option value="" disabled selected>Unidade de medida</option>
                                                    <option value="kilo" >Kilogramas</option>
                                                    <option value="unidades" >Unidades</option>
                                                    <option value="litros" >Litros</option>
                                                    <option value="bolsas" >Bolsas</option>
                                                    <option value="peças" >Peças</option>
                                                    <option value="quantidades" >Quantidades</option>
                                                </select>
                                                <Button variant="success" id="btn-gerenciar-pontos" onClick={() => this.setShowModalPontosColeta()}>Gerenciar pontos de coleta</Button>
                                            </div>
                                        );
            this.setState({tipoDoacaoInputs: inputDoacaoArrecadacao});
        }
    }

    onImageChange(event){
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
              image: URL.createObjectURL(img)
            });
        }
    }

    onImageCardChange(event){
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
              imageCard: URL.createObjectURL(img)
            });
        }
    }

    atualizarPontosColeta(pontosColetaAtivos){
        this.setState({pontosColeta: pontosColetaAtivos});
    }

    render() {
        return (
            <>
                <Modal
                    show={this.props.showModal} animation={false}
                    aria-labelledby="m-campanha"
                    centered
                    dialogClassName="modal-campanha"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <div id="container-img-background" style={{backgroundImage: "url(" + this.state.image + ")"}}>
                        <div style={{width : "100%", height : "auto", paddingRight : ".5em", paddingTop : ".4em",  position: "absolute", zIndex: "5"}}>
                            <img src={crossButton} id="crossButton" onClick={() => {this.props.setShowModal()}}/>
                        </div>
                        <div style={{width: "100%", height: "100%", position: "absolute", backgroundColor: "rgba(0, 0, 0, .6)", zIndex: "4", display: this.state.displayCardExample}}>
                            <div style={{pointerEvents: "none", marginLeft: "3em", marginTop: "1em"}}>
                                <CardCampanha campanha={this.state.item_campanha} img_background_card={this.state.imageCard}/>
                            </div>
                        </div>
                        <div style={{width : "100%", height : "auto", position : "absolute", bottom: "0",  zIndex: "5"}}>
                            <div id="btn-foto-capa">
                                <label for="arquivo" id="btn-mudar-foto-capa">Adicionar foto de capa</label>
                                <input type="file" name="capa" id="arquivo" onChange={this.onImageChange}/>
                            </div>
                            <div id="btn-foto-card" onMouseEnter={this.showCardExample} onMouseOut={this.showCardExample}>
                                <label for="arquivo-card" id="btn-mudar-foto-card">Adicionar foto do card</label>
                                <input type="file" name="card" id="arquivo-card" onChange={this.onImageCardChange} />
                            </div>
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
                <GerenciarPontosDeColetaModal 
                    showModal={this.state.showModalPontosColeta} 
                    pontosColetaCampanha={this.state.pontosColeta} 
                    setShowModalPontosColeta={() => this.setShowModalPontosColeta()}
                    atualizarPontosColeta={this.atualizarPontosColeta}
                />
            </>
        );
    }
}

export default ManterCampanhaModal;