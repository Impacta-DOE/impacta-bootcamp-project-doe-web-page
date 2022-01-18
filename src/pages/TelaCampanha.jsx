import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Comentario from '../components/Comentario';
import DoacaoModal from '../components/DoacaoModal';
import Footer from '../components/Footer';
import MenuTop from '../components/MenuTop';
import RegistroDoacao from '../components/RegistroDoacao';

import '../css/TelaCampanha.css';
import CampanhaService from '../services/CampanhaService';

class TelaCampanha extends Component {

    constructor(props){
        super(props);        
        this.state = {
                        doacoes : [],
                        comentarios : [], 
                        redirect: false, 
                        page: "/org/" + this.props.location.state.campanha.organizacao.nomeOrganizacao,
                        showModal: false,
                        porcetagemDoacoes: 0,
                        valoresArrecadados: "",
                        campanhaService: new CampanhaService()
                    };
        this.setShowModal = this.setShowModal.bind(this);
        this.addDoacaoListaDoacoes = this.addDoacaoListaDoacoes.bind(this);
        this.addComentarioListaComentario = this.addComentarioListaComentario.bind(this);
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        document.title = this.props.location.state.campanha.nome_campanha;
        this.setState({porcetagemDoacoes : this.calculaPorcentagem()});
        this.setState({valoresArrecadados: this.apresentarValores()});
    }

    componentWillMount(){
        if(this.props.location.state.campanha.doacao.tipoDoacao === "dinheiro"){
            this.apresentarDoacoes();
        }
        if(this.props.location.state.campanha.comentarios != null){
            this.apresentarComentarios();
        }
    }

    apresentarValores(){
        if(this.props.location.state.campanha.doacao.tipoDoacao === 'dinheiro'){
            return this.props.location.state.campanha.doacao.unidadeMedida + ' ' + 
            this.props.location.state.campanha.doacao.valorAtual.toFixed(2).replace('.', ',') + ' / ' + 
            this.props.location.state.campanha.doacao.unidadeMedida + ' ' +
            this.props.location.state.campanha.doacao.valorTotal.toFixed(2).replace('.', ',');
        }else{
            return this.props.location.state.campanha.doacao.valorAtual + ' ' + 
            this.props.location.state.campanha.doacao.unidadeMedida + ' / ' + 
            this.props.location.state.campanha.doacao.valorTotal + ' ' + 
            this.props.location.state.campanha.doacao.unidadeMedida;
        }
    }

    apresentarDoacoes() {
        let doacoes = [];
        for(let i=0; i < this.props.location.state.campanha.doacao.historicoDoacoes.length; i++){
            doacoes.push(<RegistroDoacao 
                            tipoDoacao={this.props.location.state.campanha.doacao.tipoDoacao} 
                            unidadeMedida={this.props.location.state.campanha.doacao.unidadeMedida} 
                            doacao={this.props.location.state.campanha.doacao.historicoDoacoes[i]}
                        />);
        }
        this.setState({doacoes});
    }

    apresentarComentarios(){
        let comentarios = [];
        for(let i=0; i < this.props.location.state.campanha.comentarios.length; i++){
            comentarios.push(<Comentario  
                                comentario={this.props.location.state.campanha.comentarios[i]}
                            />);
        }
        this.setState({comentarios});
    }

    calculaPorcentagem(){
        if(this.props.location.state.campanha.doacao.valorAtual > this.props.location.state.campanha.doacao.valorTotal) return 100;
        return ((this.props.location.state.campanha.doacao.valorAtual * 100) / this.props.location.state.campanha.doacao.valorTotal);
    }

    abrirPaginaOrganizacao() {
        this.setState({redirect : true});
    }

    setShowModal() {
        this.setState({showModal : !this.state.showModal});
    }

    addDoacaoListaDoacoes(doacao){
        let doacoes = [];
        doacoes.push(<RegistroDoacao 
            tipoDoacao={this.props.location.state.campanha.doacao.tipoDoacao} 
            unidadeMedida={this.props.location.state.campanha.doacao.unidadeMedida} 
            doacao={doacao}
        />);
        for(let i=0; i < this.props.location.state.campanha.doacao.historicoDoacoes.length; i++){
            doacoes.push(<RegistroDoacao 
                            tipoDoacao={this.props.location.state.campanha.doacao.tipoDoacao} 
                            unidadeMedida={this.props.location.state.campanha.doacao.unidadeMedida} 
                            doacao={this.props.location.state.campanha.doacao.historicoDoacoes[i]}
                        />);
        }
        this.setState({doacoes});
        this.props.location.state.campanha.doacao.historicoDoacoes.unshift(doacao);
        this.state.campanhaService.updateDoacoesDeCampanhaById(this.props.location.state.campanha.id_campanha, doacao);
        this.props.location.state.campanha.doacao.valorAtual = this.props.location.state.campanha.doacao.calcularTotalArrecadado();
        this.setState({valoresArrecadados: this.apresentarValores()});
        this.setState({porcetagemDoacoes : this.calculaPorcentagem()});
    }

