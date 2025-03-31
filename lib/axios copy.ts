import axios, { AxiosInstance } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const baseURL = "https://customerlookup.ibedc.com:7443/api";

const axiosClient1: AxiosInstance = axios.create({
    baseURL,
});

export default axiosClient1;
