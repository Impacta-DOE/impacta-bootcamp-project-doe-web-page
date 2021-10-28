import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import FormEdicaoPessoaFisica from './FormEdicaoPessoaFisica';
import FormEdicaoPessoaJuridica from './FormEdicaoPessoaJuridica';


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
            <div>
                {
                    this.getFormTipoPessoaEdicaoPerfil()
                }
            </div>
    
        );
    }

}

export default FormEdicaoPerfil;