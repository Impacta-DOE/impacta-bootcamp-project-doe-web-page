import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Redirect } from 'react-router';

import '../css/CarouselCardsPlanos.css';

import arrow_right from '../images/arrow_right_blue.png';
import arrow_left from '../images/arrow_left_blue.png';

import PlanoService from '../services/PlanoService';
import CardPlano from './CardPlano';

class CarouselCardsPlanos extends Component {

    constructor(props){
        super(props);
        this.state = {displayLeftControl : "none", displayRightControl : "inline", positionCarousel : "begin"};
    }


    scrollTo(direction){
        if(direction == 1){
            if(this.state.positionCarousel === "begin"){
                document.getElementById('middle1-planos').scrollIntoView({ behavior: "smooth", block: 'nearest', inline : 'nearest' });
                this.setState({positionCarousel : "middle"});
                this.setState({displayLeftControl : "inline"});
                this.setState({displayRightControl : "inline"});
            }else{
                document.getElementById('end-planos').scrollIntoView({ behavior: "smooth", block: 'nearest', inline : 'nearest' });
                this.setState({positionCarousel : "end"});
                this.setState({displayLeftControl : "inline"});
                this.setState({displayRightControl : "none"});
            }
        }else{
            if(this.state.positionCarousel === "end"){
                document.getElementById('middle2-planos').scrollIntoView({ behavior: "smooth", block: 'nearest', inline : 'nearest' });
                this.setState({positionCarousel : "middle"});
                this.setState({displayLeftControl : "inline"});
                this.setState({displayRightControl : "inline"});
            }else{
                document.getElementById('begin-planos').scrollIntoView({ behavior: "smooth", block: 'nearest', inline : 'nearest' });
                this.setState({positionCarousel : "begin"});
                this.setState({displayLeftControl : "none"});
                this.setState({displayRightControl : "inline"});
            }
        }
        
    }

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
                            <div id="begin-planos" style={{float : "left", position : "relative", marginRight: "-2.4em"}}>
                            </div>
                            <CardPlano/>
                            <CardPlano/>
                            <CardPlano/>
                            <div id="middle2-planos" style={{float : "left", position : "relative"}}>
                            </div>
                            <CardPlano/>
                            <CardPlano/>
                            <CardPlano/>
                            <CardPlano/>
                            <div id="middle1-planos" style={{float : "left", position : "relative", marginLeft: "-2.4em"}}>
                            </div>
                            <CardPlano/>
                            <CardPlano/>
                            <CardPlano/>
                            <div id="end-planos" style={{float : "left", position : "relative", marginLeft: "-1.8em"}}>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div id="controls-planos">
                    <div className="div-controls-card-left-planos" style={{"display" : this.state.displayLeftControl}} onClick={() => this.scrollTo(-1)}>
                        <img src={arrow_left} className="arrows-planos"/>
                    </div>
                    <div className="div-controls-card-right-planos" style={{"display" : this.state.displayRightControl}}  onClick={() => this.scrollTo(1)}>
                        <img src={arrow_right} className="arrows-planos"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarouselCardsPlanos;