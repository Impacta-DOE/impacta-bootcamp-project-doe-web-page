import React, { Component } from 'react';

import '../css/RegistroRecompensa.css';

class RegistroRecompensa extends Component {
    render() {
        return (
            <div style={{width: "100%", height: "18%", backgroundColor: "white", marginBottom: ".3%", float: "left"}}>
                <p id="desc-recompensa">{this.props.recompensa.descricaoRecompensa}</p>
                <input type="button" id="btn-remover-recompensa" onClick={() => this.props.removerRecompensa(this.props.recompensa)}/>
            </div>
        );
    }
}

export default RegistroRecompensa;