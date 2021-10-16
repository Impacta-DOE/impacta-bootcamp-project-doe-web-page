import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { Redirect } from 'react-router';

import MenuModal from './MenuModal';

import '../css/MenuTop.css';
import logo from '../images/logo.png';
import campanha from '../images/campanha.png';
import menu_hamburguer from '../images/hamburguer.png';
import MenuPerfil from './MenuPerfil';


class MenuTop extends React.Component {

    constructor(props){
        super(props);
        this.state = {isLoggedIn: this.props.isLoggedIn, toogleMenu: false, redirect: false};
    }

    showModalMenu(){
        this.setState({toogleMenu: !this.state.toogleMenu});
    }

    chamaTelaCadastro(){
        this.setState({
            redirect: true
        })
    }

    render(){
        if(this.state.redirect){
            return <Redirect to="/cadastro" />
        }
        const isLoggedIn = this.state.isLoggedIn;
        if(isLoggedIn){
            return (
                <div>
                    <ReactBootstrap.Navbar collapseOnSelect expand="xxl" variant="default" className="menu-top-body">
                        <ReactBootstrap.Container fluid>
                            <ReactBootstrap.Nav>
                                <img src={menu_hamburguer} className="menu-hamburguer" onClick={() => this.showModalMenu()}/>
                                <img src={logo} className="logo"/>
                            </ReactBootstrap.Nav>
                            <ReactBootstrap.Nav>
                                <img src={campanha} className="campanha"/>
                                <MenuPerfil />
                            </ReactBootstrap.Nav>
                        </ReactBootstrap.Container>
                    </ReactBootstrap.Navbar>
                    <MenuModal show={this.state.toogleMenu}/>
                </div>
            );
        } else {
            return (
                <div>
                    <ReactBootstrap.Navbar collapseOnSelect expand="xxl" variant="default" className="menu-top-body">
                        <ReactBootstrap.Container fluid>
                            <img src={logo} className="logo"/>
                            <ReactBootstrap.Nav>
                                <input type="button" value="cadastrar-se" className="btn-cadastrar" onClick={() => this.chamaTelaCadastro()}/>
                                <input type="button" value="login" className="btn-login"/>
                            </ReactBootstrap.Nav>
                        </ReactBootstrap.Container>
                    </ReactBootstrap.Navbar>
                </div>
            );
        }
    }
}

export default MenuTop;