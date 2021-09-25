import React from 'react';
import { Redirect } from 'react-router';

const Logout = () => {
    localStorage.removeItem('user_dash');
    localStorage.removeItem('authenticated');
    return (
        <Redirect to='/' />
    )
}

export default Logout;