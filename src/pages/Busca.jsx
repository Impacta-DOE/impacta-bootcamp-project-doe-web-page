import React, { Component } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import CardCampanha from '../components/CardCampanha';
import CarouselCampanhas from '../components/CarouselCampanhas';
import Footer from '../components/Footer';
import MenuTop from '../components/MenuTop';

import CampanhaService from '../services/CampanhaService';

import '../css/Busca.css';
import OrganizacaoService from '../services/OrganizacaoService';
import CardOrganizacao from '../components/CardOrganizacao';

class Busca extends Component {

    constructor(props){
        super(props);
        this.state = {
                        items_organizacao_list: new OrganizacaoService().getAll(), 
                        items_campanha_list: new CampanhaService().getAll(), 
                        displayAvancFilter : "none", 
                        toggleButtonColor : "#4380BD", 
                        toggleButtonStatus : false, 
                        getEstadoAtual : false, 
                        getCidadeAtual : false,
                        resultado_list : [],
                        resultado_list_apresentado : [],
                        posicao_lista : 0
                    };
    }

    componentWillMount(){
        this.showSearchResult();
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

    showSearchCampanhasResult(){
        let result = [];
        let count = 0;
        for(let i=0; i<this.state.items_campanha_list.length; i++){
            if(count == 4){
                result.push(<CardCampanha campanha={this.state.items_campanha_list[i]} marginRight="0em" marginBottom=".9em"/>);
                count = -1;
            }else{
                result.push(<CardCampanha campanha={this.state.items_campanha_list[i]} marginRight=".64em" marginBottom=".9em"/>);
            }
            count++;
        }
        return result;
    }

    showSearchOrganizacaoResult(){
        let result = [];
        let count = 0;
        for(let i=0; i<this.state.items_organizacao_list.length; i++){
            if(count == 4){
                result.push(<CardOrganizacao organizacao={this.state.items_organizacao_list[i]} marginRight="0em" marginBottom="1.2em"/>);
                count = -1;
            }else{
                result.push(<CardOrganizacao organizacao={this.state.items_organizacao_list[i]} marginRight=".64em" marginBottom="1.2em"/>);
            }
            count++;
        }
        return result;
    }

    showSearchResult(){
        let resultOrg = [];
        let resultCamp = [];
        
        resultOrg = this.showSearchOrganizacaoResult();
        for(let i=0; i < resultOrg.length; i++){
            this.state.resultado_list.push(resultOrg[i]);
        }

        resultCamp = this.showSearchCampanhasResult();
        for(let i=0; i < resultCamp.length; i++){
            this.state.resultado_list.push(resultCamp[i]);
        }

        for(let i=0; i < ((this.state.resultado_list.length >= 10) ? 10 : this.state.resultado_list.length); i++){
            this.state.resultado_list_apresentado.push(this.state.resultado_list[i]);
        }

        this.setState({posicao_lista : (this.state.resultado_list_apresentado.length - 1)});
    }

    mostrarMais(){
        if(this.state.posicao_lista < this.state.resultado_list.length - 1){
            let i = this.state.posicao_lista;
            let final_pos = (((this.state.resultado_list.length-1)-i) > 10) ? i + 10 : this.state.resultado_list.length;
            for(let i=this.state.posicao_lista + 1; i < final_pos; i++){
                this.state.resultado_list_apresentado.push(this.state.resultado_list[i]);
            }
            this.setState({posicao_lista : (this.state.resultado_list_apresentado.length - 1)});
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
                                <option value="campanha">Campanha / Ação</option>
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
                    <div id="container-resultados">
                        {this.state.resultado_list_apresentado}
                    </div>
                    <div id="container-button-mais">
                        <div style={{width : "14em", height : "3.3em", margin : "0 auto"}}>
                            <input type="button" value="Mostrar mais" className="btn-mostrar" onClick={() => this.mostrarMais()}/>
                        </div>
                    </div>
                </div>            
            </div>
        );
    }
}

export default Busca;