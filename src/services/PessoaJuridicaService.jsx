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

    async updateImagesFromUsuario(id, image_avatar, image_background){
        var bodyFormData = new FormData();
        bodyFormData.append('img_avatar', image_avatar);
        bodyFormData.append('img_background', image_background);

        axios({
            method: "put",
            url: this.state.URL + '/' + id + '/upload/imagem',
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then((response) => {
              //handle success
              alert("Imagens enviadas");
            })
            .catch(function (response) {
              //handle error
              alert("Erro: " + response);
            });
    }

    async updateDadosUsuario(pessoa){

        console.log(pessoa);

        //let img_avatar = btoa(pessoa.img_avatar);
        //let img_background = btoa(pessoa.img_background);
  
        const usuarioJuridico = {
            cnpj: '' + pessoa.registro + '',
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
            img_avatar_url: 'null',
            img_background_url: 'null',
            razaoSocial: '' + pessoa.nome + '',
            senha: '' + pessoa.senha + '',
            subtituloOrganizacao: '' + pessoa.subtituloOrganizacao + '',
            username: '' + pessoa.dadosContato.email + ''
        };
  
        await axios({
          method: 'put',
          url: this.state.URL + '/' + localStorage.getItem('idPessoa'),
          data: usuarioJuridico
        })
        .then((result) => {
            alert("Perfil modificado com sucesso");
            console.log(result);
        })
        .catch(err => alert(err));
      }

}

export default PessoaJuridicaService;