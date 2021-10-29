import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import '../css/CardCampanha.css';

import img_example from '../images/blog.jpg';

class CardCampanha extends Component {
    render() {
        return (
            <div id="card-campanha-body">
                <img src={img_example} id="background-img-card"/>
                <div id="painel-card">
                    <p>Titulo</p>
                    <p>descricao</p>
                    <input type="range" id="my-slider" min="0" max="100" value="50"></input>
                </div>
            </div>
        );
    }
}

export default CardCampanha;