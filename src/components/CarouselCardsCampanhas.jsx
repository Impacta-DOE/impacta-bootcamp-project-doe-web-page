import React, { Component } from 'react';
import { scroller } from "react-scroll";
import { Row, Col, Container } from 'react-bootstrap';

import '../css/CarouselCardsCampanhas.css';

import arrow_right from '../images/arrow_right.png';
import arrow_left from '../images/arrow_left.png';

import ItemCarouselService from '../services/ItemCarouselService';
import CardCampanha from './CardCampanha';

class CarouselCardsCampanhas extends Component {

    constructor(props){
        super(props);
        this.state = {items_list: new ItemCarouselService().getAll()};
    }

    render() {
        return (
            <div id="carousel-card">
                <div className="div-controls" onClick={() => this.setSelectedItem(-1)}>
                    <img src={arrow_left} className="arrows"/>
                </div>
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
                            <CardCampanha campanha={this.state.items_list[0]}/>
                            <CardCampanha campanha={this.state.items_list[1]}/>
                            <CardCampanha campanha={this.state.items_list[2]}/>
                            <CardCampanha campanha={this.state.items_list[3]}/>
                            <CardCampanha campanha={this.state.items_list[4]}/>
                            <CardCampanha campanha={this.state.items_list[5]}/>
                            <CardCampanha campanha={this.state.items_list[6]}/>
                            <CardCampanha campanha={this.state.items_list[7]}/>
                            <CardCampanha campanha={this.state.items_list[8]}/>
                            <CardCampanha campanha={this.state.items_list[9]}/>
                        </div>
                    </Col>
                </Row>
                <div className="div-controls" onClick={() => this.setSelectedItem(1)}>
                    <img src={arrow_right} className="arrows"/>
                </div>
            </div>
        );
    }
}

export default CarouselCardsCampanhas;