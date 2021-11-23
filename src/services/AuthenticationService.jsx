import { Component } from 'react';
import { useCookies } from "react-cookie";
import axios from 'axios';

class AuthenticationService extends Component {

    constructor(props){
        super(props);
        this.state = {URL : 'https://impacta-doe-auth.herokuapp.com/auth/'};
        
    }

    async login(user, password){

        //let [cookies, setCookie] = useCookies(["user"]);
        await axios({
            method: 'post',
            url: this.state.URL + 'login',
            data: {
              username: user,
              password: password
            }
        }).then(result => {
            localStorage.setItem('username', result.data.userName);
            localStorage.setItem('token', result.data.token);
            //setCookie("username", result.data.userName, { path: "/" });
            //setCookie("token", result.data.userName, { path: "/" });
        });
    }

    async authorize(token){
        await axios({
            method: 'post',
            url: this.state.URL + 'authorize',
            data: {
              token: token
            }
        }).then(result => console.log(result));
    }

}

export default AuthenticationService;