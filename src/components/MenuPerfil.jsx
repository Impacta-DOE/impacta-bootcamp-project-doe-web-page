import React, { Component } from 'react';
import { Redirect } from 'react-router';
import '../css/MenuPerfil.css';

class MenuPerfil extends Component {

    constructor(props){
        super(props);
        this.state = {toogleMenu: false, redirect: false, page: "/"} 
    }

    showMenuPerfil(){
        this.setState({toogleMenu: !this.state.toogleMenu});
    }

    chamaProximaTela(tela){
        this.setState({
            redirect: true,
            page : tela
        })
    }

    render() {
        if(this.state.redirect){
            this.setState({redirect : false});
            return <Redirect to={this.state.page} />
        }else{
            if(this.state.toogleMenu){
                return (
                    <div>
                        <input type="button" value="DC" className="perfil" onClick={() => this.showMenuPerfil()}/>
                        <div className="menu-perfil">
                            <div className="menu-perfil-opcao" onClick={() => this.chamaProximaTela("/editar-perfil")}> 
                                <span>editar dados do perfil</span>
                            </div>
                            <div className="menu-perfil-opcao-end"> 
                                <span>logout</span>
                            </div>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div>
                        <input type="button" value="DC" className="perfil" onClick={() => this.showMenuPerfil()}/>
                    </div>
                );
            }
        }
    }
}

export default MenuPerfil;