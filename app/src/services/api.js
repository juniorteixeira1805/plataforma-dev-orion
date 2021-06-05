import axios from 'axios'

const api = axios.create({
    baseURL: 'https://guerreiros.herokuapp.com',
});

export default api