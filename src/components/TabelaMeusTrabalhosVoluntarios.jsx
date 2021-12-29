import React, { Component } from 'react';

import '../css/TabelaMeusTrabalhosVoluntarios.css';
import TrabalhoVoluntarioService from '../services/TrabalhoVoluntarioService';
import RegistroTabelaMeusTrabalhosVoluntarios from './RegistroTabelaMeusTrabalhosVoluntarios';

class TabelaMeusTrabalhosVoluntarios extends Component {

    constructor(props){
        super(props);
        this.state = {
            trabalhoVoluntarioService: new TrabalhoVoluntarioService(),
            meusTrabalhosVoluntarios: []
        };
    }

    componentWillMount(){
        this.getMeusTrabalhosVoluntarios();
    }

    getMeusTrabalhosVoluntarios(){
        let trabalhoVoluntario = this.state.trabalhoVoluntarioService.getTrabalhoVoluntariosByUserID(0);
        let meusTrabalhosVoluntarios = [];
        for(let i=0; i<trabalhoVoluntario.length; i++){
            meusTrabalhosVoluntarios.push(<RegistroTabelaMeusTrabalhosVoluntarios trabalho={trabalhoVoluntario[i]}/>);
        }
        this.setState({meusTrabalhosVoluntarios});
    }

    render() {
        return (
            <div id="tabela-meus-trabalhos-voluntarios">
                <div id="header-meus-trabalhos-voluntarios">
                    <p className="column-meus-trabalhos-voluntarios" style={{width: "14%"}}>CNPJ / CPF</p>
                    <div className="vertical-line-header-meus-trabalhos-voluntarios"></div>
                    <p className="column-meus-trabalhos-voluntarios" style={{width: "30%"}}>Nome da instituição / Receptor</p>
                    <div className="vertical-line-header-meus-trabalhos-voluntarios"></div>
                    <p className="column-meus-trabalhos-voluntarios" style={{width: "14%"}}>Status trabalho</p>
                    <div className="vertical-line-header-meus-trabalhos-voluntarios"></div>
                    <p className="column-meus-trabalhos-voluntarios" style={{width: "12%"}}>Data de inicio</p>
                    <div className="vertical-line-header-meus-trabalhos-voluntarios"></div>
                    <p className="column-meus-trabalhos-voluntarios" style={{width: "12%"}}>Data final</p>
                    <div className="vertical-line-header-meus-trabalhos-voluntarios"></div>
                    <p className="column-meus-trabalhos-voluntarios" style={{width: "17%"}}>Cancelar participação</p>
                </div>
                {this.state.meusTrabalhosVoluntarios}
            </div>
        );
    }
}

export default TabelaMeusTrabalhosVoluntarios;