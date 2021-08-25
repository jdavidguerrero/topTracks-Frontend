import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import auth from './../api/auth';

export const PrivateRoute= ({ component: Component, ...rest})=> (
    <Route 
        {...rest}
        render={props =>
            auth.getUser('user') ? (
                <Component {...props}/>
            ):(
                <Redirect to= {{  pathname: "/", state: {from: props.location}}}/>
            )
        }
    />
);