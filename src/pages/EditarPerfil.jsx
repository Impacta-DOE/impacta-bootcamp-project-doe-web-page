import React, { Component } from 'react';
import MenuTop from '../components/MenuTop';
import FormEdicaoPerfil from '../components/FormEdicaoPerfil';
import AuthenticationService from '../services/AuthenticationService';

class EditarPerfil extends Component {

    constructor(props){
        super(props);
        this.state = {authService : new AuthenticationService()};
    }

    componentWillMount(){
        document.title = "Editar Perfil";
        this.state.authService.authorize();
    }

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