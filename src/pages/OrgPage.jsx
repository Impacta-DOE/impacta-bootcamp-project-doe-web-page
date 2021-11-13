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
        const urlAmigavel = this.props.match.params.urlAmigavel;

        //Buscar dados da Ong no Backend

        //Verificar se o usuario está logado ou não 
        this.state = {loggedIn : false};
    }

    renderMenuTop(){
        if(this.state.loggedIn){
            return <MenuTop isLoggedIn={true} />;
        }else{
            return <MenuTop isLoggedIn={false} showBtnCadastrar showBtnLogin/>;
        }
    }

    render() {
        return (
            <div>
                {this.renderMenuTop()}
                <div id="container-org">
                    <div id='borda-capa-org'>
                        <img className="banner-organizacao-page"src={capa} />
                    </div>
                    <div className="container-org-info">
                        
                        <div className='row-org'>
                           
                            <div className='container-logo-organizacao'>
                                <img className="logo-organizacao-page"src={logo} />
                            </div>
                            <div className="container-titulo-org">
                                <h1 id='titulo-org'>ACNUR</h1>
                            </div>

                        </div>
                        <div className='container-button-volutario'>
                            <Button id='btn-voluntario' variant="primary">Voluntariar-se</Button>
                        </div>
                        
                    </div>

                    <div className='container-sobre'>
                        <div className='sobre-titulo'>Sobre a organização</div>
                        <hr className='separador-org-page'/>
                        <div className='sobre-content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor hendrerit viverra. Nulla mauris dolor, vehicula quis pulvinar pretium, facilisis ut lacus. Mauris vel nisl tincidunt, dictum metus at, pharetra lacus. Proin pharetra enim nunc, in consectetur lectus malesuada in. Etiam pulvinar massa sit amet est laoreet, at sollicitudin nunc lacinia. Nunc ac mattis risus, eget fringilla dolor. Duis congue quam et molestie volutpat. Aenean porta a velit eget facilisis. Etiam dolor diam, tempor ut odio a, semper fringilla velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum elementum tincidunt tortor, id gravida enim. In tincidunt massa et ullamcorper tristique. Curabitur quis est dui.</p>
                            <p>Ut tincidunt magna id ex interdum iaculis. Maecenas quis tortor ac purus dignissim ornare. Maecenas iaculis, ante eleifend bibendum consequat, erat mi eleifend mauris, in pharetra tortor mauris sed purus. Mauris in laoreet metus. Mauris tristique risus ut sagittis tincidunt. Curabitur placerat sem iaculis lacus tincidunt ullamcorper. Proin elit justo, mattis ut massa ac, congue posuere sem. Proin at facilisis eros. Vivamus pellentesque vulputate hendrerit. Ut quam risus, imperdiet sit amet finibus eu, consequat vitae tortor. Duis non nisi sit amet ipsum tincidunt congue.</p>
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