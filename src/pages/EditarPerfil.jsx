import React, { Component } from 'react';
import { Redirect } from 'react-router';
import MenuTop from '../components/MenuTop';
import FormEdicaoPerfil from '../components/FormEdicaoPerfil';
import AuthenticationService from '../services/AuthenticationService';

class EditarPerfil extends Component {

    constructor(props){
        super(props);
        this.state = {authService : new AuthenticationService(), redirect: false, page: "/"};
    }

    componentWillMount(){
        document.title = "Editar Perfil";
        this.state.authService.authorize().catch(() => this.setState({redirect : true}));
    }

    render() {
        if(this.state.redirect){
            return <Redirect to={this.state.page} />
        }
        return (
            <div className="homepage">
               <MenuTop />
               <FormEdicaoPerfil tipoPessoa="fisica" />
            </div>
        );
    }
}

export default EditarPerfil;