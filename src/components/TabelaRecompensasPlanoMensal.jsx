import React, { Component } from 'react';

import '../css/TabelaRecompensasPlanoMensal.css';
import RegistroRecompensa from './RegistroRecompensa';

class TabelaRecompensasPlanoMensal extends Component {

    constructor(props){
        super(props);
        this.state = {recompensas: []};
    }

    componentDidMount(){
        this.listAllRecompensas();
    }

    listAllRecompensas(){
        let recompensas = [];
        for(let i=0; i<this.props.recompensas.length; i++){
            recompensas.push(<RegistroRecompensa recompensa={this.props.recompensas[i]}/>);
        }
        this.setState({recompensas});
    }

    render() {
        return (
            <div style={{width: "100%", height: "auto"}}>
                <div style={{width: "100%", height: "2.6em", position: "relative", zIndex: "2"}}>
                    <input type="text" placeholder='Digite aqui uma recompensa' id="input-desc-recompensa"/>
                    <input type="button" id="btn-add-recompensa"/>
                </div>
                <div id="tabela-recompensas">
                    {this.state.recompensas}
                </div>
            </div>
        );
    }
}

export default TabelaRecompensasPlanoMensal;