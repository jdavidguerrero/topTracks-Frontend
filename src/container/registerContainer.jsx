import React, { Component } from 'react';
import { Route, withRouter, Link} from 'react-router-dom';
import logo  from './../assets/img/toptracks_logo.png'
import { RegisterForm } from './../pages/RegisterForm'

class RegisterContainer extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
			<RegisterForm/>
        );
    }
}

export default withRouter(RegisterContainer);