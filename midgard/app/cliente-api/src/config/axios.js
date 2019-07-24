import axios from 'axios';

const clientesAxios= axios.create({
    baseURL:'http://localhost:666'
});

export default clientesAxios;