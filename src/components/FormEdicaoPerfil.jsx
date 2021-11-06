import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import camera_icon from '../images/camera.png';
import camera_white_icon from '../images/camera-white.png';

import FormEdicaoPessoaFisica from './FormEdicaoPessoaFisica';
import FormEdicaoPessoaJuridica from './FormEdicaoPessoaJuridica';

import '../css/FormEdicaoPerfil.css';


class FormEdicaoPerfil extends Component {

    constructor(props){
        super(props);
        this.state = {tipoPessoa : "fisica"};
    }

    getFormTipoPessoaEdicaoPerfil(){
        if(this.state.tipoPessoa === "fisica"){
            return <FormEdicaoPessoaFisica />
        } else {
            return <FormEdicaoPessoaJuridica />
        }
    }

    render(){
        return (
            <div className='container-editar-perfil'>
                <div className='container-bg-photo'>
                    <Button className='btn-ft-capa' variant="secondary"><img src={camera_icon} className="camera-icon"/> Adicionar foto de capa</Button>
                </div>
                <div className="container-profile-picture">
                    <div className='logo-organizacao'>
                        <img src={camera_white_icon} className="camera-icon-g"/>
                        <p className="txt-alterar-foto">alterar foto de perfil</p>
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