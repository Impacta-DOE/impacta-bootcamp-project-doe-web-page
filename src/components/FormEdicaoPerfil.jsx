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


class FormEdicaoPerfil extends Component {

    constructor(props){
        super(props);
        this.state = {
            tipoPessoa : "juridica",
            pessoaFisicaService : new PessoaFisicaService(),
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
        };
        this.handleChangeFisica = this.handleChangeFisica.bind(this);
        this.handleChangeJuridica = this.handleChangeJuridica.bind(this);
        this.updatePessoaFisicaFields = this.updatePessoaFisicaFields.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.onImageAvatarChange = this.onImageAvatarChange.bind(this);
        this.setDisplayIconAvatar = this.setDisplayIconAvatar.bind(this);
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

    componentDidMount(){
        if(this.state.tipoPessoa === "fisica"){
            this.updatePessoaFisicaFields();
        } else {

        }
    }

    updatePessoaFisicaFields(){
        this.state.pessoaFisicaService.getPessoaFisicaByLoggedIdUser()
                                        .then(result => {
                                            console.log(result);
                                        }).catch(err => {
                                            alert(err);
                                        });
    }

    getFormTipoPessoaEdicaoPerfil(){
        if(this.state.tipoPessoa === "fisica"){
            return <FormEdicaoPessoaFisica handleChange={this.handleChangeFisica}/>
        } else {
            return <FormEdicaoPessoaJuridica handleChange={this.handleChangeJuridica}/>
        }
    }

    handleChangeFisica(event){
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
    }

    handleChangeJuridica(event){
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
    }

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