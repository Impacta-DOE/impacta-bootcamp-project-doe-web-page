import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

import '../css/RegistroTabelaGerenciamentoDeVoluntarios.css';
import LocalizacaoService from '../services/LocalizacaoService';
import AceitarVoluntarioModal from './AceitarVoluntarioModal';

class RegistroTabelaGerenciamentoDeVoluntarios extends Component {

    constructor(props){
        super(props);
        this.state = {
            localizacaoService : new LocalizacaoService(),
            cidade: "",
            estado: "",
            showModalAceitarVoluntario: false
        };
        this.setShowModalAceitarVoluntario = this.setShowModalAceitarVoluntario.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.state.localizacaoService.getEstadoById(this.props.contrato.voluntario.endereco.idEstado).then(estado => {
            this.setState({estado: estado.nome});
        });
        this.state.localizacaoService.getCidadeById(this.props.contrato.voluntario.endereco.idCidade).then(cidade => {
            this.setState({cidade: cidade.nome});
        });
    }

    setShowModalAceitarVoluntario(){
        this.setState({showModalAceitarVoluntario : !this.state.showModalAceitarVoluntario});
    }

    handleChange(event) {
        switch (event.target.name) {
            case "checkbox-selecionar":
                if(event.target.checked){
                    this.props.adicionarContratoSelecionado(this.props.contrato);
                } else {
                    this.props.removerContratoSelecionado(this.props.contrato);
                }
                break;   
        }
    }

    render() {
        return (
            <>
                <div id="registry-gerenciamento-voluntario">
                    <p className="column-registry-gerenciamento-voluntario" style={{width: "9%"}}>
                        <Form.Check
                            active
                            type={'checkbox'}
                            id={'selecionar-check'}
                            className="checkbox-selecionar"     
                            defaultChecked={this.props.contratoSelecionado}                           
                            onChange={this.handleChange}
                            name="checkbox-selecionar"
                            value="selecionar"
                        />
                    </p>
                    <div className="vertical-line-registry-gerenciamento-voluntario"></div>
                    <p className="column-registry-gerenciamento-voluntario" style={{width: "6%", 
                                                                                    color: (this.props.contrato.status === 0) ? "#F7FF00" :
                                                                                            (this.props.contrato.status === 1) ? "#03A654" :
                                                                                            "#F52424"}}>{(this.props.contrato.status === 0) ? "Pendente" :
                                                                                            (this.props.contrato.status === 1) ? "Ativo" :
                                                                                            "Inativo"}</p>
                    <div className="vertical-line-registry-gerenciamento-voluntario"></div>                       
                    <p className="column-registry-gerenciamento-voluntario" style={{width: "14%"}}>{this.props.contrato.voluntario.nome}</p>
                    <div className="vertical-line-registry-gerenciamento-voluntario"></div>
                    <p className="column-registry-gerenciamento-voluntario" style={{width: "13%"}}>{this.props.contrato.campanhaSelecionada}</p>
                    <div className="vertical-line-registry-gerenciamento-voluntario"></div>
                    <p className="column-registry-gerenciamento-voluntario" style={{width: "15%"}}>{this.props.contrato.voluntario.dadosContato.email}</p>
                    <div className="vertical-line-registry-gerenciamento-voluntario"></div>
                    <p className="column-registry-gerenciamento-voluntario" style={{width: "9%"}}>{this.props.contrato.voluntario.dadosContato.telefone}</p>
                    <div className="vertical-line-registry-gerenciamento-voluntario"></div>
                    <p className="column-registry-gerenciamento-voluntario" style={{width: "10%"}}>{this.state.cidade}</p>
                    <div className="vertical-line-registry-gerenciamento-voluntario"></div>
                    <p className="column-registry-gerenciamento-voluntario" style={{width: "10%"}}>{this.state.estado}</p>
                    <div className="vertical-line-registry-gerenciamento-voluntario"></div>
                    <p className="column-registry-gerenciamento-voluntario" style={{width: "13%"}}>
                        <input 
                            type="button" 
                            value="Aceitar voluntario" 
                            id="btn-aceitar-voluntario"
                            onClick={() => this.setShowModalAceitarVoluntario()}
                        />
                    </p>
                </div>
                <AceitarVoluntarioModal showModal={this.state.showModalAceitarVoluntario} setShowModalAceitarVoluntario={this.setShowModalAceitarVoluntario} contrato={this.props.contrato} />
            </>
        );
    }
}

export default RegistroTabelaGerenciamentoDeVoluntarios;
