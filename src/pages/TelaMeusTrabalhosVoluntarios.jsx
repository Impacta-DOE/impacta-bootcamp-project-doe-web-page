import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import MenuTop from '../components/MenuTop';
import TabelaMeusTrabalhosVoluntarios from '../components/TabelaMeusTrabalhosVoluntarios';

import '../css/TelaMeusTrabalhosVoluntarios.css';

class TelaMeusTrabalhosVoluntarios extends Component {

    componentDidMount(){
        document.title = "Trabalhos Voluntarios";
    }

    render() {
        return (
            <div>
                <MenuTop />
                <div id="div-content">
                    <Row>
                        <Col>
                            <p className="titulo-meus-trabalhos-voluntarios">Trabalhos Voluntarios</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr className="hr-titulo-meus-trabalhos-voluntarios"></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TabelaMeusTrabalhosVoluntarios />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default TelaMeusTrabalhosVoluntarios;