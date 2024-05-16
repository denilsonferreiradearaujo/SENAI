import axios from 'axios';

const api = axios.create({
    /**
     * Alterar o IP da API de acordo com IP da máquina onde está sendo executada
     */
    baseURL: 'http://192.168.100.185:3000'
    // baseURL: 'http://192.168.4.104:5500'
});

export default api;