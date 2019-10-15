import React from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

export default class FormWrapper extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loginForm: null,
            registerForm: null,
            loginLink: null,
            registerLink: null,

        }
        this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount() {
        this.state({
            loginForm: document.querySelector(".login-form"),
            registerForm: document.querySelector(".register-form"),
            loginLink: document.querySelector(".login-link"),
            registerLink: document.querySelector(".register-link"),
        })
    }

       OpenRegister = () => {
        this.state.registerForm.style.display = 'block';
        this.state.loginForm.style.display = 'none';
        this.state.loginLink.classList.add('inactive');
        this.state.registerLink.classList.remove('inactive');
    };

    OpenLogin = () => {
        this.state.registerForm.style.display = 'none';
        this.state.loginForm.style.display = 'block';
        this.state.loginLink.classList.remove('inactive');
        this.state.registerLink.classList.add('inactive');
    };

    submitForm(eventData){
        console.log(eventData);
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(eventData)
        })
    }

     render(){
        return (
            <div id="formContent" className="my-5">
                <div className="row">
                    <div className="col-6 my-5 login-link" onClick={this.OpenLogin}>Войти</div>
                    <div className="col-6 my-5 register-link inactive" onClick={this.OpenRegister}>Зарегистрироваться</div>
                </div>
                <div className="login-form">
                    <LoginForm submit={this.submitForm}></LoginForm>
                </div>
                <div className="register-form">
                    <RegistrationForm submit={this.submitForm}></RegistrationForm>
                </div>
            </div>
        )
    }
}