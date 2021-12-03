import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../css/BeneficioPlano.css';
import coracao from '../images/coracao.png';

class BeneficioPlano extends Component {
    render() {
        return (
            <div className='div-beneficio-item'>
                <Row >
                    <Col md="auto" style={{'padding-right' : '0px'}}>
                        <img src={coracao} className="icon-beneficio-item"></img>
                    </Col>
                    <Col>
                        <p className="text-beneficio-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default BeneficioPlano;