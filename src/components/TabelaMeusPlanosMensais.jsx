import React, { Component } from 'react';

import '../css/TabelaMeusPlanosMensais.css';
import PlanoMensalService from '../services/PlanoMensalService';
import RegistroTabelaMeusPlanosMensais from './RegistroTabelaMeusPlanosMensais';

class TabelaMeusPlanosMensais extends Component {

    constructor(props){
        super(props);
        this.state = {
            planosMensaisService: new PlanoMensalService(),
            meusPlanosMensais: []
        };
        this.getMeusPlanosMensais = this.getMeusPlanosMensais.bind(this);
    }

    componentWillMount(){
        this.getMeusPlanosMensais();
    }

    getMeusPlanosMensais(){
        let planosMensais = this.state.planosMensaisService.getPlanosMensaisDoadorByUserID(0);
        let meusPlanosMensais = [];
        //meusPlanosMensais.push(<RegistroTabelaMeusPlanosMensais plano={planosMensais[0]}/>);
        console.log(planosMensais[0]);
        for(let i=0; i<planosMensais.length; i++){
            meusPlanosMensais.push(<RegistroTabelaMeusPlanosMensais plano={planosMensais[i]}/>);
        }
        this.setState({meusPlanosMensais});
    }

    render() {
        return (
            <div id="tabela-meus-planos-mensais">
                <div id="header-meus-planos-mensais">
                    <p className="column-meus-planos-mensais" style={{width: "13%"}}>CNPJ / CPF</p>
                    <div className="vertical-line-header-meus-planos-mensais"></div>
                    <p className="column-meus-planos-mensais" style={{width: "28%"}}>Nome da instituição / Receptor</p>
                    <div className="vertical-line-header-meus-planos-mensais"></div>
                    <p className="column-meus-planos-mensais" style={{width: "13%"}}>Plano contratado</p>
                    <div className="vertical-line-header-meus-planos-mensais"></div>
                    <p className="column-meus-planos-mensais" style={{width: "11%"}}>Valor Mensal</p>
                    <div className="vertical-line-header-meus-planos-mensais"></div>
                    <p className="column-meus-planos-mensais" style={{width: "12%"}}>Data contratação</p>
                    <div className="vertical-line-header-meus-planos-mensais"></div>
                    <p className="column-meus-planos-mensais" style={{width: "9%"}}>Status</p>
                    <div className="vertical-line-header-meus-planos-mensais"></div>
                    <p className="column-meus-planos-mensais" style={{width: "13%"}}>Cancelar plano</p>
                </div>
                {this.state.meusPlanosMensais}
            </div>
        );
    }
}

export default TabelaMeusPlanosMensais;