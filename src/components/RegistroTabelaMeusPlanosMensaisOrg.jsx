import React, { Component } from 'react';

import editar from '../images/editar.png';

import '../css/RegistroTabelaMeusPlanosMensaisOrg.css';
import CancelarPlanoMensalModal from './CancelarPlanoMensalModal';

class RegistroTabelaMeusPlanosMensaisOrg extends Component {

    constructor(props){
        super(props);
        this.state = {showModalCancelarPlanoMensal: false};
        this.setShowModalCancelarPlanoMensal = this.setShowModalCancelarPlanoMensal.bind(this);
    }

    setShowModalCancelarPlanoMensal(){
        this.setState({showModalCancelarPlanoMensal : !this.state.showModalCancelarPlanoMensal});
    }

    render() {
        return (
            <>
                <div id="registry-meus-planos-mensais-organizacao">
                    <p className="column-registry-meus-planos-mensais-organizacao" style={{width: "10%"}}>{this.props.plano.organizacao.registro}</p>
                    <div className="vertical-line-registry-meus-planos-mensais-organizacao"></div>
                    <p className="column-registry-meus-planos-mensais-organizacao" style={{width: "22%"}}>{this.props.plano.nomePlano}</p>
                    <div className="vertical-line-registry-meus-planos-mensais-organizacao"></div>
                    <p className="column-registry-meus-planos-mensais-organizacao" style={{width: "14%"}}>Valor mensal</p>
                    <div className="vertical-line-registry-meus-planos-mensais-organizacao"></div>
                    <p className="column-registry-meus-planos-mensais-organizacao" style={{width: "14%"}}>Data de criação</p>
                    <div className="vertical-line-registry-meus-planos-mensais-organizacao"></div>
                    <p className="column-registry-meus-planos-mensais-organizacao" style={{width: "14%"}}>Total de assinantes</p>
                    <div className="vertical-line-registry-meus-planos-mensais-organizacao"></div>
                    <p className="column-registry-meus-planos-mensais-organizacao" style={{width: "10%"}}><img src={editar} id="icon-editar" onClick={() => this.props.abrirTelaAlteraçãoPlanoMensal(this.props.plano)}/></p>
                    <div className="vertical-line-registry-meus-planos-mensais-organizacao"></div>
                    <p className="column-registry-meus-planos-mensais-organizacao" style={{width: "15%"}}><input 
                                                                                                type="button" 
                                                                                                value="Inativar" 
                                                                                                id="btn-cancelar-planos-mensais-organizacao"
                                                                                                disabled={!this.props.plano.status}
                                                                                                onClick={() => this.setShowModalCancelarPlanoMensal()}
                                                                                            />
                    </p>
                </div>
                <CancelarPlanoMensalModal showModal={this.state.showModalCancelarPlanoMensal} setShowModalCancelarPlanoMensal={this.setShowModalCancelarPlanoMensal} tipoPlano="organizacao" plano={this.props.plano} />
            </>
        );
    }
}

export default RegistroTabelaMeusPlanosMensaisOrg;