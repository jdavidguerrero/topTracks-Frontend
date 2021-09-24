import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './../assets/img/toptracks_logo.png'
import { RegisterUser } from './../api/httpRequest'

export const RegisterForm = () => {
    // Declaración de una variable de estado que llamaremos "count"
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [metamaskId, setId] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault()
        await RegisterUser(name, password, email, metamaskId).then(response => {
            console.log(response);
            if (response.statusCode === 200) {
                console.log(response);
                // const user = response.data.user
                // localStorage.setItem('authorization', JSON.stringify(response.data.authorization).replace(/["']/g, ""))
                // localStorage.setItem('user', JSON.stringify(user));
                // localStorage.setItem('authenticated', true);
                // this.setState({submitting: false})
                this.props.history.push('/');
            }
            else {
                alert('Error en el servidor')
            }
        }).catch(err => alert(err))
    }

    return (
        <div class="container-fluid">
            <div class="row row--grid">
                <div class="col-12">
                    <div class="sign">
                        <div class="sign__content">
                            <form onSubmit={handleSubmit} class="sign__form">
                                <a class="sign__logo">
                                    <img src={logo} alt="" />
                                </a>
                                <div class="sign__group">
                                    <input type="text" class="sign__input" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                                </div>
                                <div class="sign__group">
                                    <input type="text" class="sign__input" placeholder="Metamask ID" value={metamaskId} onChange={e => setId(e.target.value)}/>
                                </div>
                                <div class="sign__group">
                                    <input type="text" class="sign__input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                                </div>
                                <div class="sign__group">
                                    <input type="password" class="sign__input" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                                </div>
                                {/* <div class="sign__group sign__group--checkbox">
                                    <input id="remember" name="remember" type="checkbox" checked="checked" />
                                    <label for="remember">I agree to the <a href="privacy.html">Privacy Policy</a></label>
                                </div> */}
                                <a class="sign__btn"><button class="sign__btn" type="submit">Sign up</button></a>
                                <span class="sign__delimiter">or</span>
                                <span class="sign__text">Already have an account? <a><Link to="/">Sign in!</Link></a></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}