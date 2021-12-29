import React, { Component } from 'react';
import { Campanha } from './Campanha';

export class TrabalhoVoluntario {
    
    status: boolean;
    campanha: Campanha;
    dataInicio: Date;
    dataFinal: Date;

    constructor(status: boolean, campanha: Campanha, dataInicio: Date, dataFinal: Date){
        this.status = status;
        this.campanha = campanha;
        this.dataInicio = dataInicio;
        this.dataFinal = dataFinal;
    }

}
