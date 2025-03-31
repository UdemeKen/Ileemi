import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const baseURL = "https://customerlookup.ibedc.com:7443/api";
// const baseURL = process.env.APP_BASE_URL as string;
// const appSecret = "XilsL330289402YUO902AYIOkjsk23";
// const appSecret = process.env.APP_SECRET_KEY as string;
// const appToken = "12849927830994ANWIU@jskjsjCA";
// const appToken = process.env.APP_TOKEN as string;

const axiosClient: AxiosInstance = axios.create({
    baseURL,
});

axiosClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        config.headers.set('Authorization', `Token ${localStorage.getItem('TOKEN')}`);
        // config.headers.set('Authorization', `Bearer ${localStorage.getItem('TOKEN')}`);
        // config.headers.set('Accept', 'application/json');
        // config.headers.set('appsecret', appSecret);
        // config.headers.set('apptoken', appToken);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            return error;
        }
        throw error;
    }
);

export default axiosClient;
