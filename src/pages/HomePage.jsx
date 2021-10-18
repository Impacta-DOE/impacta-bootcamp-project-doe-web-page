import React, { Component } from 'react';
import MenuTop from '../components/MenuTop';
import '../css/HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
                <MenuTop isLoggedIn={false} showBtnCadastrar showBtnLogin/>
                <span>Homepage</span>
            </div>
        );
    }
}

export default HomePage;