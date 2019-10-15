import React from 'react';
// import PropTypes from "prop-types";

export default class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleChange(this.handleChange.bind(this))
    }
    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    submitForm(){
        //debugger
        //console.log(this.state.username)
        this.props.submit({
            email: this.state.email,
            password1: this.state.password
        });
    }
    render(){
        return (
            <div className="form">
                <input name="email" placeholder="Электронный адрес" onChange={this.handleChange}/><br/>
                <input name="password" placeholder="Пароль" onChange={this.handleChange}/><br/>
                <br/>
                <button onClick={this.submitForm}>Войти</button>
            </div>
        )
    }
}