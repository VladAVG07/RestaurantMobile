// AuthService.js
import axios from 'axios';
import { login } from '../api/ApiAxios';

export const loginUser = async (loginObject) => {
    try {
        const response = await login(loginObject);
        const { success, data, code, message } = response.data;
        if (success) {
            return data;
        }
        return { error: message };
    } catch (err) {
        console.log(err);
        return { error: 'An error occurred' };
    }
};
