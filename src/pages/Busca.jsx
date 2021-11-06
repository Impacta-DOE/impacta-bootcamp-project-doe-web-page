import React, { Component } from 'react';
import CarouselCampanhas from '../components/CarouselCampanhas';
import Footer from '../components/Footer';
import MenuTop from '../components/MenuTop';

import '../css/Busca.css';

class Busca extends Component {
    render() {
        return (
            <div className="search-page">
                <MenuTop isLoggedIn={false} showBtnCadastrar showBtnLogin/>
                <div id="container-itens-search-page">
                    <CarouselCampanhas />
                    <div id="filtro-busca">
                        <select name="filtro" id="filtro" id="combobox" className="selector">
                            <option value="" disabled selected>Filtrar por</option>
                            <option value="campanha">Campanha</option>
                            <option value="acao">Ação</option>
                            <option value="organizacao">Organização</option>
                            <option value="todos">Todos</option>
                        </select>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Busca;