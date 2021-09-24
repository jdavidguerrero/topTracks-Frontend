import React, { useState } from 'react';
import { Route, Link} from 'react-router-dom';
import logo  from './../assets/img/toptracks_logo.png'
import { loginUser } from './../api/httpRequest'

export const LoginForm = ({ props}) => {
    // Declaración de una variable de estado que llamaremos "count"
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(true);

    const handleSubmit = async (event) => {
        event.preventDefault()
        await loginUser(email, password).then( response => {
            console.log(response.response);
            const res = response.response
            console.log(res);
            if(res.statusCode === 200) {
                // const user = response.data.user
                // localStorage.setItem('authorization', JSON.stringify(response.data.authorization).replace(/["']/g, ""))
                localStorage.setItem('user', JSON.stringify(res.response));
                localStorage.setItem('authenticated', true);
                // this.setState({submitting: false})
                props.history.push('/dashboard');
            }
            else {
                alert('Datos incorrectos')
            }
        }).catch( err => alert(err))
    } 

    return (
        <div class="container-fluid">
            <div class="row row--grid">
                <div class="col-12">
                    <div class="sign">
                        <div class="sign__content">
                            <form onSubmit={handleSubmit} class="sign__form">
                                <a href="/" class="sign__logo">
                                    <img src={logo} alt="" />
                                </a>

                                <div class="sign__group">
                                    <input type="text" class="sign__input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                                </div>

                                <div class="sign__group">
                                    <input type="password" class="sign__input" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                                </div>

                                <div class="sign__group sign__group--checkbox">
                                    <input id="remember" name="remember" type="checkbox" checked={check} onChange={e => setCheck(e.target.value)}/>
                                    <label for="remember">Remember Me</label>
                                </div>
                                <button class="sign__btn" type="submit" >Sign in</button>
                                {/* <a class="sign__btn" href="index.html">
                                </a> */}
                                <span class="sign__delimiter">or</span>
                                {/* <span class="sign__text">Don't have an account?<a><Link to="/register">Sign up!</Link></a></span> */}
                                <span class="sign__text">Don't have an account? <a><Link to="/register">Sign up!</Link></a></span>
                                <span class="sign__text"><a href="forgot.html">Forgot password?</a></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}