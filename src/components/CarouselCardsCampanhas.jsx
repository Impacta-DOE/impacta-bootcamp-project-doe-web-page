import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import '../css/CarouselCardsCampanhas.css';
import CardCampanha from './CardCampanha';

class CarouselCardsCampanhas extends Component {
    render() {
        return (
            <div id="carousel-card">
                <Row style={{"width" : "100%", "height" : "3em", "margin-left" : ".001em", "margin-bottom" : "1em"}}>
                    <Col style={{"padding" : "0", "height" : "100%"}}>
                        <p id="titulo">Campanhas e ações recentes</p>
                    </Col>
                    <Col style={{"padding" : "0", "height" : "100%"}}>
                        <input type="button" value="mais" className="btn-mais"/>
                    </Col>
                </Row>
                <Row id="cards">
                    <Col style={{"height" : "100%", "width" : "100%"}}>
                        <div id="div-cards">
                            <CardCampanha />
                            <CardCampanha />
                            <CardCampanha />
                            <CardCampanha />
                            <CardCampanha />
                            <CardCampanha />
                            <CardCampanha />
                            <CardCampanha />
                            <CardCampanha />
                            <CardCampanha />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CarouselCardsCampanhas;