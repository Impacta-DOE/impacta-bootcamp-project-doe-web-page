import React, { Component } from 'react';

import '../css/TabelaMinhasCampanhas.css';
import CampanhaService from '../services/CampanhaService';
import RegistroTabelaMinhasCampanhas from './RegistroTabelaMinhasCampanhas';

class TabelaMinhasCampanhas extends Component {

    constructor(props){
        super(props);
        this.state = {
            campanhaService: new CampanhaService(),
            minhasCampanhas: [],
            listaObjetosCampanha: []
        };
    }

    componentWillMount(){
        this.getMinhasCampanhas(false);
    }

    getMinhasCampanhas(showCampanhasInativas){
        let campanhas = this.state.campanhaService.getAll();
        let minhasCampanhas = [];
        for(let i=0; i<campanhas.length; i++){
            if(campanhas[i].status || (campanhas[i].status === false && showCampanhasInativas)){
                minhasCampanhas.push(<RegistroTabelaMinhasCampanhas campanha={campanhas[i]} abrirTelaAlteraçãoCampanha={this.props.abrirTelaAlteraçãoCampanha} />);
            }
        }
        this.setState({minhasCampanhas});
    }

    render() {
        if(this.props.atualizarTabela){
            this.setState({minhasCampanhas: []});
            this.getMinhasCampanhas(this.props.showCampanhasInativas);
            this.props.setAtualizarTabela(false);
        }
        return (
            <div id="tabela-minhas-campanha">
                <div id="header-minhas-campanhas">
                    <p className="column-minhas-campanhas" style={{width: "10%"}}>Status</p>
                    <div className="vertical-line-header-minhas-campanhas"></div>
                    <p className="column-minhas-campanhas" style={{width: "31%"}}>Nome da campanha/ação</p>
                    <div className="vertical-line-header-minhas-campanhas"></div>
                    <p className="column-minhas-campanhas" style={{width: "14%"}}>Data limite</p>
                    <div className="vertical-line-header-minhas-campanhas"></div>
                    <p className="column-minhas-campanhas" style={{width: "14%"}}>Tipo doação</p>
                    <div className="vertical-line-header-minhas-campanhas"></div>
                    <p className="column-minhas-campanhas" style={{width: "10%"}}>Editar</p>
                    <div className="vertical-line-header-minhas-campanhas"></div>
                    <p className="column-minhas-campanhas" style={{width: "20%"}}>Inativar campanha/ação</p>
                </div>
                {this.state.minhasCampanhas}
            </div>
        );
    }
}

export default TabelaMinhasCampanhas;