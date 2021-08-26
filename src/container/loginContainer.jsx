import React, { Component } from 'react';
import { Route, withRouter, Link} from 'react-router-dom';
import logo  from './../assets/img/toptracks_logo.png'

class LoginContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
        };  
        

    }


    render(){

        return(
			<>
        <div class="container-fluid">
			<div class="row row--grid">
				<div class="col-12">
					<div class="sign">
						<div class="sign__content">
							<form action="#" class="sign__form">
								<a href="index.html" class="sign__logo">
									<img src={logo}alt=""/>
								</a>

								<div class="sign__group">
									<input type="text" class="sign__input" placeholder="Email"/>
								</div>

								<div class="sign__group">
									<input type="password" class="sign__input" placeholder="Password"/>
								</div>

								<div class="sign__group sign__group--checkbox">
									<input id="remember" name="remember" type="checkbox" checked="checked"/>
									<label for="remember">Remember Me</label>
								</div>
								<a class="sign__btn"  href="index.html">
								<button class="sign__btn" type="button"><Link to="/dashboard">Sign in</Link></button>
								</a>
								<span class="sign__delimiter">or</span>
								<span class="sign__text">Don't have an account?<a><Link to="/register">Sign up!</Link></a></span>
								<span class="sign__text"><a href="forgot.html">Forgot password?</a></span>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
        </>
        );
    }
}

export default withRouter(LoginContainer);