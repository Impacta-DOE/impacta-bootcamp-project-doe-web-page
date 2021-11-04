import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import '../css/CarouselCardsOrganizacoes.css';

import arrow_right from '../images/arrow_right.png';
import arrow_left from '../images/arrow_left.png';

import CardOrganizacao from './CardOrganizacao';

class CarouselCardsOrganizacoes extends Component {

    constructor(props){
        super(props);
        this.state = {items_list: null, displayLeftControl : "none", displayRightControl : "inline", positionCarousel : "begin"};
    }

    scrollTo(direction){
        if(direction == 1){
            if(this.state.positionCarousel === "begin"){
                document.getElementById('middle1-org').scrollIntoView({ behavior: "smooth", block: 'nearest' });
                this.setState({positionCarousel : "middle"});
                this.setState({displayLeftControl : "inline"});
                this.setState({displayRightControl : "inline"});
            }else{
                document.getElementById('end-org').scrollIntoView({ behavior: "smooth", block: 'nearest' });
                this.setState({positionCarousel : "end"});
                this.setState({displayLeftControl : "inline"});
                this.setState({displayRightControl : "none"});
            }
        }else{
            if(this.state.positionCarousel === "end"){
                document.getElementById('middle2-org').scrollIntoView({ behavior: "smooth", block: 'nearest' });
                this.setState({positionCarousel : "middle"});
                this.setState({displayLeftControl : "inline"});
                this.setState({displayRightControl : "inline"});
            }else{
                document.getElementById('begin-org').scrollIntoView({ behavior: "smooth", block: 'nearest' });
                this.setState({positionCarousel : "begin"});
                this.setState({displayLeftControl : "none"});
                this.setState({displayRightControl : "inline"});
            }
        }
        
    }

    render() {
        return (
            <div id="carousel-card-org">
                <Row style={{"width" : "100%", "height" : "3em", "margin-left" : ".001em", "margin-bottom" : "1em"}}>
                    <Col style={{"padding" : "0", "height" : "100%"}}>
                        <p id="titulo">Organizações em destaque</p>
                    </Col>
                    <Col style={{"padding" : "0", "height" : "100%"}}>
                        <input type="button" value="mais" className="btn-mais"/>
                    </Col>
                </Row>
                <Row id="cards-org">
                    <Col style={{"height" : "100%", "width" : "100%"}}>
                        <div id="div-cards-org">
                            <div id="begin-org" style={{float : "left", position : "relative", marginRight: "-2.4em"}}>
                            </div>
                            <CardOrganizacao />
                            <CardOrganizacao />
                            <CardOrganizacao />
                            <div id="middle2-org" style={{float : "left", position : "relative"}}>
                            </div>
                            <CardOrganizacao />
                            <CardOrganizacao />
                            <CardOrganizacao />
                            <CardOrganizacao />
                            <div id="middle1-org" style={{float : "left", position : "relative", marginLeft: "-2.4em"}}>
                            </div>
                            <CardOrganizacao />
                            <CardOrganizacao />
                            <CardOrganizacao />
                            <div id="end-org" style={{float : "left", position : "relative", marginLeft: "-1.8em"}}>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div id="controls-org">
                    <div className="div-controls-card-left-org" style={{"display" : this.state.displayLeftControl}} onClick={() => this.scrollTo(-1)}>
                        <img src={arrow_left} className="arrows"/>
                    </div>
                    <div className="div-controls-card-right-org" style={{"display" : this.state.displayRightControl}}  onClick={() => this.scrollTo(1)}>
                        <img src={arrow_right} className="arrows"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarouselCardsOrganizacoes;