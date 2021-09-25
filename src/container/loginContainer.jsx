import React, { Component } from 'react';
import { Route, withRouter, Link} from 'react-router-dom';
import { LoginForm } from './../pages/LoginForm'

class LoginContainer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
			<LoginForm props={this.props}/>
        );
    }
}

export default withRouter(LoginContainer);