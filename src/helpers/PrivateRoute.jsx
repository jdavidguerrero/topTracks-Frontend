import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isUserAuthenticated } from './../api/authUtil';


export const PrivateRoute= ({ component: Component, ...rest})=> (
    <Route 
        {...rest}
        render={props =>
            isUserAuthenticated() ? (
                <Component {...props}/>
            ):(
                <Redirect to= {{  pathname: "/", state: {from: props.location}}}/>
            )
        }
    />
);