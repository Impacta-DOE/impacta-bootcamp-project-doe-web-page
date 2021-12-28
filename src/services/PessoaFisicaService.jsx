import React, { Component } from 'react';
import axios from 'axios';

import UtilService from './UtilService';

class PessoaFisicaService extends Component {

    //static mockPessoaFisica = [];

    constructor(props){
        super(props);
        this.state = {URL : 'https://impacta-doe-api.herokuapp.com/pessoa/fisica'};
    }

    async save(pessoaFisica){
      localStorage.setItem('mockPessoaFisica', localStorage.getItem('mockPessoaFisica').push(pessoaFisica));
      //PessoaFisicaService.mockPessoaFisica.push(pessoaFisica);
    }

    getAll(){
      return localStorage.getItem('mockPessoaFisica');
    }
    /*async save(pessoaFisica){
        //let img_avatar_base64 = (pessoaFisica.img_avatar !== undefined) ? UtilService.getBase64Image(pessoaFisica.img_avatar) : 0;
        //let img_background_base64 = (pessoaFisica.img_background !== undefined) ? UtilService.getBase64Image(pessoaFisica.img_background) : 0;
        await axios({
            method: 'post',
            url: this.state.URL,
            data: {
              dadosBancarios: {
                agencia: pessoaFisica.dadosBancario.agencia,
                banco: pessoaFisica.dadosBancario.banco,
                codigoBanco: pessoaFisica.dadosBancario.codigoBanco,
                conta: pessoaFisica.dadosBancario.conta
              },
              dadosContato: {
                email: pessoaFisica.dadosContato.email,
                telefone: pessoaFisica.dadosContato.telefone
              },
              dataNascimento: pessoaFisica.dataNasc,
              descricao: pessoaFisica.descricao,
              endereco: {
                bairro: pessoaFisica.endereco.bairro,
                cep: pessoaFisica.endereco.cep,
                complemento: pessoaFisica.endereco.complemento,
                idDaCidade: pessoaFisica.endereco.idCidade,
                idDoEstado: pessoaFisica.endereco.idEstado,
                logradouro: pessoaFisica.endereco.rua,
                numero: pessoaFisica.endereco.numero,
                uf: pessoaFisica.endereco.idEstado
              },
              img_avatar_url: null,
              img_background_url: null,
              nacionalidade: {
                descricao: pessoaFisica.nacionalidade.descricao
              },
              nomeCompleto: pessoaFisica.nomeCompleto,
              registro: pessoaFisica.registro,
              senha: pessoaFisica.senha,
              sexo: pessoaFisica.sexo,
              username: pessoaFisica.dadosContato.email
            }
        });
    }*/

}

export default PessoaFisicaService;