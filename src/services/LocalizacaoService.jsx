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

    async getEstadoById(id){
      let resultados;
        
      await axios.get(this.state.URL + 'estados/' + id)
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

    async getCidadeById(id){
      let resultados;
      
      await axios.get(this.state.URL + 'municipios/' + id)
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

  getListaNacionalidades(){
      var file = this.files[0];

      var reader = new FileReader();
      reader.onload = function(progressEvent){

        console.log(this.result);

        var lines = this.result.split('\n');
        for(var line = 0; line < lines.length; line++){
          console.log(lines[line]);
        }
      };
      reader.readAsText(file);
  }
}

export default LocalizacaoService;