import React, { Component } from 'react';
import MenuTop from '../components/MenuTop';
import FormEdicaoPerfil from '../components/FormEdicaoPerfil';

class EditarPerfil extends Component {
    render() {
        return (
            <div className="homepage">
               <MenuTop isLoggedIn={true} />
               <FormEdicaoPerfil tipoPessoa="fisica" />
            </div>
        );
    }
}

export default EditarPerfil;