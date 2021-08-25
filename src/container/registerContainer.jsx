import React, { Component } from 'react';
import { Route, withRouter, Link} from 'react-router-dom';
import logo  from './../assets/img/toptracks_logo.png'

class RegisterContainer extends Component {

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
								<a class="sign__logo">
									<img src={logo} alt=""/>
								</a>

								<div class="sign__group">
									<input type="text" class="sign__input" placeholder="Name"/>
								</div>
								<div class="sign__group">
									<input type="text" class="sign__input" placeholder="Metamask ID"/>
								</div>

								<div class="sign__group">
									<input type="text" class="sign__input" placeholder="Email"/>
								</div>

								<div class="sign__group">
									<input type="password" class="sign__input" placeholder="Password"/>
								</div>
								

								<div class="sign__group sign__group--checkbox">
									<input id="remember" name="remember" type="checkbox" checked="checked"/>
									<label for="remember">I agree to the <a href="privacy.html">Privacy Policy</a></label>
								</div>
								
								<a class="sign__btn"><button class="sign__btn" type="button">Sign up</button></a>
								

								<span class="sign__delimiter">or</span>

								<span class="sign__text">Already have an account? <a><Link to= "/">Sign in!</Link></a></span>
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

export default withRouter(RegisterContainer);