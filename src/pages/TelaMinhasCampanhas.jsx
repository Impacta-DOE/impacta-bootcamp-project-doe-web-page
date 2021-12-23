import React, { Component } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import ManterCampanhaModal from '../components/ManterCampanhaModal';
import MenuTop from '../components/MenuTop';
import TabelaMinhasCampanhas from '../components/TabelaMinhasCampanhas';

import '../css/TelaMinhasCampanhas.css';
import { Campanha } from '../entities/Campanha';

class TelaMinhasCampanhas extends Component {

    constructor(props){
        super(props);
        this.state = {showModal: false, modoTelaCampanha: "cadastro", campanha: null, atualizarTabela: false, showCampanhasInativas: false};
        this.showModal = this.showModal.bind(this);
        this.abrirTelaAlteraçãoCampanha = this.abrirTelaAlteraçãoCampanha.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setAtualizarTabela = this.setAtualizarTabela.bind(this);
    }

    componentDidMount(){
        document.title = "Minhas Campanhas e Ações";
    }

    showModal(){
        this.setState({showModal: !this.state.showModal});
    }

    abrirTelaCadastroCampanha(){
        this.setState({campanha: null});
        this.setState({modoTelaCampanha: "cadastro"});
        this.showModal();
    }

    abrirTelaAlteraçãoCampanha(campanha){
        //this.setState({campanha: null});
        this.setState({modoTelaCampanha: "alteracao"});
        this.setState({campanha});
        this.showModal();
    }

    handleChange(event){
        switch (event.target.id) {
            case "apresentar-campanha-inativa-check":
                this.setState({showCampanhasInativas : !this.state.showCampanhasInativas});
                this.setState({atualizarTabela : true});
                break;
        }
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
                            <p className="titulo-minhas-campanhas">Minhas campanhas/ações</p>
                            <input type="button" value="Criar campanha/ação" id="btn-criar-campanha" onClick={() => this.abrirTelaCadastroCampanha()}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr className="hr-titulo-minhas-campanhas"></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TabelaMinhasCampanhas 
                                showCampanhasInativas={this.state.showCampanhasInativas} 
                                atualizarTabela={this.state.atualizarTabela} 
                                setAtualizarTabela={this.setAtualizarTabela}
                                abrirTelaAlteraçãoCampanha={this.abrirTelaAlteraçãoCampanha}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Check
                                active
                                type={'checkbox'}
                                label={'Apresentar campanhas/ações inativas'}
                                id={'apresentar-campanha-inativa-check'}
                                className="checkbox-apresentar-campanha-inativa"
                                style={{marginTop : "1em"}}
                                onChange={this.handleChange}
                                name="checkbox-apresentar-campanha-inativa"
                                value="apresentar-campanha-inativa"
                            />
                        </Col>
                    </Row>
                </div>
                <ManterCampanhaModal campanha={this.state.campanha} modoTelaCampanha={this.state.modoTelaCampanha} showModal={this.state.showModal} setShowModal={this.showModal}/>
            </div>
        );
    }
}

export default TelaMinhasCampanhas;