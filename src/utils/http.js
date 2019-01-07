import axios from 'axios'
//import qs from "qs";


axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = '/api';
axios.defaults.headers = {
    'content-type': 'application/json; charset=utf-8'
};

export default axios


