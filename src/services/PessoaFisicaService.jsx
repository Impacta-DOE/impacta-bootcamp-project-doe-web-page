import React, { Component } from 'react';
import axios from 'axios';

import UtilService from './UtilService';

class PessoaFisicaService extends Component {

    constructor(props){
        super(props);
        this.state = {URL : 'https://impacta-doe-api.herokuapp.com/pessoa/fisica/'};
    }

    getAll(){
      return localStorage.getItem('mockPessoaFisica');
    }

    async save(pessoaFisica){
        
        let dia = (pessoaFisica.dataNasc.getDate() < 10) ? '0' + pessoaFisica.dataNasc.getDate() : pessoaFisica.dataNasc.getDate();
        let mes = (pessoaFisica.dataNasc.getMonth() < 10) ? '0' +  pessoaFisica.dataNasc.getMonth() : pessoaFisica.dataNasc.getMonth();
        let ano = pessoaFisica.dataNasc.getFullYear();
        let data = ano + '-' + mes + '-' + dia + 'T00:00';

        const usuarioFisico = {
          dadosBancarios: {
            agencia: '',
            banco: '',
            codigoBanco: '',
            conta: ''
          },
          dadosContato: {
            email: '' + pessoaFisica.dadosContato.email + '',
            telefone: '' + pessoaFisica.dadosContato.telefone + ''
          },
          dataNascimento: data,
          descricao: '',
          endereco: {
            bairro: '' + pessoaFisica.endereco.bairro + '',
            cep: '' + pessoaFisica.endereco.cep + '',
            complemento: '' + pessoaFisica.endereco.complemento + '',
            idDaCidade: '' + pessoaFisica.endereco.idCidade + '',
            idDoEstado: '' + pessoaFisica.endereco.idEstado + '',
            logradouro: '' + pessoaFisica.endereco.rua + '',
            numero: '' + pessoaFisica.endereco.numero + '',
            uf: '' + pessoaFisica.endereco.idEstado + ''
          },
          img_avatar_url: 'null',
          img_background_url: 'null',
          nacionalidade: {
            descricao: '' + pessoaFisica.nacionalidade.descricao + ''
          },
          nomeCompleto: '' + pessoaFisica.nome + '',
          registro: '' + pessoaFisica.registro + '',
          senha: '' + pessoaFisica.senha + '',
          sexo: '' + pessoaFisica.sexo + '',
          username: '' + pessoaFisica.dadosContato.email + ''
        };
        await axios({
            method: 'post',
            url: this.state.URL,
            data: usuarioFisico
        });

    }
    
    async getPessoaFisicaByLoggedIdUser(){
      alert(localStorage.getItem('idPessoa'));
      const pessoaFisica = await axios({
        method: 'get',
        url: 'https://impacta-doe-api.herokuapp.com/pessoa/usuario/' + localStorage.getItem('idPessoa') + '/pessoa',
        data: {}
      })
      .then((result) => result.data);
      return pessoaFisica;
    }

}

export default PessoaFisicaService;
