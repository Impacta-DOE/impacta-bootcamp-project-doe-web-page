import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import MenuTop from '../components/MenuTop';
import TabelaMinhasDoacoes from '../components/TabelaMinhasDoacoes';

class TelaHistoricoDoacoes extends Component {
    render() {
        return (
            <div>
                <MenuTop />
                <div id="div-content" style={{paddingBottom: "3em"}}>
                    <Row>
                        <Col>
                            <p className="titulo-minhas-campanhas">Histórico de doações</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr className="hr-titulo-minhas-campanhas"></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TabelaMinhasDoacoes />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default TelaHistoricoDoacoes;