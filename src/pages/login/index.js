import React, {Component} from 'react';

class Login extends Component{
    render(){
        return (
            <div className="login">
                <form>
                    <label>Login</label>
                    <input type="text" placeholder=""/>
                    <label>Senha</label>
                    <input type="password" placeholder=""/>
                    
                </form>
            </div>
        );
    }

    login(){
        
    }
}

export default Login;