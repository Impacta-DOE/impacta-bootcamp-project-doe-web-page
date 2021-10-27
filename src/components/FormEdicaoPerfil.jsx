import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import FormEdicaoPessoaFisica from './FormEdicaoPessoaFisica';
import FormEdicaoPessoaJuridica from './FormEdicaoPessoaJuridica';


class FormEdicaoPerfil extends Component {

    constructor(props){
        super(props);
    }

    getFormTipoPessoa(){
        if(this.props.tipoPessoa === "fisica"){
            return <FormEdicaoPessoaFisica />
        } else {
            return <FormEdicaoPessoaJuridica />
        }
    }

    render(){
        return (
            <div>
                
            </div>

        );
    }

}

export default FormEdicaoPerfil;