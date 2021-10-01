import { Redirect } from 'react-router';

// Gets the logged in user data from local session 
export const getLoggedInUser = () => {
    const user = localStorage.getItem('user');
    if (user)
        return JSON.parse(user);
    return null;
}

//is user is logged in
export const isUserAuthenticated = () => {
    return localStorage.getItem('user') ? true : false
}


export const Logout = (props) => {
    localStorage.removeItem('user');
    localStorage.removeItem('auth');
    props.history.push('/')
}