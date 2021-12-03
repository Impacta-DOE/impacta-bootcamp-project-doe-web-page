import React, { Component } from 'react';

import '../css/Comentario.css';

class Comentario extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div style={{"width" : "99.7%", "height" : "auto"}}>
                <div id="div-img-usuario">
                    <div id="avatar-usuario" style={{backgroundImage : "url(" + this.props.comentario.img_avatar + ")"}}>
                        <div style={{
                                    width: "100%", 
                                    height: "100%",
                                    backgroundColor: "rgba(0, 0, 0, .4)", 
                                    zIndex: "0",
                                    borderRadius: "15em",
                                    paddingTop: ".65em"
                                }}>
                            <p>{(this.props.comentario.exibirNomeDoador) ? this.props.comentario.iniciaisNome : "A"}</p>
                        </div>
                    </div>
                </div>
                <div id="div-comentario">
                    <p id="comentario-nome-usuario">{(this.props.comentario.exibirNomeDoador) ? this.props.comentario.nomePessoa : "Anônimo"}</p>
                    <div id="area-comentario">
                        <p id="comentario-usuario">{this.props.comentario.comentario}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comentario;