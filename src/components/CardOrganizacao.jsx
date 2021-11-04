import React, { Component } from 'react';

import '../css/CardOrganizacao.css';

class CardOrganizacao extends Component {
    render() {
        return (
            <div id="card-organizacao-body">
                <img id="img-background-org"/>
                <div id="content-org">
                    <div id="desc-org">
                        <div style={{position : 'absolute', zIndex : '3', marginTop : '-2.4em', width : '100%', height : 'auto'}}>
                            <img id="logo-org"/>
                        </div>
                        <div style={{width : '100%', height : 'auto', position : 'absolute', marginTop : '3.5em'}}>
                            <p id="nome-org">ACNUR</p>
                            <p id="subtitulo-org">Agência da ONU para Refugiados</p>
                        </div>
                    </div>
                    <div id="infos-org">
                        <div id="campanhas">

                        </div>
                        <div id="voluntarios">
                            
                        </div>
                        <div id="acoes">
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardOrganizacao;