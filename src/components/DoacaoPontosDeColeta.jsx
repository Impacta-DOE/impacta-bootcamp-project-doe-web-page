import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import '../css/DoacaoPontosDeColeta.css';
import Comentario from '../entities/Comentario';
import TabelaPontosDeColeta from './TabelaPontosDeColeta';

class DoacaoPontosDeColeta extends Component {

    constructor(props){
        super(props);
        this.state = {
            iniciais: "",
            comentario: ""
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        let iniciais = this.gerarIniciais();
        this.setState({iniciais});
    }

    gerarIniciais(){
        let nomes = localStorage.getItem('nomePessoa').split(" ");
        return (nomes.length > 1) ? nomes[0].charAt(0).toUpperCase() + "" + nomes[1].charAt(0).toUpperCase() : nomes[0].charAt(0).toUpperCase();
    }

    handleKeyDown(event){
        if (event.key === 'Enter') {

            let comentario = new Comentario(
                localStorage.getItem('nomePessoa'),
                null,
                this.state.comentario,
                true
            );

            this.props.addComentarioListaComentario(comentario);
            this.props.closeModal();
        }
    }

    handleChange(event) {
        this.setState({comentario: event.target.value});
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <p id="titulo-pontos-coleta">Pontos de coleta:</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TabelaPontosDeColeta />
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
                            <textarea id="textarea-comentario" value={this.state.comentario} name="comentario" cols="50" placeholder="Escrever um comentario..." onChange={this.handleChange} onKeyDown={this.handleKeyDown}>
                            </textarea>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DoacaoPontosDeColeta;