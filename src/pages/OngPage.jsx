import React, { Component } from 'react';
import Footer from '../components/Footer';
import MenuTop from '../components/MenuTop';
import '../css/OngPage.css';

class OngPage extends Component {

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
                <div id="container-ong">
                    <div id='capa-ong'></div>
                    <div className="container-ong-picture">
                        <div className='logo-organizacao'>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default OngPage;