import React, { Component } from 'react';
import '../css/MenuTop.css';
import { Button } from 'reactstrap';

class MenuTop extends Component {
    render() {
        return (
            <div className="menu-top-body">
                <Button outline color="light">Cadastrar-se</Button>
                <Button outline color="light">Login</Button>
            </div>
        );
    }
}

export default MenuTop;