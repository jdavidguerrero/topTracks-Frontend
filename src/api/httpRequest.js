import { appFetchLogin, appFetch } from './fetch';
import host from './host';
import md5 from 'md5'

export const loginUser = async (email, password) => {
    const url = `${host.backURL}/loginUser`;
    return await appFetchLogin({ url, body: JSON.stringify({email, password: md5(password)}), method: 'POST' });
};

export const RegisterUser = async (username, password, email, metamaskId )  => {
    const url = `${host.backURL}/user`;
    return await appFetch({ url, body: JSON.stringify({username, name: username, password: md5(password), email, address_eth: metamaskId}), method: 'POST' });
};