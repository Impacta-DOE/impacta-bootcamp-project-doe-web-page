import React, { Component } from 'react';
import { PontosColeta } from '../entities/PontosColeta';

class PontosColetaServices extends Component {
    
    constructor(props){
        super(props);
        this.pontosColeta = [
            new PontosColeta(1, "08370190", "Rua de exemplo 01", 20, "A", "Bairro de exemplo 01", 35, 3500105, "Roberto", false),
            new PontosColeta(2, "08370190", "Rua de exemplo 02", 20, "A", "Bairro de exemplo 02", 35, 3500105, "Julio", false),
            new PontosColeta(3, "08370190", "Rua de exemplo 03", 20, "A", "Bairro de exemplo 03", 35, 3500105, "Carla", false),
            new PontosColeta(4, "08370190", "Rua de exemplo 04", 20, "A", "Bairro de exemplo 04", 35, 3500105, "Alberto", false),
            new PontosColeta(5, "08370190", "Rua de exemplo 05", 20, "A", "Bairro de exemplo 05", 35, 3500105, "Jonas", false),
            new PontosColeta(6, "08370190", "Rua de exemplo 06", 20, "A", "Bairro de exemplo 06", 35, 3500105, "Gabriel", false)
        ];
    }

    getPontosColeta(){
        return this.pontosColeta;
    }

}

export default PontosColetaServices;