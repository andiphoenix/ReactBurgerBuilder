import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-9dbfa.firebaseio.com/'
});

export default instance;