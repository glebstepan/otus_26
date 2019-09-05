import React from 'react';
//import PropTypes from "prop-types";

export default class RegistrationForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            password1: '',
            password2: '',
        }
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeSurname = this.handleChangeSurname.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword1 = this.handleChangePassword1.bind(this)
        this.handleChangePassword2 = this.handleChangePassword2.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    handleChangeName(event){
        this.setState({ name: event.target.value })
    }
    handleChangeSurname(event){
        this.setState({ surname: event.target.value })
    }
    handleChangeEmail(event){
        this.setState({ email: event.target.value })
    }
    handleChangePassword1(event){
        this.setState({ password1: event.target.value })
    }
    handleChangePassword2(event){
        this.setState({ password2: event.target.value })
    }
    submitForm(){
        //debugger
        // console.log(this.props)
        this.props.submit({
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            password1: this.state.password1,
            password2: this.state.password2
        });
    }
    render(){
        return (
            <form>
                <input type="text" className="fadeIn" placeholder="Ваше имя" onChange={this.handleChangeName}/><br/>
                <input type="text" className="fadeIn" placeholder="Ваша фамилия" onChange={this.handleChangeSurname}/><br/>
                <input type="text" className="fadeIn" placeholder="Электронный адрес" onChange={this.handleChangeEmail}/><br/>
                <input type="text" className="fadeIn" placeholder="Пароль" onChange={this.handleChangePassword1}/><br/>
                <input type="text" className="fadeIn" placeholder="Повторите пароль" onChange={this.handleChangePassword2}/><br/>
                <input type="submit" onClick={this.submitForm} value="Зарегистрироваться" />
            </form>
        )
    }
}