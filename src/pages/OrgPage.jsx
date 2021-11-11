import React, { Component } from 'react';
import Footer from '../components/Footer';
import MenuTop from '../components/MenuTop';
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
                        <div className='borda-logo-organizacao'>
                            <img className="logo-organizacao-page"src={logo} />
                        </div>
                        <div className="container-titulo-org">
                            <h1 id='titulo-org'>ACNUR</h1>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default OrgPage;