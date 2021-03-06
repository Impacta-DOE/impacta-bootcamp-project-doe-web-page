import React, { Component } from 'react';
import CarouselCampanhas from '../components/CarouselCampanhas';
import CarouselCardsCampanhas from '../components/CarouselCardsCampanhas';
import CarouselCardsOrganizacoes from '../components/CarouselCardsOrganizacoes';
import Footer from '../components/Footer';
import MenuTop from '../components/MenuTop';
import '../css/HomePage.css';

class HomePage extends Component {

    componentDidMount(){
        document.title = "Bem-Vindo ao DOE";
    }

    render() {
        return (
            <div className="homepage">
                <MenuTop showBtnCadastrar showBtnLogin/>
                <div id="container-itens-homepage">
                    <CarouselCampanhas />
                    <CarouselCardsCampanhas />
                    <CarouselCardsOrganizacoes />
                </div>
                <Footer />
            </div>
        );
    }
}

export default HomePage;