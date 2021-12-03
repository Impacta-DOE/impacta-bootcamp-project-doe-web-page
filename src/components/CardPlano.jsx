import React, { Component } from 'react';

import '../css/CardPlano.css';
import BeneficioPlano from './BeneficioPlano';

class CardPlano extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="card-plano-body">
                <h2 className="title-card-plano">[Titulo Plano]</h2>
                <hr className="separador-org-page"/>
                <p className="valor-plano">[Valor do Plano]</p>
                <p className="recorrencia-plano">[Recorrencia]</p>
                <h3 className="titulo-beneficios">Benefícios</h3>
                <div className='div-beneficios'>
                    <BeneficioPlano/>
                    <BeneficioPlano/>
                    <BeneficioPlano/>
                    <BeneficioPlano/>
                </div>
                <div className='div-button-assinar-plano'>
                    <input type="button" value="Assinar Plano" id="btn-assinar-plano"/>
                </div>
            </div>
        );
    }
}

export default CardPlano;