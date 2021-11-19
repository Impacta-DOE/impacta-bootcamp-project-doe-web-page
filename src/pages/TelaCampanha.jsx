import React, { Component } from 'react';
import Comentario from '../components/Comentario';
import Footer from '../components/Footer';
import MenuTop from '../components/MenuTop';

import '../css/TelaCampanha.css';

class TelaCampanha extends Component {

    constructor(props){
        super(props);        
    }

    render() {
        return (
            <div id="content-campanha">
                <MenuTop isLoggedIn={true}/>
                <div id="div-titulo" style={{backgroundImage : "url(" + this.props.location.state.campanha.img_background + ")"}}>
                    <div style={{
                                    width: "100%", 
                                    height: "100%", 
                                    position: "relative", 
                                    backgroundColor: "rgba(0, 0, 0, .6)", 
                                    zIndex: "0",
                                    paddingTop: "9em"
                                }}>
                        <p id="titulo-campanha">{this.props.location.state.campanha.nome_campanha}</p>
                    </div>
                </div>
                <div id="div-info-org">
                    <img src={this.props.location.state.campanha.organizacao.logo} id="logo-organizacao"/>
                    <p id="nome-organizacao">{this.props.location.state.campanha.organizacao.nomeOrganizacao}</p>
                    <input type="button" value="Voluntariar-se" id="btn-voluntariar"/>
                </div>
                <div id="infos-campanha">
                    <div id="div-desc">
                        <p className="titulo-desc-campanha">Descrição da Campanha</p>
                        <hr className="hr-titulo-desc-campanha"></hr>
                        <p id="texto-desc">{this.props.location.state.campanha.desc_campanha}</p>
                        <p className="titulo-desc-campanha">Comentários</p>
                        <hr className="hr-titulo-desc-campanha"></hr>
                        <div id="div-comentarios">
                            <Comentario />
                            <Comentario />
                            <Comentario />
                            <Comentario />
                            <Comentario />
                            <Comentario />
                            <Comentario />
                            <Comentario />
                            <Comentario />
                        </div>
                    </div>
                    <div id="div-doacao">
                        <div id="slider-arrecadados-tela-campanha">
                            <p id="text-slider-tela-campanha">R$ 5.765,00 / R$ 8.000,00</p>
                            <div id="slider-tela-campanha">
                                <div id="load-slider-tela-campanha" style={{"width" : "90%"}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default TelaCampanha;