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
      const pessoaFisica = await axios({
        method: 'get',
        url: 'https://impacta-doe-api.herokuapp.com/pessoa/usuario/' + localStorage.getItem('idUsuario') + '/pessoa',
        data: {}
      })
      .then((result) => result.data);
      return pessoaFisica;
    }

    async updateDadosUsuario(pessoa){

      let img_avatar = btoa(pessoa.img_avatar);
      let img_background = btoa(pessoa.img_background);

      let dia = (pessoa.dataNasc.getDate() < 10) ? '0' + pessoa.dataNasc.getDate() : pessoa.dataNasc.getDate();
      let mes = (pessoa.dataNasc.getMonth() < 10) ? '0' +  pessoa.dataNasc.getMonth() : pessoa.dataNasc.getMonth();
      let ano = pessoa.dataNasc.getFullYear();
      let data = ano + '-' + mes + '-' + dia + 'T00:00';

      const usuarioFisico = {
        dadosBancarios: {
          agencia: '' + pessoa.dadosBancario.agencia + '',
          banco: '' + pessoa.dadosBancario.banco + '',
          codigoBanco: '' + pessoa.dadosBancario.codigoBanco + '',
          conta: '' + pessoa.dadosBancario.conta + '',
          id: '' + pessoa.dadosBancario.id + ''
        },
        dadosContato: {
          email: '' + pessoa.dadosContato.email + '',
          id: '' + pessoa.dadosContato.id + '',
          telefone: '' + pessoa.dadosContato.telefone + ''
        },
        dataNascimento: data,
        descricao: '' + pessoa.descricao + '',
        endereco: {
          bairro: '' + pessoa.endereco.bairro + '',
          cep: '' + pessoa.endereco.cep + '',
          complemento: '' + pessoa.endereco.complemento + '',
          id: '' + pessoa.endereco.id + '',
          idDaCidade: '' + pessoa.endereco.idCidade + '',
          idDoEstado: '' + pessoa.endereco.idEstado + '',
          logradouro: '' + pessoa.endereco.rua + '',
          numero: '' + pessoa.endereco.numero + '',
          uf: '' + pessoa.endereco.idEstado + ''
        },
        id: '' + pessoa.id + '',
        img_avatar_url: '' + img_avatar + '',
        img_background_url: '' + img_background + '',
        nacionalidade: {
          descricao: '' + pessoa.nacionalidade.descricao + '',
          id: '' + pessoa.id + ''
        },
        nomeCompleto: '' + pessoa.nome + '',
        registro: '' + pessoa.registro + '',
        senha: '' + pessoa.senha + '',
        sexo: '' + pessoa.sexo + '',
        username: '' + pessoa.dadosContato.email + ''
      };

      await axios({
        method: 'put',
        url: this.state.URL + '' + localStorage.getItem('idPessoa'),
        data: usuarioFisico
      })
      .then((result) => alert("Perfil modificado com sucesso"))
      .catch(err => alert(err));
    }

}

export default PessoaFisicaService;
