import React, { Component } from 'react';
import '../css/MenuPerfil.css';

class MenuPerfil extends Component {

    constructor(props){
        super(props);
        this.state = {toogleMenu: false}
    }

    showMenuPerfil(){
        this.setState({toogleMenu: !this.state.toogleMenu});
    }

    render() {
        if(this.state.toogleMenu){
            return (
                <div>
                    <input type="button" value="DC" className="perfil" onClick={() => this.showMenuPerfil()}/>
                    <div className="menu-perfil">
                        <div className="menu-perfil-opcao"> 
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

export default MenuPerfil;