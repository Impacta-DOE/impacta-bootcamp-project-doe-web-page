import { Component } from 'react';
import axios from 'axios';

class AuthenticationService extends Component {

    constructor(props){
        super(props);
        this.state = {URL : 'https://impacta-doe-auth.herokuapp.com/auth/'};
    }

    async login(user, password){
        await axios({
            method: 'post',
            url: this.state.URL + 'login',
            data: {
              username: user,
              password: password
            }
        }).then(result => {
            console.log(result);
            localStorage.setItem('username', result.data.userName);
            localStorage.setItem('token', result.data.token);
            console.log(localStorage);
        });
    }

}

export default AuthenticationService;