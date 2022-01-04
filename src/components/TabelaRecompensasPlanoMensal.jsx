import React, { Component } from 'react';

import '../css/TabelaRecompensasPlanoMensal.css';
import { PlanoMensalRecompensa } from '../entities/PlanoMensalRecompensa';
import RegistroRecompensa from './RegistroRecompensa';

class TabelaRecompensasPlanoMensal extends Component {

    constructor(props){
        super(props);
        this.state = {
            atualizarTabela: true,
            recompensas: [],
            listObjRecompensas: [],
            recompensa: ""
        };
        this.adicionarRecompensa = this.adicionarRecompensa.bind(this);
        this.removerRecompensa = this.removerRecompensa.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    adicionarRecompensa(){
        let listObjRecompensas = this.state.listObjRecompensas;
        let recompensa = new PlanoMensalRecompensa(0, true, this.state.recompensa);
        let recompensas = (this.state.recompensas != null) ? this.state.recompensas : [];
        recompensas.push(<RegistroRecompensa recompensa={recompensa} removerRecompensa={this.removerRecompensa}/>);
        listObjRecompensas.push(recompensa);
        this.setState({recompensas});
        this.setState({listObjRecompensas});
    }

    removerRecompensa(recompensa){
        let recompensasObj = this.state.listObjRecompensas;
        for(let i=0; i<recompensasObj.length; i++){
            if(recompensasObj[i].descricaoRecompensa === recompensa.descricaoRecompensa){
                recompensasObj.splice(i, 1);
            }
        }
        this.setState({listObjRecompensas: recompensasObj});

        let recompensas = [];
        for(let i=0; i<recompensasObj.length; i++){
            recompensas.push(<RegistroRecompensa recompensa={recompensasObj[i]} removerRecompensa={this.removerRecompensa}/>);
        }
        this.setState({recompensas});
    }

    listAllRecompensas(){
        let recompensas = [];
        for(let i=0; i<this.props.recompensas.length; i++){
            recompensas.push(<RegistroRecompensa recompensa={this.props.recompensas[i]} removerRecompensa={this.removerRecompensa}/>);
        }
        this.setState({recompensas});
    }

    onInputChange(event){
        switch (event.target.id) {
            case "input-desc-recompensa":
                this.setState({recompensa : event.target.value});
        }
    }

    render() {
        if(this.props.atualizarTabela && this.state.atualizarTabela){
            this.listAllRecompensas();
            this.setState({atualizarTabela: false});
            this.setState({listObjRecompensas: this.props.recompensas});
        }
        return (
            <div style={{width: "100%", height: "auto"}}>
                <div style={{width: "100%", height: "2.6em", position: "relative", zIndex: "2"}}>
                    <input type="text" placeholder='Digite aqui uma recompensa' value={this.state.recompensa} id="input-desc-recompensa" onChange={this.onInputChange}/>
                    <input type="button" id="btn-add-recompensa" onClick={() => this.adicionarRecompensa()}/>
                </div>
                <div id="tabela-recompensas">
                    {this.state.recompensas}
                </div>
            </div>
        );
    }
}

export default TabelaRecompensasPlanoMensal;
