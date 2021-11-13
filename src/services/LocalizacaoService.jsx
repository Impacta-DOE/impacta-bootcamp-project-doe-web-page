import React, { Component } from 'react';
import axios from 'axios';

class LocalizacaoService extends Component {
    
    constructor(props){
        super(props);
        this.state = {URL : 'https://servicodados.ibge.gov.br/api/v1/localidades/'};
    }

    async getEstados(){
        let resultados = [];
        
        await axios.get(this.state.URL + 'estados/')
        .then(res => {
          resultados = res.data;
        });

        return resultados;
    }

    async getCidades(){
        let resultados;
        
        await axios.get(this.state.URL + 'municipios/')
        .then(res => {
          resultados = res.data;
        });

        return resultados;
    }

    async getCidadesByUF(uf){
        let resultados;

        await axios.get(this.state.URL + 'estados/' + uf + '/municipios/')
        .then(res => {
          resultados = res.data;
        });

        return resultados;
    }
}

export default LocalizacaoService;