import React, { Component } from 'react';

import '../css/CardOrganizacao.css';

import background_card from '../images/background-card-org.png';

class CardOrganizacao extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id="card-organizacao-body">
                <img src={background_card} id="img-background-org"/>
                <div id="content-org">
                    <div id="desc-org">
                        <div style={{position : 'absolute', zIndex : '3', marginTop : '-3.1em', width : '100%', height : 'auto'}}>
                            <img src={this.props.organizacao.logo} id="logo-org"/>
                        </div>
                        <div style={{width : '100%', height : 'auto', position : 'absolute', marginTop : '2.9em'}}>
                            <p id="nome-org">{this.props.organizacao.nomeOrganizacao}</p>
                            <p id="subtitulo-org">{this.props.organizacao.subtituloOrganizacao}</p>
                        </div>
                    </div>
                    <div id="infos-org">
                        <div id="campanhas">
                            <p style={{
                                width : "100%", 
                                height : "auto", 
                                color : "white", 
                                textAlign : "center", 
                                float : "left",
                                fontSize: "11px",
                                fontFamily: 'Roboto Bold'
                            }}>{this.props.organizacao.getQntdCampanhas()}</p>
                            <p style={{
                                width : "100%", 
                                height : "auto", 
                                color : "white", 
                                textAlign : "center", 
                                float : "left", 
                                marginTop : "-1.5em",
                                fontSize: "11px",
                                fontFamily: 'Roboto Bold'
                            }}>campanhas</p>
                        </div>
                        <div className="vertical-line"></div>
                        <div id="voluntarios">
                            <p style={{
                                width : "100%", 
                                height : "auto", 
                                color : "white", 
                                textAlign : "center", 
                                float : "left",
                                fontSize: "11px",
                                fontFamily: 'Roboto Bold'
                            }}>{this.props.organizacao.getQntdVoluntarios()}</p>
                            <p style={{
                                width : "100%", 
                                height : "auto", 
                                color : "white", 
                                textAlign : "center", 
                                float : "left", 
                                marginTop : "-1.5em",
                                fontSize: "11px",
                                fontFamily: 'Roboto Bold'
                            }}>voluntarios</p>
                        </div>
                        <div className="vertical-line"></div>
                        <div id="acoes">
                            <p style={{
                                width : "100%", 
                                height : "auto", 
                                color : "white", 
                                textAlign : "center", 
                                float : "left",
                                fontSize: "11px",
                                fontFamily: 'Roboto Bold'
                            }}>{this.props.organizacao.getQntdAcoes()}</p>
                            <p style={{
                                width : "100%", 
                                height : "auto", 
                                color : "white", 
                                textAlign : "center", 
                                float : "left", 
                                marginTop : "-1.5em",
                                fontSize: "11px",
                                fontFamily: 'Roboto Bold'
                            }}>ações</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardOrganizacao;