import React, { Component } from 'react';
import PlanoMensalService from '../services/PlanoMensalService';

import '../css/TabelaMeusPlanosMensaisOrganizacao.css';

class TabelaMeusPlanosMensaisOrganizacao extends Component {

    constructor(props){
        super(props);
        this.state = {
            planoService: new PlanoMensalService(),
            meusPlanos: [],
            listaObjetosPlano: []
        };
    }

    componentWillMount(){
        //this.getMeusPlanos(false);
    }

    getMeusPlanos(showPlanosInativos){
        let planos = this.state.planoService.getAll();
        let meusPlanos = [];
        for(let i=0; i<planos.length; i++){
            if(planos[i].status || (planos[i].status === false && showPlanosInativos)){
                //meusPlanos.push(<RegistroTabelaMinhasCampanhas campanha={campanhas[i]} abrirTelaAlteraçãoCampanha={this.props.abrirTelaAlteraçãoCampanha} />);
            }
        }
        this.setState({meusPlanos});
    }

    render() {
        if(this.props.atualizarTabela){
            this.setState({meusPlanos: []});
            this.getMeusPlanos(this.props.showPlanosInativos);
            this.props.setAtualizarTabela(false);
        }
        return (
            <div id="tabela-meus-planos-mensais">
                <div id="header-meus-planos-mensais">
                    <p className="column-meus-planos-mensais" style={{width: "10%"}}>Status</p>
                    <div className="vertical-line-header-meus-planos-mensais"></div>
                    <p className="column-meus-planos-mensais" style={{width: "22%"}}>Nome do plano</p>
                    <div className="vertical-line-header-meus-planos-mensais"></div>
                    <p className="column-meus-planos-mensais" style={{width: "14%"}}>Valor mensal</p>
                    <div className="vertical-line-header-meus-planos-mensais"></div>
                    <p className="column-meus-planos-mensais" style={{width: "14%"}}>Data de criação</p>
                    <div className="vertical-line-header-meus-planos-mensais"></div>
                    <p className="column-meus-planos-mensais" style={{width: "14%"}}>Total de assinantes</p>
                    <div className="vertical-line-header-meus-planos-mensais"></div>
                    <p className="column-meus-planos-mensais" style={{width: "10%"}}>Editar</p>
                    <div className="vertical-line-header-meus-planos-mensais"></div>
                    <p className="column-meus-planos-mensais" style={{width: "15%"}}>Inativar plano</p>
                </div>
                {/*this.state.meusPlanos*/}
            </div>
        );
    }
}

export default TabelaMeusPlanosMensaisOrganizacao;