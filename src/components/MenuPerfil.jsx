import React, { Component } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import { Redirect } from 'react-router';
import '../css/MenuPerfil.css';
import axios from 'axios';

class MenuPerfil extends Component {

    constructor(props){
        super(props);
        this.state = {toogleMenu: false, redirect: false, page: "/", iniciais: ""} 
        this.gerarIniciais = this.gerarIniciais.bind(this);
    }

    componentDidMount(){
        this.gerarIniciais();
    }

    gerarIniciais(){
        if(localStorage.getItem('nomePessoa') == null){
            let nomes = "";
            axios({
                method: 'get',
                url: 'https://impacta-doe-api.herokuapp.com/pessoa/usuario/' + localStorage.getItem('idUsuario') + '/pessoa',
                data: {}
            })
            .then((resultado) => {
                localStorage.setItem('nomePessoa', (localStorage.getItem('tipoPessoa') === "FISICA") ? resultado.data.nomeCompleto : resultado.data.razaoSocial);
                nomes = localStorage.getItem('nomePessoa').split(" ");
                let iniciais = (nomes.length > 1) ? nomes[0].charAt(0).toUpperCase() + "" + nomes[1].charAt(0).toUpperCase() : nomes[0].charAt(0).toUpperCase();
                this.setState({iniciais});
            });
        } else {
            let nomes = "";
            nomes = localStorage.getItem('nomePessoa').split(" ");
            let iniciais = (nomes.length > 1) ? nomes[0].charAt(0).toUpperCase() + "" + nomes[1].charAt(0).toUpperCase() : nomes[0].charAt(0).toUpperCase();
            this.setState({iniciais});
        }
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

    logout(){
        localStorage.clear();
        window.location.reload();
    }

    render() {
        if(this.state.redirect){
            this.setState({redirect : false});
            return <Redirect to={this.state.page} />
        }else{
            if(this.state.toogleMenu){
                return (
                    <div>
                        <input type="button" value={this.state.iniciais} className="perfil" onClick={() => this.showMenuPerfil()}/>
                        <div className="menu-perfil">
                            <div className="menu-perfil-opcao" onClick={() => this.chamaProximaTela("/editar-perfil")}> 
                                <span>editar dados do perfil</span>
                            </div>
                            <div className="menu-perfil-opcao-end"onClick={() => this.logout()}> 
                                <span>logout</span>
                            </div>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div>
                        <input type="button" value={this.state.iniciais} className="perfil" onClick={() => this.showMenuPerfil()}/>
                    </div>
                );
            }
        }
    }
}

export default MenuPerfil;