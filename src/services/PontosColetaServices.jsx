import React, { Component } from 'react';
import axios from 'axios';
import { PontosColeta } from '../entities/PontosColeta';
import LocalizacaoService from './LocalizacaoService';

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
        this.state = {
            URL: 'https://impacta-doe-campanhas-api.herokuapp.com/pontocoleta',
            localizacaoService: new LocalizacaoService()
        };
    }

    getPontosColeta(){
        return this.pontosColeta;
    }

    async create(pontoColeta){
        
        let uf = "";

        this.state.localizacaoService.getEstadoById(pontoColeta.idEstado).then(estado => {
            
            console.log(pontoColeta);
            console.log(estado.sigla);

            const config = {
                headers: { Authorization: "Bearer " + localStorage.getItem('token')}
            };
    
            axios.defaults.headers.common = {'Authorization': "Bearer " + localStorage.getItem('token')}

            axios({
                method: 'post',
                url: this.state.URL + '/create',
                data: {
                    cep: '' + pontoColeta.cep + '',
                    logradouro: '' + pontoColeta.rua + '',
                    numero: '' + pontoColeta.numero + '',
                    bairro: '' + pontoColeta.bairro + '',
                    cidade: 'São Paulo',
                    uf: '' + estado.sigla + '',
                    complemento: '' + pontoColeta.complemento + '',
                    responsavel: '' + pontoColeta.responsavel + ''            
                },
                config: config
            }).then(result => {
                alert("Ponto de coleta cadastrado.");
            }).catch((err) => {
                alert("Erro: " + err);
            });
        });
    }

}

export default PontosColetaServices;