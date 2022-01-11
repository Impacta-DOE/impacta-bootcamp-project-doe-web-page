import React, { Component } from 'react';
import axios from 'axios';

class PessoaJuridicaService extends Component {

    constructor(props){
        super(props);
        this.state = {URL : 'https://impacta-doe-api.herokuapp.com/pessoa/juridica'};
    }

    async save(pessoaJuridica){
        console.log(pessoaJuridica);
        const usuarioJuridico = {
            cnpj: '' + pessoaJuridica.registro + '',
            dadosBancarios: {
                agencia: '' + pessoaJuridica.dadosBancario.agencia + '',
                banco: '' + pessoaJuridica.dadosBancario.banco + '',
                codigoBanco: '' + pessoaJuridica.dadosBancario.codigoBanco + '',
                conta: '' + pessoaJuridica.dadosBancario.conta + ''
            },
            dadosContato: {
                email: '' + pessoaJuridica.dadosContato.email + '',
                telefone: '' + pessoaJuridica.dadosContato.telefone + ''
            },
            descricao: '',
            endereco: {
                bairro: '' + pessoaJuridica.endereco.bairro + '',
                cep: '' + pessoaJuridica.endereco.cep + '',
                complemento: '' + pessoaJuridica.endereco.complemento + '',
                idDaCidade: '' + pessoaJuridica.endereco.idCidade + '',
                idDoEstado: '' + pessoaJuridica.endereco.idEstado + '',
                logradouro: '' + pessoaJuridica.endereco.rua + '',
                numero: '' + pessoaJuridica.endereco.numero + '',
                uf: '' + pessoaJuridica.endereco.idEstado + ''
            },
            img_avatar_url: 'null',
            img_background_url: 'null',
            razaoSocial: '' + pessoaJuridica.nome + '',
            senha: '' + pessoaJuridica.senha + '',
            subtituloOrganizacao: '',
            username: '' + pessoaJuridica.dadosContato.email + ''
        }
        await axios({
            method: 'post',
            url: this.state.URL,
            data: usuarioJuridico
        });
    }

}

export default PessoaJuridicaService;