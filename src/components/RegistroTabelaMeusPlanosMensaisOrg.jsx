import React, { Component } from 'react';

import editar from '../images/editar.png';

import '../css/RegistroTabelaMeusPlanosMensaisOrg.css';
import CancelarPlanoMensalModal from './CancelarPlanoMensalModal';
import PlanoMensalService from '../services/PlanoMensalService';

class RegistroTabelaMeusPlanosMensaisOrg extends Component {

    constructor(props){
        super(props);
        this.state = {
            showModalCancelarPlanoMensal: false,
            planoMensalService: new PlanoMensalService(),
            qntdAssinaturas: 0
        };
        this.setShowModalCancelarPlanoMensal = this.setShowModalCancelarPlanoMensal.bind(this);
    }

    componentDidMount(){
        this.setState({qntdAssinaturas: this.state.planoMensalService.getQntdAssinaturasPlanoMensalById(this.props.plano.id)});
    }

    setShowModalCancelarPlanoMensal(){
        this.setState({showModalCancelarPlanoMensal : !this.state.showModalCancelarPlanoMensal});
    }

    render() {
        return (
            <>
                <div id="registry-meus-planos-mensais-organizacao">
                    <p className="column-registry-meus-planos-mensais-organizacao" style={{width: "10%", color: (this.props.plano.status) ? "#03A654" : "#F52424"}}>{(this.props.plano.status) ? "Ativo" : "Inativo"}</p>
                    <div className="vertical-line-registry-meus-planos-mensais-organizacao"></div>
                    <p className="column-registry-meus-planos-mensais-organizacao" style={{width: "22%"}}>{this.props.plano.nomePlano}</p>
                    <div className="vertical-line-registry-meus-planos-mensais-organizacao"></div>
                    <p className="column-registry-meus-planos-mensais-organizacao" style={{width: "14%"}}>{this.props.plano.valorMensal}</p>
                    <div className="vertical-line-registry-meus-planos-mensais-organizacao"></div>
                    <p className="column-registry-meus-planos-mensais-organizacao" style={{width: "14%"}}>{this.props.plano.dataCriacao.getDate()+1} / {this.props.plano.dataCriacao.getMonth()+1} / {this.props.plano.dataCriacao.getFullYear()}</p>
                    <div className="vertical-line-registry-meus-planos-mensais-organizacao"></div>
                    <p className="column-registry-meus-planos-mensais-organizacao" style={{width: "14%"}}>{this.state.qntdAssinaturas}</p>
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