    addComentarioListaComentario(comentario){
        let comentarios = [];
        comentarios.push(<Comentario  
            comentario={comentario}
        />);
        for(let i=0; i < this.props.location.state.campanha.comentarios.length; i++){
            comentarios.push(<Comentario  
                                comentario={this.props.location.state.campanha.comentarios[i]}
                            />);
        }
        this.props.location.state.campanha.comentarios.unshift(comentario);
        this.state.campanhaService.updateComentariosDeCampanhaById(this.props.location.state.campanha.id_campanha, comentario);
        this.setState({comentarios});
    }

    render() {
        if(this.state.redirect){
            this.setState({redirect : false});
            return <Redirect to={{pathname: this.state.page, state: { organizacao : this.props.location.state.campanha.organizacao }}} />
        }
        return (
            <div id="content-campanha" style={{position: "relative"}}>
                <MenuTop showBtnCadastrar showBtnLogin/>
                <div id="div-titulo" style={{backgroundImage : "url(" + this.props.location.state.campanha.img_background + ")"}}>
                    <div style={{
                                    width: "100%", 
                                    height: "100%", 
                                    position: "relative", 
                                    backgroundColor: "rgba(0, 0, 0, .6)", 
                                    zIndex: "0",
                                    paddingTop: "9em"
                                }}>
                        <p id="titulo-campanha">{this.props.location.state.campanha.nome_campanha}</p>
                    </div>
                </div>
                <div id="div-info-org">
                    <img src={this.props.location.state.campanha.organizacao.logo} id="logo-organizacao" onClick={() => this.abrirPaginaOrganizacao()}/>
                    <p id="nome-organizacao" onClick={() => this.abrirPaginaOrganizacao()}>{this.props.location.state.campanha.organizacao.nomeOrganizacao}</p>
                    <input type="button" value="Voluntariar-se" id="btn-voluntariar"/>
                </div>
                <div id="infos-campanha">
                    <div id="div-desc">
                        <p className="titulo-desc-campanha">Descrição da Campanha</p>
                        <hr className="hr-titulo-desc-campanha"></hr>
                        <p id="texto-desc">{this.props.location.state.campanha.desc_campanha}</p>
                        <p className="titulo-desc-campanha">Comentários</p>
                        <hr className="hr-titulo-desc-campanha"></hr>
                        {
                            (this.state.comentarios == 0) ?
                                <p id="msg-comentario-inexistente">Esta campanha não possui nenhum comentario</p>
                            :
                                <div id="div-comentarios">
                                    {this.state.comentarios}
                                </div> 

                        }
                    </div>
                    <div id="div-doacao">
                        <div id="slider-arrecadados-tela-campanha">
                            <p id="text-slider-tela-campanha">{this.state.valoresArrecadados}</p>
                            <div id="slider-tela-campanha">
                                <div id="load-slider-tela-campanha" style={{"width" : this.state.porcetagemDoacoes + "%"}}/>
                            </div>
                        </div>
                        <div style={{"width" : "100%", "height" : "auto", "padding" : "1em"}}>
                            {
                                (this.props.location.state.campanha.doacao.tipoDoacao === "dinheiro") ? 
                                    <div>
                                        <p className="titulo-desc-campanha">Doações realizadas</p>
                                        <hr className="hr-titulo-desc-campanha"></hr>
                                        <div id="div-doacoes">{this.state.doacoes}</div>
                                    </div> : null
                            }
                            <input type="button" value="Doar" id="btn-doar-campanha" onClick={() => this.setShowModal()}/>
                        </div>
                    </div>
                </div>
                <DoacaoModal 
                        showModal={this.state.showModal} 
                        setShowModal={this.setShowModal} 
                        habilitarComentario 
                        habilitarSalvamentoCartao
                        isLogged={localStorage.getItem("isLoggedIn")}
                        addDoacaoListaDoacoes={this.addDoacaoListaDoacoes}
                        addComentarioListaComentario={this.addComentarioListaComentario}
                        tipoArrecadacao={this.props.location.state.campanha.doacao.tipoDoacao}
                />
                <Footer />
            </div>
        );
    }
}

export default TelaCampanha;