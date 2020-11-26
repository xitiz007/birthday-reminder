import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://birthday-reminder-pandit.firebaseio.com/'
});

export default instance;