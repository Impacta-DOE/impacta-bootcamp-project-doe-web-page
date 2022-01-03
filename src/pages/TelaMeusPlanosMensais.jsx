import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import MenuTop from '../components/MenuTop';
import TabelaMeusPlanosMensais from '../components/TabelaMeusPlanosMensais';

import '../css/TelaMeusPlanosMensais.css';

class TelaMeusPlanosMensais extends Component {
    render() {
        return (
            <div>
                <MenuTop />
                <div id="div-content">
                    <Row>
                        <Col>
                            <p className="titulo-meus-planos-mensais">Planos Mensais</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr className="hr-titulo-meus-planos-mensais"></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TabelaMeusPlanosMensais />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default TelaMeusPlanosMensais;