import React, { Component } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

import "../css/DoacaoCartao.css";
import Comentario from '../entities/Comentario';
import { HistoricoDoacao } from '../entities/HistoricoDoacao';
import ConfirmacaoDoacaoModal from './ConfirmacaoDoacaoModal';

class DoacaoCartao extends Component {

    constructor(props){
        super(props);
        this.state = {
            esconderValorDoado: false,
            valorDoado: null,
            esconderNomeDoador: false,
            nomeDoador: "",
            dataDoacao: "",
            comentario: "", 
            iniciais: "",
            showModal: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.cadastrarDoacao = this.cadastrarDoacao.bind(this);
        this.setShowModal = this.setShowModal.bind(this);
    }

    setShowModal(){
        this.setState({showModal: !this.state.showModal});
    }

    componentDidMount(){
        let iniciais = this.gerarIniciais();
        this.setState({iniciais});
    }

    gerarIniciais(){
        let nomes = localStorage.getItem('nomePessoa').split(" ");
        return (nomes.length > 1) ? nomes[0].charAt(0).toUpperCase() + "" + nomes[1].charAt(0).toUpperCase() : nomes[0].charAt(0).toUpperCase();
    }

    handleChange(event){
        switch (event.target.name) {
            case "nome-completo":
                this.setState({nomeDoador : event.target.value});
                break; 
            case "valor-doacao":
                this.setState({valorDoado : event.target.value});
                break;
            case "comentario":
                this.setState({comentario : event.target.value});
                break; 
            case "checkbox-doacao-anonima":
                this.setState({esconderNomeDoador: event.target.value});
                break;
            case "checkbox-esconder-valor":
                this.setState({esconderValorDoado: event.target.value});
                break;
        }
    }

    cadastrarDoacao(){

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var date = dd + "/" + mm + "/" + yyyy;

        let historicoDoacao = new HistoricoDoacao(
            !this.state.esconderValorDoado,
            Number(this.state.valorDoado),
            !this.state.esconderNomeDoador,
            localStorage.getItem('nomePessoa'),
            date,
            null
        );
        

        let comentario = new Comentario(
            localStorage.getItem('nomePessoa'),
            null,
            this.state.comentario,
            !this.state.esconderNomeDoador
        );

        this.props.addDoacaoListaDoacoes(historicoDoacao);
        this.props.addComentarioListaComentario(comentario);
        this.props.closeModal();
        this.setShowModal();

    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group style={{marginBottom : "1.5em"}}>
                        <Row >
                            <Col sm="6" className="col-form">
                                <Form.Control type="text" name="nome-completo" value={this.state.nomeDoador} placeholder="Nome completo" id="input-nome" onChange={this.handleChange}/>
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
                        <Row >
                            <Col>
                                <Form.Control 
                                    type="number" 
                                    step=".01"
                                    placeholder="Valor Doação" 
                                    value={this.state.valorDoado} 
                                    id="input-valor-doado"
                                    name="valor-doacao"
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                    {
                        (this.props.habilitarSalvamentoCartao) ?
                            <Row>
                                <Col>
                                    <Form.Check
                                        active
                                        type={'checkbox'}
                                        label={'Salvar este cartão para doações futuras'}
                                        id={'salvar-cartao-check'}
                                        className="checkbox-doacao"
                                        onClick={() => this.onCheck("estado")}
                                        onChange={this.handleChange}
                                        name="checkbox-salvar-cartao"
                                        value="salvar-cartao"
                                    />
                                </Col>
                            </Row>
                        : null
                    }
                    {
                        (this.props.habilitarComentario) ?
                            <>
                                <Row>
                                    <Col>
                                        <Form.Check
                                            active
                                            checked={this.state.esconderNomeDoador}
                                            type={'checkbox'}
                                            label={'Doar como anônimo'}
                                            id={'doacao-anonima-check'}
                                            className="checkbox-doacao"
                                            style={{marginTop : ".1em"}}
                                            onChange={this.handleChange}
                                            name="checkbox-doacao-anonima"
                                            value="doacao-anonima"
                                        />
                                        <Form.Check
                                            active
                                            checked={this.state.esconderValorDoado}
                                            type={'checkbox'}
                                            label={'Esconder valor doado'}
                                            id={'esconder-valor-check'}
                                            className="checkbox-doacao"
                                            style={{marginTop : ".1em"}}
                                            onChange={this.handleChange}
                                            name="checkbox-esconder-valor"
                                            value="esconder-valor"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="titulo-comentario-doacao">Comentario</p>
                                        <hr className="hr-titulo-desc-campanha"></hr>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div id="div-img-usuario">
                                            <div id="avatar-usuario">
                                                <div style={{
                                                            width: "100%", 
                                                            height: "100%",
                                                            backgroundColor: "rgba(0, 0, 0, .4)", 
                                                            zIndex: "0",
                                                            borderRadius: "15em",
                                                            paddingTop: ".65em"
                                                        }}>
                                                    <p>{this.state.iniciais}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="div-comentario" style={{width: "94%", float: "right"}}>
                                            <p id="comentario-nome-usuario">{localStorage.getItem('nomePessoa')}</p>
                                            <textarea id="textarea-comentario" name="comentario" value={this.state.comentario} cols="50" placeholder="Escrever um comentario..." onChange={this.handleChange}>
                                            </textarea>
                                        </div>
                                    </Col>
                                </Row>
                            </>
                        : null
                    }
                    <Row>
                        <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <input type="button" value="Realizar doação" id="btn-realizar-doacao" align="center" onClick={() => this.cadastrarDoacao()} />
                        </Col>
                    </Row>
                </Form>
                <ConfirmacaoDoacaoModal closeModal={this.props.closeModal} setShowModal={this.setShowModal} showModal={this.state.showModal} />
            </div>
        );
    }
}

export default DoacaoCartao;
