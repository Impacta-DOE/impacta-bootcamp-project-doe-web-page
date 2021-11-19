import React, { Component } from 'react';

import '../css/Comentario.css';

class Comentario extends Component {
    render() {
        return (
            <div style={{"width" : "99.9%", "height" : "auto"}}>
                <div id="div-img-usuario">
                    <div id="avatar-usuario">
                        <p>DC</p>
                    </div>
                </div>
                <div id="div-comentario">
                    <p id="comentario-nome-usuario">Nome usuario</p>
                    <div id="area-comentario">
                        <p id="comentario-usuario">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod odio sit amet tortor pharetra ultricies. Aliquam in vestibulum nisl. Nulla ultrices enim id massa sagittis sollicitudin.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comentario;