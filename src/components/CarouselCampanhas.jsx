import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';

import arrow_right from '../images/arrow_right.png';
import arrow_left from '../images/arrow_left.png';

import '../css/CarouselCampanhas.css';
import CarouselService from '../services/CampanhaService';

class CarouselCampanhas extends Component {

    constructor(props){
        super(props);
        this.state = {
            items_list: new CarouselService().getAll(), 
            selected_item: null, 
            actual_index: 0, 
            max_itens: 5,
            indicator_01: "indicator_01",
            indicator_02: "indicator_02",
            indicator_03: "indicator_03",
            indicator_04: "indicator_04",
            indicator_05: "indicator_05",
            redirect: false, 
            page: "/campanha"
        };
        this.timer = 0;
    }
    
    componentWillMount(){
        this.setSelectedItemByIndex(0);
        this.startSlide();
    }

    stopSlide(){
        clearInterval(this.timer);
    }

    startSlide(){
        this.timer = setInterval(() => {this.setSelectedItem(1)}, 5000);
    }

    setSelectedItem(direction){
        let nextIndex = (this.state.actual_index + direction);

        if(nextIndex < 0){
            nextIndex = this.state.max_itens - 1;
        }else
        if(nextIndex >= this.state.max_itens){
            nextIndex = 0;
        }

        this.setState({selected_item : this.state.items_list[nextIndex]});
        this.setState({actual_index : nextIndex});
        this.setCSSIndicators(nextIndex);
    }

    setSelectedItemByIndex(index){
        this.setState({selected_item : this.state.items_list[index]});
        this.setState({actual_index : index});
        this.setCSSIndicators(index);
    }

    setCSSIndicators(selectedIndicator) {
        switch(selectedIndicator){
            case 0:
                this.setState({indicator_01 : "indicator_01_selected"});
                this.setState({indicator_02 : "indicator_02"});
                this.setState({indicator_03 : "indicator_03"});
                this.setState({indicator_04 : "indicator_04"});
                this.setState({indicator_05 : "indicator_05"});
                break;
            case 1:
                this.setState({indicator_01 : "indicator_01"});
                this.setState({indicator_02 : "indicator_02_selected"});
                this.setState({indicator_03 : "indicator_03"});
                this.setState({indicator_04 : "indicator_04"});
                this.setState({indicator_05 : "indicator_05"});
                break;
            case 2:
                this.setState({indicator_01 : "indicator_01"});
                this.setState({indicator_02 : "indicator_02"});
                this.setState({indicator_03 : "indicator_03_selected"});
                this.setState({indicator_04 : "indicator_04"});
                this.setState({indicator_05 : "indicator_05"});
                break;
            case 3:
                this.setState({indicator_01 : "indicator_01"});
                this.setState({indicator_02 : "indicator_02"});
                this.setState({indicator_03 : "indicator_03"});
                this.setState({indicator_04 : "indicator_04_selected"});
                this.setState({indicator_05 : "indicator_05"});
                break;
            case 4:
                this.setState({indicator_01 : "indicator_01"});
                this.setState({indicator_02 : "indicator_02"});
                this.setState({indicator_03 : "indicator_03"});
                this.setState({indicator_04 : "indicator_04"});
                this.setState({indicator_05 : "indicator_05_selected"});
                break;
        }
    }

    abrirPaginaCampanha(){
        this.setState({redirect : true});
    }

    render() {
        if(this.state.redirect){
            this.setState({redirect : false});
            return <Redirect to={{pathname: this.state.page, state: { campanha : this.state.selected_item }}} />
        }
        return (
            <div>
                <div id="carousel" onMouseOver={() => this.stopSlide()} onMouseOut={() => this.startSlide()}>
                    <div id="container-carousel">
                        <div className="div-controls" onClick={() => this.setSelectedItem(-1)}>
                            <img src={arrow_left} className="arrows"/>
                        </div>
                        <div id="item-content">
                            <Container fluid="md" id="item-container">
                                <Row id="title-row">
                                    <p id="titulo-carousel">{this.state.selected_item.organizacao.nomeOrganizacao}</p>
                                </Row>
                                <Row id="content-row">
                                    <Col>
                                        <p id="nome-campanha">{this.state.selected_item.nome_campanha}</p>
                                        <p id="desc-campanha">{this.state.selected_item.resumirDescricao(277)}</p>
                                    </Col>
                                    <Col>
                                        <input type="button" value="Quero saber mais" onClick={() => this.abrirPaginaCampanha()} className="btn-acessar"/>
                                    </Col>
                                </Row>
                                <Row id="indicators-row">
                                    <div id="indicators">
                                        <div className="indicator" id={this.state.indicator_01} onClick={() => this.setSelectedItemByIndex(0)}></div>
                                        <div className="indicator" id={this.state.indicator_02} onClick={() => this.setSelectedItemByIndex(1)}></div>
                                        <div className="indicator" id={this.state.indicator_03} onClick={() => this.setSelectedItemByIndex(2)}></div>
                                        <div className="indicator" id={this.state.indicator_04} onClick={() => this.setSelectedItemByIndex(3)}></div>
                                        <div className="indicator" id={this.state.indicator_05} onClick={() => this.setSelectedItemByIndex(4)}></div>
                                    </div>
                                </Row>
                            </Container>
                            <div id="item-image-background">
                                <div id="item-img-effect"></div>
                                <img src={this.state.selected_item.img_background} id="item-img"/>
                            </div>
                        </div>
                        <div className="div-controls" onClick={() => this.setSelectedItem(1)}>
                            <img src={arrow_right} className="arrows"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarouselCampanhas;