import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import camera_icon from '../images/camera.png';
import camera_white_icon from '../images/camera-white.png';

import FormEdicaoPessoaFisica from './FormEdicaoPessoaFisica';
import FormEdicaoPessoaJuridica from './FormEdicaoPessoaJuridica';

import PessoaFisicaService from '../services/PessoaFisicaService';

import '../css/FormEdicaoPerfil.css';
import { PessoaFisica } from '../entities/PessoaFisica';
import { DadosContato } from '../entities/DadosContato';
import { DadosBancario } from '../entities/DadosBancario';
import { Endereco } from '../entities/Endereco';
import { Nacionalidade } from '../entities/Nacionalidade';
import { PessoaJuridica } from '../entities/PessoaJuridica';
import PessoaJuridicaService from '../services/PessoaJuridicaService';


class FormEdicaoPerfil extends Component {

    constructor(props){
        super(props);
        this.state = {
            //tipoPessoa : "juridica",
            pessoaFisicaService : new PessoaFisicaService(),
            pessoaJuridicaService: new PessoaJuridicaService(),
            pessoaFisica : new PessoaFisica(
                new DadosContato(),
                new DadosBancario(),
                new Endereco(),
                "",
                Object,
                Object,
                "",
                "",
                "",
                new Date(),
                "",
                new Nacionalidade()
            ),
            pessoaJuridica: new PessoaJuridica(
                new DadosContato(),
                new DadosBancario(),
                new Endereco(),
                '',
                Object,
                Object,
                '',
                '',
                '',
                ''
            ),
            passwordCheck: "",
            image: null, 
            imageAvatar: null,
            displayIconAvatar: "none"
            //pessoa: null
        };
        //this.handleChangeFisica = this.handleChangeFisica.bind(this);
        //this.handleChangeJuridica = this.handleChangeJuridica.bind(this);
        //this.updatePessoaFisicaFields = this.updatePessoaFisicaFields.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.onImageAvatarChange = this.onImageAvatarChange.bind(this);
        this.setDisplayIconAvatar = this.setDisplayIconAvatar.bind(this);
        this.atualizarDadosUsuario = this.atualizarDadosUsuario.bind(this);
    }

    onImageChange(event){
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
              image: URL.createObjectURL(img)
            });
        }
    }

    onImageAvatarChange(event){
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
              imageAvatar: URL.createObjectURL(img)
            });
        }
    }

    /*componentDidMount(){
        if(localStorage.getItem('tipoPessoa') === "FISICA"){
            this.state.pessoaFisicaService.getPessoaFisicaByLoggedIdUser()
                                            .then(result => {
                                                this.setState({pessoa: result});
                                            }).catch(err => {
                                                alert(err);
                                            });
        }
    }*/

    atualizarDadosUsuario(pessoa){

        pessoa.img_avatar = this.state.imageAvatar;
        pessoa.img_background = this.state.image;
        pessoa.id = localStorage.getItem('idPessoa');

        if(localStorage.getItem('tipoPessoa') === "FISICA"){
            this.state.pessoaFisicaService.updateDadosUsuario(pessoa);
        } else {
            this.state.pessoaJuridicaService.updateDadosUsuario(pessoa);
                                            /*.then(() => {
                                                this.state.pessoaJuridicaService.updateImagesFromUsuario(
                                                    localStorage.getItem('idPessoa', 
                                                    pessoa.img_avatar, 
                                                    pessoa.img_background)
                                                )
                                            });*/
        }
    }

    /*updatePessoaFisicaFields(result){
        this.state.pessoaFisica.dadosBancario.conta = result.dadosBancarios.conta;
        this.state.pessoaFisica.dadosBancario.agencia = result.dadosBancarios.agencia;
        this.state.pessoaFisica.dadosBancario.codigoBanco = result.dadosBancarios.codigoBanco;
        this.state.pessoaFisica.dadosBancario.banco = result.dadosBancarios.banco;
        this.state.pessoaFisica.dadosContato.email = result.dadosContato.email;
        this.state.pessoaFisica.dadosContato.telefone = result.dadosContato.telefone;
        let data = result.dataNascimento.split("-");
        this.state.pessoaFisica.dataNasc = new Date(data[0], data[1], data[2]);
        this.state.pessoaFisica.descricao = result.descricao;
        this.state.pessoaFisica.endereco.cep = result.endereco.cep;
        this.state.pessoaFisica.endereco.rua = result.endereco.rua;
        this.state.pessoaFisica.endereco.numero = result.endereco.numero;
        this.state.pessoaFisica.endereco.complemento = result.endereco.complemento;
        this.state.pessoaFisica.endereco.bairro = result.endereco.bairro;
        this.state.pessoaFisica.endereco.idEstado = result.endereco.idEstado;
        this.state.pessoaFisica.endereco.idCidade = result.endereco.idCidade;
        this.state.image = result.img_background_url;
        this.state.imageAvatar = result.img_avatar_url;
        this.state.pessoaFisica.nacionalidade.descricao = result.nacionalidade.descricao;
        this.state.pessoaFisica.nome = result.nomeCompleto;
        this.state.pessoaFisica.registro = result.registro;
        this.state.pessoaFisica.senha = result.senha;
        this.state.pessoaFisica.sexo = result.sexo;
    }*/

    getFormTipoPessoaEdicaoPerfil(){
        if(localStorage.getItem('tipoPessoa') === "FISICA"){
            return <FormEdicaoPessoaFisica atualizarDadosUsuario={this.atualizarDadosUsuario}/>
        } else {
            return <FormEdicaoPessoaJuridica atualizarDadosUsuario={this.atualizarDadosUsuario}/>
        }
    }

    /*handleChangeFisica(event){
        alert("teste");
        switch (event.target.name) {
            case "nome-completo":
                this.state.pessoaFisica.nome = event.target.value;
                break; 
            case "data-nascimento":
                let date = event.target.value.split("-");
                this.state.pessoaFisica.dataNasc.setFullYear(date[0], date[1], date[2]);
                break;
            case "sexo":
                this.state.pessoaFisica.sexo = event.target.value;
                break;
            case "nacionalidade":
                this.state.pessoaFisica.nacionalidade.descricao = event.target.value;
                break;
            case "registro":
                this.state.pessoaFisica.registro = event.target.value;
                break;
            case "email":
                this.state.pessoaFisica.dadosContato.email = event.target.value;
                break;
            case "telefone":
                this.state.pessoaFisica.dadosContato.telefone = event.target.value;
                break;
            case "cep":
                this.state.pessoaFisica.endereco.cep = event.target.value;
                break;
            case "rua":
                this.state.pessoaFisica.endereco.rua = event.target.value;
                break;
            case "numero":
                this.state.pessoaFisica.endereco.numero = event.target.value;
                break;
            case "complemento":
                this.state.pessoaFisica.endereco.complemento = event.target.value;
                break;
            case "bairro":
                this.state.pessoaFisica.endereco.bairro = event.target.value;
                break;
            case "estado":
                this.changeCidades(event.target.value);
                this.state.pessoaFisica.endereco.idEstado = event.target.value;
                break;
            case "cidade":
                this.state.pessoaFisica.endereco.idCidade = event.target.value;
                break;
            case "password":
                this.state.pessoaFisica.senha = event.target.value;
                break;
            case "password-check":
                this.setState({passwordCheck: event.target.value});
                break;
            case "conta":
                this.state.pessoaFisica.dadosBancario.conta = event.target.value;
                break;
            case "agencia":
                this.state.pessoaFisica.dadosBancario.agencia = event.target.value;
                break;
            case "codigo":
                this.state.pessoaFisica.dadosBancario.codigoBanco = event.target.value;
                break;
            case "banco":
                this.state.pessoaFisica.dadosBancario.banco = event.target.value;
                break;
        }
    }*/

    /*handleChangeJuridica(event){
        switch (event.target.name) {
            case "estado":
                this.changeCidades(event.target.value);
                this.state.pessoaJuridica.endereco.idEstado = event.target.value;
                break;   
            case "registro":
                this.state.pessoaJuridica.registro = event.target.value;
                break;
            case "nome":
                this.state.pessoaJuridica.nome = event.target.value;
                break;
            case "conta":
                this.state.pessoaJuridica.dadosBancario.conta = event.target.value;
                break;
            case "agencia":
                this.state.pessoaJuridica.dadosBancario.agencia = event.target.value;
                break;
            case "codigo":
                this.state.pessoaJuridica.dadosBancario.codigoBanco = event.target.value;
                break;
            case "banco":
                this.state.pessoaJuridica.dadosBancario.banco = event.target.value;
                break;
            case "email":
                this.state.pessoaJuridica.dadosContato.email = event.target.value;
                break;
            case "telefone":
                this.state.pessoaJuridica.dadosContato.telefone = event.target.value;
                break;
            case "cep":
                this.state.pessoaJuridica.endereco.cep = event.target.value;
                break;
            case "rua":
                this.state.pessoaJuridica.endereco.rua = event.target.value;
                break;
            case "numero":
                this.state.pessoaJuridica.endereco.numero = event.target.value;
                break;
            case "complemento":
                this.state.pessoaJuridica.endereco.complemento = event.target.value;
                break;
            case "bairro":
                this.state.pessoaJuridica.endereco.bairro = event.target.value;
                break;
            case "cidade":
                this.state.pessoaJuridica.endereco.idCidade = event.target.value;
                break;
            case "senha":
                this.state.pessoaJuridica.senha = event.target.value;
                break;
            case "senha-check":
                this.setState({passwordCheck: event.target.value});
                break;
        }
    }*/

    setDisplayIconAvatar(){
        if(this.state.displayIconAvatar === "block"){
            this.setState({displayIconAvatar: "none"});
        } else {
            this.setState({displayIconAvatar: "block"});
        }
        
    }

    render(){
        return (
            <div className='container-editar-perfil'>
                <div className='container-bg-photo' style={{backgroundImage: "url(" + this.state.image + ")"}}>
                    <div id="btn-foto-capa">
                        <label for="arquivo" className='btn-ft-capa'>Alterar foto do capa</label>
                        <input type="file" name="capa" id="arquivo" onChange={this.onImageChange}/>
                    </div>
                </div>
                <div className="container-profile-picture">
                    <div className='logo-organizacao' style={{backgroundImage: "url(" + this.state.imageAvatar + ")"}} onMouseEnter={() => this.setDisplayIconAvatar()} onMouseLeave={() => this.setDisplayIconAvatar()}>
                        <img src={camera_white_icon} className="camera-icon-g" style={{display: this.state.displayIconAvatar}}/>
                        <p className="txt-alterar-foto" style={{display: this.state.displayIconAvatar}}>alterar foto de perfil</p>
                        <label for="arquivo-avatar" className="avatar"></label>
                        <input type="file" name="card" id="arquivo-avatar" onChange={this.onImageAvatarChange} />
                    </div>
                </div>
                
                <div className='container-dados-perfil'>
                    {
                        this.getFormTipoPessoaEdicaoPerfil()
                    }
                </div>
                   
                
            </div>
    
        );
    }

}

export default FormEdicaoPerfil;