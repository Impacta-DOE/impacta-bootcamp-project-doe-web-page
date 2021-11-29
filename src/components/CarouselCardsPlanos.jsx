import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Redirect } from 'react-router';

import '../css/CarouselCardsPlanos.css';

import arrow_right from '../images/arrow_right.png';
import arrow_left from '../images/arrow_left.png';

import PlanoService from '../services/PlanoService';
import CardPlano from './CardPlano';

class CarouselCardsPlanos extends Component {
    render(){
        return (
            <div>
                <Row style={{"width" : "100%", "height" : "3em", "margin-left" : ".001em", "margin-bottom" : "1em"}}>
                    <Col style={{"padding" : "0", "height" : "100%"}}>
                        <p id="titulo">Planos de Assinaturas Disponíveis</p>
                    </Col>
                </Row>
                <Row className='box-subtitle-planos'>
                    <p id='subtitle-planos'>Para colaborar com a instituição mensalmente, temos as seguintes opções de planos mensais</p>
                </Row>
                <Row id="cards-planos">
                    <Col style={{"height" : "100%", "width" : "100%"}}>
                        <div id="div-cards">
                            <div id="begin" style={{float : "left", position : "relative", marginRight: "-2.4em"}}>
                            </div>
                            <CardPlano/>
                            <CardPlano/>
                            <CardPlano/>
                            <div id="middle2" style={{float : "left", position : "relative"}}>
                            </div>
                            <CardPlano/>
                            <CardPlano/>
                            <CardPlano/>
                            <CardPlano/>
                            <div id="middle1" style={{float : "left", position : "relative", marginLeft: "-2.4em"}}>
                            </div>
                            <CardPlano/>
                            <CardPlano/>
                            <CardPlano/>
                            <div id="end" style={{float : "left", position : "relative", marginLeft: "-1.8em"}}>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CarouselCardsPlanos;