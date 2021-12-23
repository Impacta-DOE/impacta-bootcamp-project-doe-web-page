import React, { Component } from 'react';

import '../css/RegistroTabelaMinhasCampanhas.css';

import editar from '../images/editar.png';
import InativarCampanhaModal from './InativarCampanhaModal';

class RegistroTabelaMinhasCampanhas extends Component {

    constructor(props){
        super(props);
        this.state = {showModalInativarCampanha: false};
        this.setShowModalInativarCampanha = this.setShowModalInativarCampanha.bind(this);
    }

    setShowModalInativarCampanha(){
        this.setState({showModalInativarCampanha : !this.state.showModalInativarCampanha});
    }

    render() {
        return (
            <>
                <div id="registry-minhas-campanhas">
                    <p className="column-registry-minhas-campanhas" style={{width: "10%", color: (this.props.campanha.status) ? "#03A654" : "#F52424"}}>{(this.props.campanha.status) ? "Ativo" : "Inativo"}</p>
                    <div className="vertical-line-registry-minhas-campanhas"></div>
                    <p className="column-registry-minhas-campanhas" style={{width: "31%"}}>{this.props.campanha.nome_campanha}</p>
                    <div className="vertical-line-registry-minhas-campanhas"></div>
                    <p className="column-registry-minhas-campanhas" style={{width: "14%"}}>{this.props.campanha.dataLimite}</p>
                    <div className="vertical-line-registry-minhas-campanhas"></div>
                    <p className="column-registry-minhas-campanhas" style={{width: "14%"}}>{this.props.campanha.doacao.tipoDoacao}</p>
                    <div className="vertical-line-registry-minhas-campanhas"></div>
                    <p className="column-registry-minhas-campanhas" style={{width: "10%"}}><img src={editar} id="icon-editar" onClick={() => this.props.abrirTelaAlteraçãoCampanha(this.props.campanha)}/></p>
                    <div className="vertical-line-registry-minhas-campanhas"></div>
                    <p className="column-registry-minhas-campanhas" style={{width: "20%"}}><input 
                                                                                                type="button" 
                                                                                                value="Inativar" 
                                                                                                id="btn-inativar" 
                                                                                                disabled={!this.props.campanha.status}
                                                                                                onClick={() => this.setShowModalInativarCampanha()}
                                                                                            />
                    </p>
                </div>
                <InativarCampanhaModal showModal={this.state.showModalInativarCampanha} setShowModalInativarCampanha={this.setShowModalInativarCampanha} campanha={this.props.campanha} />
            </>
        );
    }
}

export default RegistroTabelaMinhasCampanhas;