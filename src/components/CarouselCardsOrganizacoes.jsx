import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Redirect } from 'react-router';

import '../css/CarouselCardsOrganizacoes.css';

import arrow_right from '../images/arrow_right.png';
import arrow_left from '../images/arrow_left.png';

import CardOrganizacao from './CardOrganizacao';
import OrganizacaoService from '../services/OrganizacaoService';

class CarouselCardsOrganizacoes extends Component {

    constructor(props){
        super(props);
        this.state = {items_list: new OrganizacaoService().getAll(), displayLeftControl : "none", displayRightControl : "inline", positionCarousel : "begin", redirect: false, page: "/"};
    }

    chamaProximaTela(tela){
        this.setState({
            redirect: true,
            page : tela
        })
    }

    scrollTo(direction){
        if(direction == 1){
            if(this.state.positionCarousel === "begin"){
                document.getElementById('middle1-org').scrollIntoView({ behavior: "smooth", block: 'nearest', inline : 'nearest' });
                this.setState({positionCarousel : "middle"});
                this.setState({displayLeftControl : "inline"});
                this.setState({displayRightControl : "inline"});
            }else{
                document.getElementById('end-org').scrollIntoView({ behavior: "smooth", block: 'nearest', inline : 'nearest' });
                this.setState({positionCarousel : "end"});
                this.setState({displayLeftControl : "inline"});
                this.setState({displayRightControl : "none"});
            }
        }else{
            if(this.state.positionCarousel === "end"){
                document.getElementById('middle2-org').scrollIntoView({ behavior: "smooth", block: 'nearest', inline : 'nearest' });
                this.setState({positionCarousel : "middle"});
                this.setState({displayLeftControl : "inline"});
                this.setState({displayRightControl : "inline"});
            }else{
                document.getElementById('begin-org').scrollIntoView({ behavior: "smooth", block: 'nearest', inline : 'nearest' });
                this.setState({positionCarousel : "begin"});
                this.setState({displayLeftControl : "none"});
                this.setState({displayRightControl : "inline"});
            }
        }
        
    }

    render() {
        if(this.state.redirect){
            this.setState({redirect : false});
            return <Redirect to={this.state.page} />
        }
        return (
            <div id="carousel-card-org">
                <Row style={{"width" : "100%", "height" : "3em", "margin-left" : ".001em", "margin-bottom" : "1em"}}>
                    <Col style={{"padding" : "0", "height" : "100%"}}>
                        <p id="titulo">Organizações em destaque</p>
                    </Col>
                    <Col style={{"padding" : "0", "height" : "100%"}}>
                        <input type="button" value="mais" className="btn-mais" onClick={() => this.chamaProximaTela("/buscar")}/>
                    </Col>
                </Row>
                <Row id="cards-org">
                    <Col style={{"height" : "100%", "width" : "100%"}}>
                        <div id="div-cards-org">
                            <div id="begin-org" style={{float : "left", position : "relative", marginRight: "-2.4em"}}>
                            </div>
                            <CardOrganizacao organizacao={this.state.items_list[0]} />
                            <CardOrganizacao organizacao={this.state.items_list[1]}/>
                            <CardOrganizacao organizacao={this.state.items_list[2]}/>
                            <div id="middle2-org" style={{float : "left", position : "relative"}}>
                            </div>
                            <CardOrganizacao organizacao={this.state.items_list[3]}/>
                            <CardOrganizacao organizacao={this.state.items_list[4]}/>
                            <CardOrganizacao organizacao={this.state.items_list[5]}/>
                            <CardOrganizacao organizacao={this.state.items_list[6]}/>
                            <div id="middle1-org" style={{float : "left", position : "relative", marginLeft: "-2.4em"}}>
                            </div>
                            <CardOrganizacao organizacao={this.state.items_list[7]}/>
                            <CardOrganizacao organizacao={this.state.items_list[8]}/>
                            <CardOrganizacao organizacao={this.state.items_list[9]}/>
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