import React, { Component } from 'react';
import MenuTop from '../components/MenuTop';
import FormEdicaoPerfil from '../components/FormEdicaoPerfil';

class EditarPerfil extends Component {
    render() {
        return (
            <div className="homepage">
               <MenuTop />
               <FormEdicaoPerfil tipoPessoa="fisica" />
            </div>
        );
    }
}

export default EditarPerfil;