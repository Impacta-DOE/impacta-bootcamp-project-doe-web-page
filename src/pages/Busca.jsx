import React, { Component } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import CardCampanha from '../components/CardCampanha';
import CarouselCampanhas from '../components/CarouselCampanhas';
import CardOrganizacao from '../components/CardOrganizacao';
import Footer from '../components/Footer';
import MenuTop from '../components/MenuTop';

import '../css/Busca.css';

import OrganizacaoService from '../services/OrganizacaoService';
import CampanhaService from '../services/CampanhaService';
import {Filtro} from '../entities/Filtro';
import SearchService from '../services/SearchService';

class Busca extends Component {

    constructor(props){
        super(props);
        this.state = {
                        items_campanha_list: new CampanhaService().getAll(), 
                        searchService : new SearchService(),
                        displayAvancFilter : "none", 
                        toggleButtonColor : "#4380BD", 
                        toggleButtonStatus : false, 
                        getEstadoAtual : false, 
                        getCidadeAtual : false,
                        resultado_list : [],
                        resultado_list_apresentado : [],
                        posicao_lista : 0,
                        filtro : new Filtro("teste", "", "", "", "", "", false, false, false)
                    };
        this.handleChange = this.handleChange.bind(this);
    }
    

    componentWillMount(){
        this.showSearchResult(this.state.items_campanha_list);
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

    showSearchResult(result){

        let count = 0;
        for(let i=0; i < result.length; i++){
            if(result[0].nomeOrganizacao == undefined){
                if(count == 4){
                    this.state.resultado_list.push(<CardCampanha campanha={result[i]} marginRight="0em" marginBottom=".8em"/>);
                    count = -1;
                }else{
                    this.state.resultado_list.push(<CardCampanha campanha={result[i]} marginRight=".64em" marginBottom=".8em"/>);
                }
            } else {
                if(count == 4){
                    this.state.resultado_list.push(<CardOrganizacao organizacao={result[i]} marginRight="0em" marginBottom="1.2em"/>);
                    count = -1;
                }else{
                    this.state.resultado_list.push(<CardOrganizacao organizacao={result[i]} marginRight=".64em" marginBottom="1.2em"/>);
                }
            }
            count++;
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

    handleChange(event){
        switch (event.target.name) {
            case "filtro":
                this.state.filtro.tipoPesquisa = event.target.value;
                break;
            case "input-search":
                this.state.filtro.inputSearch = event.target.value;
                break;
            case "estado":
                this.state.filtro.estado = event.target.value;
                break;
            case "cidade":
                this.state.filtro.cidade = event.target.value;
                break;
            case "tipoDoacao":
                this.state.filtro.tipoDoacao = event.target.value;
                break;   
            case "input-registry":
                this.state.filtro.registro = event.target.value;
                break;     
            case "checkbox-estado-atual":
                this.state.filtro.estadoAtual = event.target.checked;
                break;        
            case "checkbox-cidade-atual":
                this.state.filtro.cidadeAtual = event.target.checked;
                break;
            case "checkbox-voluntario":
                this.state.filtro.temTrabalhoVoluntario = event.target.checked;
                break;        
        }
        
    }

    pesquisar(){
        this.state.posicao_lista = 0;
        this.state.resultado_list = [];
        this.state.resultado_list_apresentado = [];
        let result = this.state.searchService.search(this.state.filtro);
        this.showSearchResult(result);
    }

    render() {
        return (
            <div className="search-page">
                <MenuTop isLoggedIn={false} showBtnCadastrar showBtnLogin/>
                <div id="container-itens-search-page">
                    <CarouselCampanhas />
                    <div id="filtro-busca">
                        <Form>
                            <select name="filtro" id="filtro" id="combobox" className="selector" onChange={this.handleChange}>
                                <option value="" disabled selected>Filtrar por</option>
                                <option value="campanha">Campanha / Ação</option>
                                <option value="organizacao">Organização</option>
                                <option value="todos">Todos</option>
                            </select>
                            <Form.Control type="text" placeholder="Campanha/ação/organização desejada" name="input-search" id="input-search" onChange={this.handleChange}/>
                            <Form.Control type="button" value="Pesquisar" id="btn-style" style={{backgroundColor : "#4380BD"}} onClick={() => this.pesquisar()}/>
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
                                        <select name="estado" id="estado" id="combobox" className="selector" style={{marginTop : ".8em"}} disabled={this.state.getEstadoAtual} onChange={this.handleChange}>
                                            <option value="" disabled selected>Estado</option>
                                            <option value="estado">Estado</option>
                                        </select>
                                        <select name="cidade" id="cidade" id="combobox" className="selector" style={{marginTop : ".8em"}} disabled={this.state.getCidadeAtual} onChange={this.handleChange}>
                                            <option value="" disabled selected>Cidade</option>
                                            <option value="cidade">Cidade</option>
                                        </select>
                                        <select name="tipoDoacao" id="tipoDoacao" id="combobox" className="selector" style={{marginTop : ".8em", marginBottom : ".8em"}} onChange={this.handleChange}>
                                            <option value="" disabled selected>Tipo de Doação</option>
                                            <option value="dinheiro">Dinheiro</option>
                                            <option value="alimento">Alimento</option>
                                            <option value="roupa">Roupa</option>
                                            <option value="outros">Outros</option>
                                        </select>
                                        <Form.Control type="text" placeholder="CPF/RNE/CNPJ" name="input-registry" id="input-registry" onChange={this.handleChange}/>
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
                                            onChange={this.handleChange}
                                            name="checkbox-estado-atual"
                                            value="get-estado-atual"
                                        />
                                        <Form.Check
                                            active
                                            type={'checkbox'}
                                            label={'Selecionar cidade atual'}
                                            id={'cidade-check'}
                                            className="checkbox"
                                            style={{marginTop : "1.9em"}}
                                            onClick={() => this.onCheck("cidade")}
                                            onChange={this.handleChange}
                                            name="checkbox-cidade-atual"
                                            value="get-cidade-atual"
                                        />
                                        <Form.Check
                                            active
                                            type={'checkbox'}
                                            label={'Com trabalho voluntario'}
                                            id={'voluntario-check'}
                                            className="checkbox"
                                            style={{marginTop : "2em"}}
                                            onChange={this.handleChange}
                                            name="checkbox-voluntario"
                                            value="get-tem-voluntario"
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
                        <div style={{width : "16em", height : "3.3em", margin : "0 auto"}}>
                            <input type="button" value="Mostrar mais" className="btn-mostrar" onClick={() => this.mostrarMais()}/>
                        </div>
                    </div>
                </div>            
            </div>
        );
    }
}

export default Busca;