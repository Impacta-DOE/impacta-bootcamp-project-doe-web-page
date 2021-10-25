import React, { Component } from 'react';
import CarouselCampanhas from '../components/CarouselCampanhas';
import MenuTop from '../components/MenuTop';
import '../css/HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
                <MenuTop isLoggedIn={false} showBtnCadastrar showBtnLogin/>
                <div id="container-itens-homepage">
                    <CarouselCampanhas />
                </div>
            </div>
        );
    }
}

export default HomePage;