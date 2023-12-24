
import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://plovo-js-20-85c7a-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default axiosApi;