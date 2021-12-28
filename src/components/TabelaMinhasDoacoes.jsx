import React, { Component } from 'react';

import '../css/TabelaMinhasDoacoes.css';
import DoacaoService from '../services/DoacaoService';
import RegistroTabelaMinhasDoacoes from './RegistroTabelaMinhasDoacoes';

class TabelaMinhasDoacoes extends Component {

    constructor(props){
        super(props);
        this.state = {
            doacoesService: new DoacaoService(),
            minhasDoacoes: []
        };
    }

    componentWillMount(){
        this.getMinhasDoacoes();
    }

    getMinhasDoacoes(){
        let doacoes = this.state.doacoesService.getDoacoesFromUserById(0);
        let minhasDoacoes = [];
        for(let i=0; i<doacoes.length; i++){
            minhasDoacoes.push(<RegistroTabelaMinhasDoacoes doacao={doacoes[i]} />);
        }
        this.setState({minhasDoacoes});
    }

    render() {
        return (
            <div id="tabela-minhas-doacoes">
                <div id="header-minhas-doacoes">
                    <p className="column-minhas-doacoes" style={{width: "16%"}}>CNPJ / CPF</p>
                    <div className="vertical-line-header-minhas-doacoes"></div>
                    <p className="column-minhas-doacoes" style={{width: "27%"}}>Nome da instituição / Receptor</p>
                    <div className="vertical-line-header-minhas-doacoes"></div>
                    <p className="column-minhas-doacoes" style={{width: "27%"}}>Campanha / Ação</p>
                    <div className="vertical-line-header-minhas-doacoes"></div>
                    <p className="column-minhas-doacoes" style={{width: "14%"}}>Valor doação</p>
                    <div className="vertical-line-header-minhas-doacoes"></div>
                    <p className="column-minhas-doacoes" style={{width: "15%"}}>Data da doação</p>
                </div>
                {this.state.minhasDoacoes}
            </div>
        );
    }
}

export default TabelaMinhasDoacoes;