import { Component } from "react";
import React from 'react';
import axios from 'axios';

import Registration from "../component/Registration/Registration"


class RegistrationContainer extends Component{

    handleRegistration =(e) =>{

        var user = {
            id:"10",
            name:"hemkar",
            email: "abc@gmail.com",
            password:"dummy",
            phoneNo:"12345",
            dob:"12345"
        }
//debugger
    //     axios.post('http://localhost:8080/user', user).then(function(response) {
    //     e.setState({
    //       messageFromServer: response.data
    //     });
    //   });
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:8080/user',
        //     headers: {'Content-Type': 'application/json'},
        //     data: user
           
        //   });
        axios({
            method: 'post',
            url: 'http://localhost:8080/user',
            data: user
            })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
     
    }
    render() {
        //const {props:{handleRegistration}}=this;
        return <Registration
        handleRegistration={this.handleRegistration}
        />
       
    }

}

export default RegistrationContainer;