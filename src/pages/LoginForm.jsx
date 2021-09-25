import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import logo  from './../assets/img/toptracks_logo.png'
import { loginUser } from './../api/httpRequest'

export const LoginForm = ({ props}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(true);

    const handleSubmit = async (event) => {
        event.preventDefault()
        await loginUser(email, password).then( response => {
            const res = response.response
            if(res.statusCode === 200) {
                // localStorage.setItem('user', JSON.stringify(res.response));
                localStorage.setItem('user_dash', JSON.stringify(res.response));
                // localStorage.setItem('authenticated', true);
                props.history.push('/dashboard');
            }
            else {
                alert('Datos incorrectos')
            }
        }).catch( err => alert(err))
    } 

    return (
        <div className="container-fluid">
            <div className="row row--grid">
                <div className="col-12">
                    <div className="sign">
                        <div className="sign__content">
                            <form onSubmit={handleSubmit} className="sign__form">
                                <a href="/" className="sign__logo">
                                    <img src={logo} alt="" />
                                </a>

                                <div className="sign__group">
                                    <input type="text" className="sign__input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                                </div>

                                <div className="sign__group">
                                    <input type="password" className="sign__input" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                                </div>

                                <div className="sign__group sign__group--checkbox">
                                    <input id="remember" name="remember" type="checkbox" checked={check} onChange={e => setCheck(e.target.value)}/>
                                    <label for="remember">Remember Me</label>
                                </div>
                                <button className="sign__btn" type="submit" >Sign in</button>
                                {/* <a className="sign__btn" href="index.html">
                                </a> */}
                                <span className="sign__delimiter">or</span>
                                {/* <span className="sign__text">Don't have an account?<a><Link to="/register">Sign up!</Link></a></span> */}
                                <span className="sign__text">Don't have an account? <a><Link to="/register">Sign up!</Link></a></span>
                                <span className="sign__text"><a href="forgot.html">Forgot password?</a></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}