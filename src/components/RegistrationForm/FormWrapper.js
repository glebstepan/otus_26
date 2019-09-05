import React from 'react';
import RegistrationForm from './RegistrationForm'

export default class FormWrapper extends React.Component {
    constructor(props){
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }
    submitForm(eventData){
        console.log(eventData)
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(eventData)
        })
    }
    render(){
        return (
            <div id="formContent" className="my-5">
                <RegistrationForm submit={this.submitForm}></RegistrationForm>
            </div>
        )
    }
}