import React, { Component } from 'react';

import '../css/CardCampanha.css';

import img_example from '../images/blog.jpg';

class CardCampanha extends Component {
    render() {
        return (
            <div id="card-campanha-body">
                <img src={img_example} id="background-img-card"/>
                <div id="painel-card">
                    <div id="text-area">
                        <p id="titulo-card">Doe um brinquedo</p>
                        <p id="desc-card">Curabitur at ultricies felis. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                    <div id="slider-arrecadados">
                        <p id="text-slider">0 / 0</p>
                        <input type="range" id="slider-card" min="0" max="100" value="50"></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardCampanha;