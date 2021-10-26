import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import arrow_right from '../images/arrow_right.png';
import arrow_left from '../images/arrow_left.png';
import exemplo_imagem_background from '../images/doacao_exemplo.png';

import '../css/CarouselCampanhas.css';
import { ItemCarousel } from '../entities/ItemCarousel';
import ItemCarouselService from '../services/ItemCarouselService';

class CarouselCampanhas extends Component {

    constructor(props){
        super(props);
        this.state = {items_list: new ItemCarouselService().getAll(), selected_item: null, actual_index: 0, max_itens: 5};
    }
    
    componentWillMount(){
        this.setSelectedItemByIndex(0);
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

    }

    setSelectedItemByIndex(index){
        this.setState({selected_item : this.state.items_list[index]});
        this.setState({actual_index : index});
    }

    render() {

        return (
            <div>
                <div id="carousel">
                    <div id="container-carousel">
                        <div className="div-controls" onClick={() => this.setSelectedItem(-1)}>
                            <img src={arrow_left} className="arrows"/>
                        </div>
                        <div id="item-content">
                            <Container fluid="md" id="item-container">
                                <Row id="title-row">
                                    <p id="titulo-carousel">{this.state.selected_item.titulo}</p>
                                </Row>
                                <Row id="content-row">
                                    <Col>
                                        <p id="nome-campanha">{this.state.selected_item.nome_campanha}</p>
                                        <p id="desc-campanha">{this.state.selected_item.desc_campanha}</p>
                                    </Col>
                                    <Col>
                                        <input type="button" value="Quero saber mais" className="btn-acessar"/>
                                    </Col>
                                </Row>
                                <Row id="indicators-row">
                                    <div id="indicators">
                                        <div className="indicator" onClick={() => this.setSelectedItemByIndex(0)}></div>
                                        <div className="indicator" onClick={() => this.setSelectedItemByIndex(1)}></div>
                                        <div className="indicator" onClick={() => this.setSelectedItemByIndex(2)}></div>
                                        <div className="indicator" onClick={() => this.setSelectedItemByIndex(3)}></div>
                                        <div className="indicator" onClick={() => this.setSelectedItemByIndex(4)}></div>
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