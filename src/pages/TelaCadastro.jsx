import React, { Component } from 'react';
import FormCadastro from '../components/FormCadastro';
import MenuTop from '../components/MenuTop';

class TelaCadastro extends Component {
    render() {
        return (
            <div>
                <MenuTop isLoggedIn={false}/>
                <FormCadastro />
            </div>
        );
    }
}

export default TelaCadastro;