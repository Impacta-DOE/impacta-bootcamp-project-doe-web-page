import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import arrow_right from '../images/arrow_right.png';
import arrow_left from '../images/arrow_left.png';
import exemplo_imagem_background from '../images/doacao_exemplo.png';

import '../css/CarouselCampanhas.css';

class CarouselCampanhas extends Component {
    render() {

        return (
            <div>
                <div id="carousel">
                    <div id="container-carousel">
                        <div className="div-controls">
                            <img src={arrow_left} className="arrows"/>
                        </div>
                        <div id="item-content">
                            <Container fluid="md" id="item-container">
                                <Row id="title-row">
                                    <p id="titulo-carousel">Organização amigos do bem</p>
                                </Row>
                                <Row id="content-row">
                                    <Col>
                                        <p id="nome-campanha">Campanha do agasalho</p>
                                        <p id="desc-campanha">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl 
                                        eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, 
                                        vitae gravida nisi maximus. Integer mollis finibus condimentum...</p>
                                    </Col>
                                    <Col>
                                        <input type="button" value="Quero saber mais" className="btn-acessar"/>
                                    </Col>
                                </Row>
                                <Row id="indicators-row">
                                    <div id="indicators">
                                        <div className="indicator"></div>
                                        <div className="indicator"></div>
                                        <div className="indicator"></div>
                                        <div className="indicator"></div>
                                        <div className="indicator"></div>
                                    </div>
                                </Row>
                            </Container>
                            <div id="item-image-background">
                                <div id="item-img-effect"></div>
                                <img src={exemplo_imagem_background} id="item-img"/>
                            </div>
                        </div>
                        <div className="div-controls">
                            <img src={arrow_right} className="arrows"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarouselCampanhas;