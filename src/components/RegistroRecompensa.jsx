import React, { Component } from 'react';

import '../css/RegistroRecompensa.css';

class RegistroRecompensa extends Component {
    render() {
        return (
            <div style={{width: "100%", height: "18%", backgroundColor: "white", marginBottom: ".3%", float: "left"}}>
                <p id="desc-recompensa">descrição recompensa</p>
                <input type="button" id="btn-remover-recompensa"/>
            </div>
        );
    }
}

export default RegistroRecompensa;