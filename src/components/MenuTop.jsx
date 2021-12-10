import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { Redirect } from 'react-router';

import MenuModal from './MenuModal';
import LoginModal from './LoginModal';

import '../css/MenuTop.css';
import logo from '../images/logo.png';
import campanha from '../images/campanha.png';
import menu_hamburguer from '../images/hamburguer.png';
import MenuPerfil from './MenuPerfil';


class MenuTop extends React.Component {

    constructor(props){
        super(props);
        this.state = {isLoggedIn: localStorage.getItem("isLoggedIn"), toogleMenu: false, toogleLogin : false, redirect: false, page: "/"};
        this.showModalLogin = this.showModalLogin.bind(this);
        this.showModalMenu = this.showModalMenu.bind(this);
    }

    showModalMenu(){
        this.setState({toogleMenu: !this.state.toogleMenu});
        document.body.style.overflow = (this.state.toogleMenu) ? "auto" : "hidden";
    }

    showModalLogin(){
        this.setState({toogleLogin : !this.state.toogleLogin});
        document.body.style.overflow = (this.state.toogleLogin) ? "auto" : "hidden";
    }

    chamaProximaTela(tela){
        this.setState({
            redirect: true,
            page : tela
        })
    }

    render(){
        if(this.state.redirect){
            this.setState({redirect : false});
            return <Redirect to={this.state.page} />
        }
        if(this.state.isLoggedIn){
            return (
                <div>
                    <ReactBootstrap.Navbar collapseOnSelect expand="xxl" variant="default" className="menu-top-body">
                        <ReactBootstrap.Container fluid>
                            <ReactBootstrap.Nav>
                                <img src={menu_hamburguer} className="menu-hamburguer" onClick={() => this.showModalMenu()}/>
                                <img src={logo} className="logo" onClick={() => this.chamaProximaTela("/")}/>
                            </ReactBootstrap.Nav>
                            <ReactBootstrap.Nav>
                                <img src={campanha} className="campanha"/>
                                <MenuPerfil />
                            </ReactBootstrap.Nav>
                        </ReactBootstrap.Container>
                    </ReactBootstrap.Navbar>
                    <MenuModal show={this.state.toogleMenu} showModalMenu={this.showModalMenu}/>
                </div>
            );
        } else {
            return (
                <div>
                    <ReactBootstrap.Navbar collapseOnSelect expand="xxl" variant="default" className="menu-top-body">
                        <ReactBootstrap.Container fluid>
                            <img src={logo} className="logo" onClick={() => this.chamaProximaTela("/")}/>
                            <ReactBootstrap.Nav>
                                {
                                    (this.props.showBtnCadastrar) ? <input type="button" value="cadastrar-se" className="btn-cadastrar" onClick={() => this.chamaProximaTela("/cadastro")}/> : null
                                }
                                {
                                    (this.props.showBtnLogin) ? <input type="button" value="login" className="btn-login" onClick={() => this.showModalLogin()}/> : null
                                }
                            </ReactBootstrap.Nav>
                        </ReactBootstrap.Container>
                    </ReactBootstrap.Navbar>
                    <LoginModal show={this.state.toogleLogin} toogleLogin={this.showModalLogin}/>
                </div>
            );
        }
    }
}

export default MenuTop;