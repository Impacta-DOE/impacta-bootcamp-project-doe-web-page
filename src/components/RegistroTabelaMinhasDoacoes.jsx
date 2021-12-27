import React, { Component } from 'react';

import '../css/RegistroMinhasDoacoes.css';

class RegistroTabelaMinhasDoacoes extends Component {
    render() {
        return (
            <>
                <div id="registry-minhas-doacoes">
                    <p className="column-registry-minhas-doacoes" style={{width: "16%"}}>CNPJ / CPF</p>
                    <div className="vertical-line-registry-minhas-doacoes"></div>
                    <p className="column-registry-minhas-doacoes" style={{width: "27%"}}>Nome da instituição / Receptor</p>
                    <div className="vertical-line-registry-minhas-doacoes"></div>
                    <p className="column-registry-minhas-doacoes" style={{width: "27%"}}>Campanha / Ação</p>
                    <div className="vertical-line-registry-minhas-doacoes"></div>
                    <p className="column-registry-minhas-doacoes" style={{width: "14%"}}>Valor doação</p>
                    <div className="vertical-line-registry-minhas-doacoes"></div>
                    <p className="column-registry-minhas-doacoes" style={{width: "15%"}}>Data da doação</p>
                </div>
            </>
        );
    }
}

export default RegistroTabelaMinhasDoacoes;