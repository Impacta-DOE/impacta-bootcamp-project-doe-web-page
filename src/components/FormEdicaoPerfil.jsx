import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import camera_icon from '../images/camera.png';

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


                {
                    this.getFormTipoPessoaEdicaoPerfil()
                }
            </div>
    
        );
    }

}

export default FormEdicaoPerfil;