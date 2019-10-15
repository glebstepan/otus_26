import React from 'react';
//import PropTypes from "prop-types";

export default class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            password1: '',
            password2: '',
        };
        this.handleChange(this.handleChange.bind(this));
    };

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    };

    submitForm() {
        //debugger
        //console.log(this.state.username)
        this.props.submit({
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            password1: this.state.password1,
            password2: this.state.password2
        })
    };

    render() {
        return (
            <div className="form">
                <input name="name" placeholder="Ваше имя" onChange={this.handleChange}/><br/>
                <input name="surname" placeholder="Ваша фамилия" onChange={this.handleChange}/><br/>
                <input name="email" placeholder="Электронный адрес" onChange={this.handleChange}/><br/>
                <input name="password1" placeholder="Пароль" onChange={this.handleChange}/><br/>
                <input name="password2" placeholder="Повторите пароль" onChange={this.handleChange}/><br/>
                <br/>

                <button onClick={this.submitForm}>Зарегистрироваться</button>
            </div>
        )
    }
}