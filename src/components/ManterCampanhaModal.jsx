import React, { Component } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

import '../css/ManterCampanhaModal.css';
import { PontosColeta } from '../entities/PontosColeta';

import crossButton from '../images/cross.png';
import sample_card from '../images/sample_card_03.png';

import GerenciarPontosDeColetaModal from './GerenciarPontosDeColetaModal';
import CardCampanha from './CardCampanha';
import { Campanha } from '../entities/Campanha';
import { Organizacao } from '../entities/Organizacao';
import { Doacao } from '../entities/Doacao';
import { HistoricoDoacao } from '../entities/HistoricoDoacao';
import { SolicitacaoVoluntario } from '../entities/SolicitacaoVoluntario';

class ManterCampanhaModal extends Component {

    constructor(props){
        super(props);
        this.state = { 
                        type : 'text', 
                        //precisaVoluntario : false,
                        tipoDoacaoInputs : null, 
                        showModalPontosColeta : false,
                        item_campanha: new Campanha(
                            true, 
                            "campanha", 
                            "2021-12-17", 
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
                        tipoCampanha: "",
                        tituloCampanha: "",
                        dataCampanha: "",
                        descCampanha: "",
                        tipoDoacao: "",
                        tipoArrecadacao: "",
                        metaArrecadacao: "",
                        metaDoacao: "",
                        tipoUnidadeMedida: "",
                        descVoluntario: "",
                        image: null, 
                        imageCard: sample_card,
                        pontosColeta : [],
                        mostrarDescricaoVoluntario: "none",
                        solicitacaoVoluntario: new SolicitacaoVoluntario(false, ""),
                        inicializeFields: true
                    };
        //this.setPrecisaVoluntario = this.setPrecisaVoluntario.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.onImageCardChange = this.onImageCardChange.bind(this);
        this.setShowModalPontosColeta = this.setShowModalPontosColeta.bind(this);
        this.atualizarPontosColeta = this.atualizarPontosColeta.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    changeInputType(newType) {
        this.setState({type : newType});
    }

    /*setPrecisaVoluntario(event) {
        this.state.precisaVoluntario.status = event.target.checked 
        //this.setState({precisaVoluntario : event.target.checked});
    }*/

    setShowModalPontosColeta(){
        this.setState({showModalPontosColeta : !this.state.showModalPontosColeta});
        this.props.setShowModal();
    }

    onInputChange(event){
        switch (event.target.id) {
            case "input-titulo-campanha":
                this.setState({tituloCampanha : event.target.value});
                break;
            case "tipoCampanha":
                this.setState({tipoCampanha : event.target.value});
                break;
            case "date":
                this.setState({dataCampanha : event.target.value});
                break;
            case "textarea-desc-campanha":
                this.setState({descCampanha : event.target.value});
                break;
            case "tipoDoacao":
                this.setState({tipoDoacao : event.target.value});
                break;
            case "tipoArrecadacao":
                this.setState({tipoArrecadacao : event.target.value});
                break;
            case "input-meta-doacao": 
                this.setState({metaDoacao : event.target.value});
                break;
            case "input-meta-arrecadacao":
                this.setState({metaArrecadacao : event.target.value});
                break;
            case "tipoUnidadeMedida":
                this.setState({tipoUnidadeMedida : event.target.value});
                break;
            case "textarea-desc-voluntario":
                this.setState({descVoluntario : event.target.value});
                break;
            case "precisase-voluntario-check":
                this.state.solicitacaoVoluntario.status = event.target.checked;
                this.setState({mostrarDescricaoVoluntario: (this.state.solicitacaoVoluntario.status) ? "block" : "none"});
                break;
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

    inicializeFields(){
        this.setState({tituloCampanha : this.props.campanha.nome_campanha});
        this.setState({tipoCampanha : this.props.campanha.tipoCampanha});
        this.setState({dataCampanha : this.props.campanha.dataLimite});
        this.setState({descCampanha : this.props.campanha.desc_campanha});
        this.setState({tipoDoacao : this.props.campanha.doacao.tipoDoacao});
        this.setState({tipoArrecadacao : this.props.campanha.doacao.tipoArrecadacao});
        this.setState({metaDoacao : this.props.campanha.doacao.valorTotal});
        this.setState({metaArrecadacao : this.props.campanha.doacao.valorTotal});
        this.setState({tipoUnidadeMedida : this.props.campanha.doacao.unidadeMedida});
        this.setState({descVoluntario : this.props.campanha.solicitacaoVoluntario.descricaoVaga});
        this.setState({image : this.props.campanha.img_background});
        this.setState({imageCard : this.props.campanha.img_background_card});
        this.setState({pontosColeta : (this.props.campanha.doacao.pontosColeta != null) ? this.props.campanha.doacao.pontosColeta : []});
        this.setState({solicitacaoVoluntario : this.props.campanha.solicitacaoVoluntario});
        this.setState({mostrarDescricaoVoluntario: (this.props.campanha.solicitacaoVoluntario.status) ? "block" : "none"});
    }

    clearFields(){
        this.setState({tituloCampanha : ""});
        this.setState({tipoCampanha : ""});
        this.setState({dataCampanha : ""});
        this.setState({descCampanha : ""});
        this.setState({tipoDoacao : ""});
        this.setState({tipoArrecadacao : ""});
        this.setState({metaArrecadacao : ""});
        this.setState({tipoUnidadeMedida : ""});
        this.setState({descVoluntario : ""});
        this.setState({image : null});
        this.setState({imageCard : sample_card});
        this.setState({pontosColeta : []});
        this.setState({solicitacaoVoluntario : new SolicitacaoVoluntario(false, "")});
        this.setState({mostrarDescricaoVoluntario: (this.state.solicitacaoVoluntario.status) ? "block" : "none"});
    }

    closeModal(){
        this.setState({inicializeFields: true});
        if(this.props.modoTelaCampanha==="alteracao") this.clearFields();
        this.props.setShowModal();
        window.location.reload();
    }

    render() {
        if(this.state.inicializeFields && this.props.campanha != null){
            this.inicializeFields();
            this.setState({inicializeFields: false});
        }
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
                            <img src={crossButton} id="crossButton" onClick={() => {this.closeModal()}}/>
                        </div>
                        <div style={{width: "100%", height: "100%", position: "absolute", zIndex: "4"}}>
                            <div style={{pointerEvents: "none", marginLeft: "2.3%", marginTop: "2%"}}>
                                <CardCampanha 
                                    campanha={this.state.item_campanha} 
                                    img_background_card={
                                        this.state.imageCard
                                    }
                                />
                            </div>
                        </div>
                        <div style={{width : "100%", height : "auto", position : "absolute", bottom: "0",  zIndex: "5"}}>
                            <div id="btn-foto-capa">
                                <label for="arquivo" 
                                        id="btn-mudar-foto-capa">{
                                            (this.props.modoTelaCampanha==="cadastro") ?
                                                "Adicionar foto de capa" : 
                                                "Alterar foto do capa"
                                        }
                                </label>
                                <input type="file" name="capa" id="arquivo" onChange={this.onImageChange}/>
                            </div>
                            <div id="btn-foto-card">
                                <label for="arquivo-card" 
                                        id="btn-mudar-foto-card">{
                                            (this.props.modoTelaCampanha==="cadastro") ?
                                                "Adicionar foto de card" : 
                                                "Alterar foto de card"
                                        }
                                </label>
                                <input type="file" name="card" id="arquivo-card" onChange={this.onImageCardChange} />
                            </div>
                        </div>
                    </div>
                    <Modal.Body style={{height: "auto", position: "relative", padding: "2em"}}>
                        <Row>
                            <Col>
                                <p className="titulo-desc-campanha">
                                    {
                                        (this.props.modoTelaCampanha==="cadastro") ? 
                                        "Criar campanha/ação" : 
                                        "Alterar campanha/ação"
                                    }
                                </p>
                                <hr className="hr-titulo-desc-campanha"></hr>
                            </Col>
                        </Row>
                        <Form>
                            <Row>
                                <Col>
                                    <select name="tipo-campanha" id="tipoCampanha" value={this.state.tipoCampanha} className="selector-tipo-campanha" onChange={this.onInputChange}>
                                        <option value="" disabled selected>Tipo (campanha/ação)</option>
                                        <option value="campanha" >Campanha</option>
                                        <option value="acao" >Ação</option>
                                    </select>
                                    <Form.Control 
                                        type="text"
                                        placeholder="Título campanha" 
                                        value={this.state.tituloCampanha}
                                        id="input-titulo-campanha"
                                        onChange={this.onInputChange}
                                    />
                                    <input 
                                        id="date" 
                                        type={this.state.type} 
                                        placeholder="Data limite (opcional)" 
                                        className="input-date-campanha" 
                                        style={{width: '16em'}}
                                        value={this.state.dataCampanha}
                                        onFocus={() => this.changeInputType('date')}
                                        onBlur={() => this.changeInputType('text')}
                                        onChange={this.onInputChange}
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
                                    <textarea 
                                        id="textarea-desc-campanha" 
                                        value={this.state.descCampanha} 
                                        name="desc-campanha" 
                                        cols="50" 
                                        onChange={this.onInputChange}
                                        placeholder="Insira aqui uma descrição a respeito de sua campanha/ação...">
                                    </textarea>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="3">
                                    <select name="tipo-doacao" id="tipoDoacao" value={this.state.tipoDoacao} className="selector-tipo-doacao" onChange={this.onInputChange}>
                                        <option value="" disabled selected>Tipo doação</option>
                                        <option value="dinheiro" >Financeira</option>
                                        <option value="item" >Arrecadação</option>
                                    </select>
                                </Col>
                                <Col sm="9">
                                    <div style={{width: "100%", paddingTop: "1.8%", display: (this.state.tipoDoacao === "dinheiro") ? "block" : "none"}}>
                                        <p style={{float: "left", fontSize: "18px", fontFamily: "Roboto Bold", marginTop: ".7%"}}>R$</p>
                                        <Form.Control 
                                            type="number" 
                                            step=".01"
                                            placeholder="Meta de doações (Opcional)" 
                                            value={this.state.metaDoacao} 
                                            id="input-meta-doacao"
                                            onChange={this.onInputChange}
                                        />
                                    </div>
                                    <div style={{width: "100%", display: (this.state.tipoDoacao === "item") ? "block" : "none"}}>
                                        <select name="tipo-arrecadacao" value={this.state.tipoArrecadacao} id="tipoArrecadacao" className="selector-tipo-arrecadacao" onChange={this.onInputChange}>
                                            <option value="" disabled selected>Tipo arrecadação</option>
                                            <option value="sangue" >Doação de sangue</option>
                                            <option value="brinquedo" >Doação de brinquedo</option>
                                            <option value="roupas" >Doação de roupas</option>
                                            <option value="alimentos" >Doação de alimentos</option>
                                            <option value="mobilia" >Doação de mobilias</option>
                                            <option value="eletronicos" >Doação de eletroeletronicos</option>
                                            <option value="outros" >Outros</option>
                                        </select>
                                        <Form.Control type="number" step=".01" placeholder="Meta de arrecadação (Opcional)" value={this.state.metaArrecadacao} id="input-meta-arrecadacao" onChange={this.onInputChange}/>
                                        <select name="unidade-medida" id="tipoUnidadeMedida" value={this.state.tipoUnidadeMedida} className="selector-unidade-medida" onChange={this.onInputChange}>
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
                                </Col>
                            </Row>
                            <Row style={{marginTop: "1em"}}>
                                <Col>
                                    <Form.Check
                                        active
                                        checked={this.state.solicitacaoVoluntario.status}
                                        type={'checkbox'}
                                        label={'Precisa-se de voluntarios'}
                                        id={'precisase-voluntario-check'}
                                        className="checkbox-precisase-voluntario"
                                        style={{marginTop : ".1em"}}
                                        onChange={this.onInputChange}
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
                                        value={this.state.descVoluntario}
                                        placeholder="Insira aqui uma descrição e os requisitos que devem ser atendidos pelos voluntarios para serem aceitos..."
                                        style={{display: this.state.mostrarDescricaoVoluntario}}
                                    >
                                    </textarea>
                                </Col>
                            </Row>
                            <Row style={{marginTop: "1.8em"}}>
                                <Col>
                                    <div style={{width : "28em", height : "3.3em", margin : "0 auto"}}>
                                        <input type="button" value={(this.props.modoTelaCampanha==="cadastro") ? "Criar campanha" : "Alterar campanha"} className="btn-criar-campanha"/>
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