import React, { Component } from 'react';

import '../css/RegistroMinhasDoacoes.css';

class RegistroTabelaMinhasDoacoes extends Component {

    componentWillMount(){
        console.log(this.props.doacao.campanha);
    }

    render() {
        return (
            <>
                <div id="registry-minhas-doacoes">
                    <p className="column-registry-minhas-doacoes" style={{width: "16%"}}>{this.props.doacao.campanha.organizacao.registro}</p>
                    <div className="vertical-line-registry-minhas-doacoes"></div>
                    <p className="column-registry-minhas-doacoes" style={{width: "27%"}}>{this.props.doacao.campanha.organizacao.nome}</p>
                    <div className="vertical-line-registry-minhas-doacoes"></div>
                    <p className="column-registry-minhas-doacoes" style={{width: "27%"}}>{this.props.doacao.campanha.nome_campanha}</p>
                    <div className="vertical-line-registry-minhas-doacoes"></div>
                    <p className="column-registry-minhas-doacoes" style={{width: "14%"}}>{this.props.doacao.valorDoado}</p>
                    <div className="vertical-line-registry-minhas-doacoes"></div>
                    <p className="column-registry-minhas-doacoes" style={{width: "15%"}}>{this.props.doacao.dataDoacao}</p>
                </div>
            </>
        );
    }
}

export default RegistroTabelaMinhasDoacoes;