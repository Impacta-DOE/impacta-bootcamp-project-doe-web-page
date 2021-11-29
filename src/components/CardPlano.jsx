import React, { Component } from 'react';

import '../css/CardPlano.css';

class CardPlano extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="card-plano-body">
                <div style={{"float" : "unset"}}>
                    <p className="title-card-plano">Bronze</p>
                </div>
                <hr className="separador-org-page"></hr>
            </div>
        );
    }
}

export default CardPlano;