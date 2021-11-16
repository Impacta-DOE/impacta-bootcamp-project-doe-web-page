import React, { Component } from 'react';
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
            </div>
        );
    }
}

export default TelaCampanha;