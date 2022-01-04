import React, { Component } from 'react';

import '../css/RegistroTabelaMeusPlanosMensais.css';
import CancelarPlanoMensalModal from './CancelarPlanoMensalModal';

class RegistroTabelaMeusPlanosMensais extends Component {

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
                <div id="registry-meus-planos-mensais-doador">
                    <p className="column-registry-meus-planos-mensais-doador" style={{width: "13%"}}>{this.props.plano.planoMensal.organizacao.registro}</p>
                    <div className="vertical-line-registry-meus-planos-mensais-doador"></div>
                    <p className="column-registry-meus-planos-mensais-doador" style={{width: "28%"}}>{this.props.plano.planoMensal.organizacao.nome}</p>
                    <div className="vertical-line-registry-meus-planos-mensais-doador"></div>
                    <p className="column-registry-meus-planos-mensais-doador" style={{width: "13%"}}>{this.props.plano.planoMensal.nomePlano}</p>
                    <div className="vertical-line-registry-meus-planos-mensais-doador"></div>
                    <p className="column-registry-meus-planos-mensais-doador" style={{width: "11%"}}>R$ {this.props.plano.planoMensal.valorMensal.toFixed(2).replace('.', ',')}</p>
                    <div className="vertical-line-registry-meus-planos-mensais-doador"></div>
                    <p className="column-registry-meus-planos-mensais-doador" style={{width: "12%"}}>{this.props.plano.dataContratacao.getDate()+1} / {this.props.plano.dataContratacao.getMonth()+1} / {this.props.plano.dataContratacao.getFullYear()}</p>
                    <div className="vertical-line-registry-meus-planos-mensais-doador"></div>
                    <p className="column-registry-meus-planos-mensais-doador" style={{width: "9%", color: (this.props.plano.status) ? "#03A654" : "#F52424"}}>{(this.props.plano.status) ? "Ativo" : "Inativo"}</p>
                    <div className="vertical-line-registry-meus-planos-mensais-doador"></div>
                    <p className="column-registry-meus-planos-mensais-doador" style={{width: "13%"}}><input 
                                                                                                type="button" 
                                                                                                value="Cancelar Assinatura" 
                                                                                                id="btn-cancelar-planos-mensais"
                                                                                                disabled={!this.props.plano.status}
                                                                                                onClick={() => this.setShowModalCancelarPlanoMensal()}
                                                                                            />
                    </p>
                </div>
                <CancelarPlanoMensalModal showModal={this.state.showModalCancelarPlanoMensal} setShowModalCancelarPlanoMensal={this.setShowModalCancelarPlanoMensal} tipoPlano="doador" plano={this.props.plano} />
            </>
        );
    }
}

export default RegistroTabelaMeusPlanosMensais;