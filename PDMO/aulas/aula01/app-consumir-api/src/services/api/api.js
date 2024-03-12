import axios from 'axios';

const api=axios.create({
    baseURL:'http://10.0.0.180:3000'
    // baseURL:'http://192.168.20.200:3000'
});

export default api;