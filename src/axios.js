import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-2f7ef/us-central1/api' /// api {cloud function} url
});


export default instance;