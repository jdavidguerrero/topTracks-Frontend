import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { RegisterForm } from './../pages/RegisterForm'

class RegisterContainer extends Component {
    render(){
        return(
			<RegisterForm/>
        );
    }
}

export default withRouter(RegisterContainer);