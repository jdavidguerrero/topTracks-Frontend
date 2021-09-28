import { appFetchLogin, appFetch } from './fetch';
import { backURL } from './host';
import md5 from 'md5'

export const loginUser = async (email, password) => {
    const url = `${backURL}/loginUser`;
    return await appFetchLogin({ url, body: JSON.stringify({email, password: md5(password)}), method: 'POST' });
};

export const RegisterUser = async (username, password, email, metamaskId )  => {
    const url = `${backURL}/user`;
    return await appFetch({ url, body: JSON.stringify({username, name: username, password: md5(password), email, address_eth: metamaskId}), method: 'POST' });
};

export const PaymentConfirmation = async data  => {
    const url = `${backURL}/master/buy`;
    return await appFetch({ url, body: JSON.stringify(data), method: 'POST' });
};