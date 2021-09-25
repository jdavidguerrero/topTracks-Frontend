import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            if (response.statusCode === 200) {
                this.props.history.push('/');
            }
            else {
                alert('Error en el servidor')
            }
        }).catch(err => alert(err))
    }

    return (
        <div className="container-fluid">
            <div className="row row--grid">
                <div className="col-12">
                    <div className="sign">
                        <div className="sign__content">
                            <form onSubmit={handleSubmit} className="sign__form">
                                <a className="sign__logo">
                                    <img src={logo} alt="" />
                                </a>
                                <div className="sign__group">
                                    <input type="text" className="sign__input" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                                </div>
                                <div className="sign__group">
                                    <input type="text" className="sign__input" placeholder="Metamask ID" value={metamaskId} onChange={e => setId(e.target.value)}/>
                                </div>
                                <div className="sign__group">
                                    <input type="text" className="sign__input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                                </div>
                                <div className="sign__group">
                                    <input type="password" className="sign__input" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                                </div>
                                {/* <div className="sign__group sign__group--checkbox">
                                    <input id="remember" name="remember" type="checkbox" checked="checked" />
                                    <label for="remember">I agree to the <a href="privacy.html">Privacy Policy</a></label>
                                </div> */}
                                <a className="sign__btn"><button className="sign__btn" type="submit">Sign up</button></a>
                                <span className="sign__delimiter">or</span>
                                <span className="sign__text">Already have an account? <a><Link to="/">Sign in!</Link></a></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}