import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import MenuModal from './MenuModal';

import '../css/MenuTop.css';
import logo from '../images/logo.png';
import campanha from '../images/campanha.png';
import menu_hamburguer from '../images/hamburguer.png';


class MenuTop extends React.Component {

    constructor(props){
        super(props);
        this.state = {isLoggedIn: true, toogleMenu: false};
    }

    showModalMenu(){
        if(this.state.toogleMenu){
            this.setState({toogleMenu: false});
        }else {
            this.setState({toogleMenu: true});
        }
    }

    render(){
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
                                <input type="button" value="DC" className="perfil"/>
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
                                <input type="button" value="cadastrar-se" className="btn-cadastrar"/>
                                <input type="button" value="login" className="btn-login"/>
                            </ReactBootstrap.Nav>
                        </ReactBootstrap.Container>
                    </ReactBootstrap.Navbar>  
                    <MenuModal />
                </div>
            );
        }
    }
}

export default MenuTop;