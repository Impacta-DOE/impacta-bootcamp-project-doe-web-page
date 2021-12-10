import React, { Component } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import MenuTop from '../components/MenuTop';
import TabelaMinhasCampanhas from '../components/TabelaMinhasCampanhas';

import '../css/TelaMinhasCampanhas.css';

class TelaMinhasCampanhas extends Component {
    render() {
        return (
            <div>
                <MenuTop />
                <div id="div-content">
                    <Row>
                        <Col>
                            <p className="titulo-minhas-campanhas">Minhas campanhas/ações</p>
                            <input type="button" value="Criar campanha/ação" id="btn-criar-campanha"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr className="hr-titulo-minhas-campanhas"></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TabelaMinhasCampanhas />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Check
                                active
                                type={'checkbox'}
                                label={'Apresentar campanhas/ações inativas'}
                                id={'apresentar-campanha-inativa-check'}
                                className="checkbox-apresentar-campanha-inativa"
                                style={{marginTop : "1em"}}
                                onChange={this.handleChange}
                                name="checkbox-apresentar-campanha-inativa"
                                value="apresentar-campanha-inativa"
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default TelaMinhasCampanhas;