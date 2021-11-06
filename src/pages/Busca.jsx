import React, { Component } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import CarouselCampanhas from '../components/CarouselCampanhas';
import Footer from '../components/Footer';
import MenuTop from '../components/MenuTop';

import '../css/Busca.css';

class Busca extends Component {

    constructor(props){
        super(props);
        this.state = {displayAvancFilter : "none", toggleButtonColor : "#4380BD", toggleButtonStatus : false, getEstadoAtual : false, getCidadeAtual : false};
    }

    showAvancFilter() {
        if(this.state.toggleButtonStatus){
            this.setState({toggleButtonStatus : false});
            this.setState({toggleButtonColor : "#4380BD"});
            this.setState({displayAvancFilter : "none"});
        }else{
            this.setState({toggleButtonStatus : true});
            this.setState({toggleButtonColor : "#326699"});
            this.setState({displayAvancFilter : "block"});
        }
    }

    onCheck(combobox) {
        if(combobox === "estado"){
            var checkBox = document.getElementById("estado-check");
            if (checkBox.checked == true){
                this.setState({getEstadoAtual : true});
            } else {
                this.setState({getEstadoAtual : false});
            }
        }else
        if(combobox === "cidade"){
            var checkBox = document.getElementById("cidade-check");
            if (checkBox.checked == true){
                this.setState({getCidadeAtual : true});
            } else {
                this.setState({getCidadeAtual : false});
            }
        }
    }

    render() {
        return (
            <div className="search-page">
                <MenuTop isLoggedIn={false} showBtnCadastrar showBtnLogin/>
                <div id="container-itens-search-page">
                    <CarouselCampanhas />
                    <div id="filtro-busca">
                        <Form>
                            <select name="filtro" id="filtro" id="combobox" className="selector">
                                <option value="" disabled selected>Filtrar por</option>
                                <option value="campanha">Campanha</option>
                                <option value="acao">Ação</option>
                                <option value="organizacao">Organização</option>
                                <option value="todos">Todos</option>
                            </select>
                            <Form.Control type="text" placeholder="Campanha/ação/organização desejada" id="input-search"/>
                            <Form.Control type="button" value="Pesquisar" id="btn-style" style={{backgroundColor : "#4380BD"}}/>
                            <Form.Control 
                                type="button" 
                                value="Opções de filtro" 
                                id="btn-style" 
                                style={{backgroundColor : this.state.toggleButtonColor}}
                                onClick={() => this.showAvancFilter()}
                            />
                            <div id="div-filtro-avancado" style={{display : this.state.displayAvancFilter}}>
                                <Row style={{width : "100%", height : "100%", margin : "auto"}}>
                                    <Col style={{width : "40%", height : "100%"}}>
                                        <select name="estado" id="estado" id="combobox" className="selector" style={{marginTop : ".8em"}} disabled={this.state.getEstadoAtual}>
                                            <option value="" disabled selected>Estado</option>
                                        </select>
                                        <select name="cidade" id="cidade" id="combobox" className="selector" style={{marginTop : ".8em"}} disabled={this.state.getCidadeAtual}>
                                            <option value="" disabled selected>Cidade</option>
                                        </select>
                                        <select name="tipoDoacao" id="tipoDoacao" id="combobox" className="selector" style={{marginTop : ".8em", marginBottom : ".8em"}}>
                                            <option value="" disabled selected>Tipo de Doação</option>
                                            <option value="dinheiro">Dinheiro</option>
                                            <option value="alimento">Alimento</option>
                                            <option value="roupa">Roupa</option>
                                            <option value="outros">Outros</option>
                                        </select>
                                        <Form.Control type="text" placeholder="CPF/RNE/CNPJ" id="input-registry"/>
                                    </Col>
                                    <Col style={{width : "40%", height : "100%"}}>
                                        <Form.Check
                                            active
                                            type={'checkbox'}
                                            label={'Selecionar estado atual'}
                                            id={'estado-check'}
                                            className="checkbox"
                                            style={{marginTop : "1.6em"}}
                                            onClick={() => this.onCheck("estado")}
                                        />
                                        <Form.Check
                                            active
                                            type={'checkbox'}
                                            label={'Selecionar cidade atual'}
                                            id={'cidade-check'}
                                            className="checkbox"
                                            style={{marginTop : "1.9em"}}
                                            onClick={() => this.onCheck("cidade")}
                                        />
                                        <Form.Check
                                            active
                                            type={'checkbox'}
                                            label={'Com trabalho voluntario'}
                                            id={'voluntario-check'}
                                            className="checkbox"
                                            style={{marginTop : "2em"}}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Busca;