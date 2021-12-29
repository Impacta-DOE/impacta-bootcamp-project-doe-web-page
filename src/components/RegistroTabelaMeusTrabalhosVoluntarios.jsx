import React, { Component } from 'react';

import '../css/RegistroTabelaMeusTrabalhosVoluntarios.css';
import CancelarParticipacaoModal from './CancelarParticipacaoModal';

class RegistroTabelaMeusTrabalhosVoluntarios extends Component {

    constructor(props){
        super(props);
        this.state = {showModalCancelarParticipacao: false};
        this.setShowModalCancelarParticipacao = this.setShowModalCancelarParticipacao.bind(this);
    }

    setShowModalCancelarParticipacao(){
        this.setState({showModalCancelarParticipacao : !this.state.showModalCancelarParticipacao});
    }

    render() {
        return (
            <div>
                <div id="registry-meus-trabalhos-voluntarios">
                    <p className="column-registry-meus-trabalhos-voluntarios" style={{width: "14%"}}>{this.props.trabalho.campanha.organizacao.registro}</p>
                    <div className="vertical-line-registry-meus-trabalhos-voluntarios"></div>
                    <p className="column-registry-meus-trabalhos-voluntarios" style={{width: "30%"}}>{this.props.trabalho.campanha.organizacao.nome}</p>
                    <div className="vertical-line-registry-meus-trabalhos-voluntarios"></div>
                    <p className="column-registry-meus-trabalhos-voluntarios" style={{width: "14%", color: (this.props.trabalho.status) ? "#03A654" : "#F52424"}}>{(this.props.trabalho.status) ? "Ativo" : "Inativo"}</p>
                    <div className="vertical-line-registry-meus-trabalhos-voluntarios"></div>
                    <p className="column-registry-meus-trabalhos-voluntarios" style={{width: "12%"}}>{this.props.trabalho.dataInicio.getDate()+1} / {this.props.trabalho.dataInicio.getMonth()+1} / {this.props.trabalho.dataInicio.getFullYear()}</p>
                    <div className="vertical-line-registry-meus-trabalhos-voluntarios"></div>
                    <p className="column-registry-meus-trabalhos-voluntarios" style={{width: "12%"}}>{
                                                                                                        (this.props.trabalho.dataFinal != null) ? 
                                                                                                            (this.props.trabalho.dataFinal.getDate()+1) + " / " + (this.props.trabalho.dataFinal.getMonth()+1) + " / " + this.props.trabalho.dataFinal.getFullYear() :
                                                                                                            "00 / 00 / 0000"
                                                                                                    }
                    </p>
                    <div className="vertical-line-registry-meus-trabalhos-voluntarios"></div>
                    <p className="column-registry-meus-trabalhos-voluntarios" style={{width: "17%"}}><input 
                                                                                                type="button" 
                                                                                                value="Cancelar Participação" 
                                                                                                id="btn-cancelar-participacao"
                                                                                                disabled={!this.props.trabalho.status}
                                                                                                onClick={() => this.setShowModalCancelarParticipacao()}
                                                                                            />
                    </p>
                </div>
                <CancelarParticipacaoModal showModal={this.state.showModalCancelarParticipacao} setShowModalCancelarParticipacao={this.setShowModalCancelarParticipacao} campanha={this.props.trabalho.campanha} />
            </div>
        );
    }
}

export default RegistroTabelaMeusTrabalhosVoluntarios;
