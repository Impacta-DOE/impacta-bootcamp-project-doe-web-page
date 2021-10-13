import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import '../css/MenuModal.css';

class MenuModal extends Component {

    constructor(props){
        super(props);
    }

    render() {
        if(this.props.show){
            return (
                <div id="modal">
                    <div className="menu-modal">
                        <ReactBootstrap.Accordion>
                            <ReactBootstrap.Accordion.Item eventKey="0">
                                <ReactBootstrap.Accordion.Header>Área do doador</ReactBootstrap.Accordion.Header>
                                <ReactBootstrap.Accordion.Body id="accordion-body">
                                    <div className="menu-modal-opcao"> 
                                        <span>Trabalhos voluntários</span>
                                    </div>
                                    <div className="menu-modal-opcao"> 
                                        <span>Planos mensais</span>
                                    </div>
                                    <div className="menu-modal-opcao"> 
                                        <span>Histórico de doações</span>
                                    </div>
                                </ReactBootstrap.Accordion.Body>
                            </ReactBootstrap.Accordion.Item>
                            <ReactBootstrap.Accordion.Item eventKey="1">
                                <ReactBootstrap.Accordion.Header>Área do receptor</ReactBootstrap.Accordion.Header>
                                <ReactBootstrap.Accordion.Body id="accordion-body">
                                    <div className="menu-modal-opcao"> 
                                        <span>Gerenciamento de planos mensais</span>
                                    </div>
                                    <div className="menu-modal-opcao"> 
                                        <span>Campanhas e ações</span>
                                    </div>
                                    <div className="menu-modal-opcao"> 
                                        <span>Gerenciamento de voluntarios</span>
                                    </div>
                                </ReactBootstrap.Accordion.Body>
                            </ReactBootstrap.Accordion.Item>
                        </ReactBootstrap.Accordion>
                    </div>
                </div>
            );
        }else{
            return (
                <div>
                    
                </div>
            );
        }
    }
}

export default MenuModal;