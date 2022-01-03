import React, { Component } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import ManterPlanoMensalModal from '../components/ManterPlanoMensalModal';
import MenuTop from '../components/MenuTop';
import TabelaMeusPlanosMensaisOrganizacao from '../components/TabelaMeusPlanosMensaisOrganizacao';

import '../css/TelaGerenciamentoDePlanosMensais.css';
import { PlanoMensal } from '../entities/PlanoMensal';

class TelaGerenciamentoDePlanosMensais extends Component {

    constructor(props){
        super(props);
        this.state = {showModal: false, plano: PlanoMensal, modoTelaPlano: "cadastro", atualizarTabela: false, showPlanosInativos: false};
        this.showModal = this.showModal.bind(this);
        this.abrirTelaAlteraçãoPlano = this.abrirTelaAlteraçãoPlano.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setAtualizarTabela = this.setAtualizarTabela.bind(this);
    }

    abrirTelaCadastroPlano(){
        this.setState({plano: null});
        this.setState({modoTelaPlano: "cadastro"});
        this.showModal();
    }

    abrirTelaAlteraçãoPlano(plano){
        //this.setState({campanha: null});
        this.setState({modoTelaPlano: "alteracao"});
        this.setState({plano});
        this.showModal();
    }

    handleChange(event){
        switch (event.target.id) {
            case "apresentar-planos-inativos-check":
                this.setState({showPlanosInativos : !this.state.showPlanosInativos});
                this.setState({atualizarTabela : true});
                break;
        }
    }

    showModal(){
        this.setState({showModal: !this.state.showModal});
    }

    setAtualizarTabela(status){
        this.setState({atualizarTabela: status});
    }

    render() {
        return (
            <div>
                <MenuTop />
                <div id="div-content">
                    <Row>
                        <Col>
                            <p className="titulo-meus-planos-mensais-gerenciamento">Meus planos</p>
                            <input type="button" value="Criar novo plano" id="btn-criar-novo-plano" onClick={() => this.abrirTelaCadastroPlano()}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr className="hr-titulo-meus-planos-mensais-gerenciamento"></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TabelaMeusPlanosMensaisOrganizacao 
                                showPlanosInativos={this.state.showPlanosInativos} 
                                atualizarTabela={this.state.atualizarTabela} 
                                setAtualizarTabela={this.setAtualizarTabela}
                                abrirTelaAlteraçãoPlano={this.abrirTelaAlteraçãoPlano}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Check
                                active
                                type={'checkbox'}
                                label={'Apresentar planos inativos'}
                                id={'apresentar-planos-inativos-check'}
                                className="checkbox-apresentar-planos-inativos"
                                style={{marginTop : "1em"}}
                                onChange={this.handleChange}
                                name="checkbox-apresentar-plano-inativo"
                                value="apresentar-planos-inativos"
                            />
                        </Col>
                    </Row>
                </div>
                <ManterPlanoMensalModal showModal={this.state.showModal} setShowModal={this.showModal}/>
            </div>
        );
    }
}

export default TelaGerenciamentoDePlanosMensais;
