import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { LoginForm } from './../pages/LoginForm'

class LoginContainer extends Component {
    render(){
        return(
			<LoginForm props={this.props}/>
        );
    }
}

export default withRouter(LoginContainer);