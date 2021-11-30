import React, { Component } from 'react';

import '../css/BeneficioPlano.css';
import coracao from '../images/coracao.png';

class BeneficioPlano extends Component {
    render() {
        return (
            <div className='div-beneficio-item'>
                <img src={coracao} className="icon-beneficio-item"></img>
                <p className="text-beneficio-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
        );
    }
}

export default BeneficioPlano;