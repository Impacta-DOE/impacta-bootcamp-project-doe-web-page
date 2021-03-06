import React, { Component } from 'react';
import FormCadastro from '../components/FormCadastro';
import MenuTop from '../components/MenuTop';

class TelaCadastro extends Component {

    componentDidMount(){
        document.title = "Cadastre-se";
    }

    render() {
        return (
            <div>
                <MenuTop showBtnCadastrar={false} showBtnLogin/>
                <FormCadastro />
            </div>
        );
    }
}

export default TelaCadastro;