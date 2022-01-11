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
            localStorage.setItem('idPessoa', result.data.idPessoa);
            localStorage.setItem('username', result.data.userName);
            localStorage.setItem('token', result.data.token);
            //localStorage.setItem('tipoPessoa', "juridica");
            //setCookie("username", result.data.userName, { path: "/" });
            //setCookie("token", result.data.userName, { path: "/" });
        });
    }

    async authorize(){
        await axios({
            method: 'post',
            url: this.state.URL + 'authorize',
            data: {
              token: (localStorage.getItem('token')==null) ? '' : localStorage.getItem('token')
            }
        });
    }

}

export default AuthenticationService;