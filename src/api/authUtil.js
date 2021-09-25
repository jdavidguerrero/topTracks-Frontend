// Gets the logged in user data from local session 
export const getLoggedInUser = () => {
    const user = localStorage.getItem('user_dash');
    if (user)
        return JSON.parse(user);
    return null;
}

//is user is logged in
export const isUserAuthenticated = () => {
    // return getLoggedInUser()
    return localStorage.getItem('authenticated') ? true : false
    // return getLoggedInUser() !== null;
}

