import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import Footer from '../components/Footer';
import MenuTop from '../components/MenuTop';
import CarouselCardsCampanhas from '../components/CarouselCardsCampanhas';
import CarouselCardsPlanos from '../components/CarouselCardsPlanos';

import '../css/OrgPage.css';

import logo from '../images/logo_anhcr.png';
import capa from '../images/banner-capa-org.png';

class OrgPage extends Component {

    constructor(props){
        super(props);
        //const urlAmigavel = this.props.match.params.urlAmigavel;

        //Buscar dados da Ong no Backend

        //Verificar se o usuario está logado ou não 
        this.state = {loggedIn : false};
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        document.title = this.props.location.state.organizacao.nomeOrganizacao;
    }

    renderMenuTop(){
        /*if(this.state.loggedIn){
            return <MenuTop isLoggedIn={true} />;
        }else{
            return <MenuTop isLoggedIn={false} showBtnCadastrar showBtnLogin/>;
        }*/
        <MenuTop />;
    }

    render() {
        return (
            <div>
                {/*this.renderMenuTop()*/}
                <MenuTop showBtnCadastrar showBtnLogin/>
                <div id="container-org">
                    <div id="div-titulo-org" style={{backgroundImage : "url(" + this.props.location.state.organizacao.backgroundPaginaOrg + ")"}}>
                        
                    </div>
                    <div id="div-info-org">
                        <img src={this.props.location.state.organizacao.logo} id="logo-organizacao"/>
                        <p id="nome-organizacao">{this.props.location.state.organizacao.nomeOrganizacao}</p>
                        <input type="button" value="Voluntariar-se" id="btn-voluntariar"/>
                    </div>

                    <div className='container-sobre'>
                        <div className='sobre-titulo'>Sobre a organização</div>
                        <hr className='separador-org-page'/>
                        <div className='sobre-content'>
                            {this.props.location.state.organizacao.descricaoOrganizacao}
                        </div>
                    </div>

                    <div className='container-carousel-campanhas'>
                        <CarouselCardsCampanhas />
                    </div>

                    <div className='container-carousel-planos'>
                        <CarouselCardsPlanos />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default OrgPage;