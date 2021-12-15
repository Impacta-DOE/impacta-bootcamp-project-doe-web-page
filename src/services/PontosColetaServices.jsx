import React, { Component } from 'react';
import { PontosColeta } from '../entities/PontosColeta';

class PontosColetaServices extends Component {
    
    constructor(props){
        super(props);
        this.pontosColeta = [
            new PontosColeta("08370190", "Rua de exemplo 01", 20, "A", "Bairro de exemplo 01", 0, 0, "Roberto", true),
            new PontosColeta("08370190", "Rua de exemplo 02", 20, "A", "Bairro de exemplo 02", 0, 0, "Julio", false),
            new PontosColeta("08370190", "Rua de exemplo 03", 20, "A", "Bairro de exemplo 03", 0, 0, "Carla", false),
            new PontosColeta("08370190", "Rua de exemplo 04", 20, "A", "Bairro de exemplo 04", 0, 0, "Alberto", true),
            new PontosColeta("08370190", "Rua de exemplo 05", 20, "A", "Bairro de exemplo 05", 0, 0, "Jonas", true),
            new PontosColeta("08370190", "Rua de exemplo 06", 20, "A", "Bairro de exemplo 06", 0, 0, "Gabriel", false),
        ];
    }

    getPontosColeta(){
        return this.pontosColeta;
    }

}

export default PontosColetaServices;