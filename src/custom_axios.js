import axios from "axios"

const instance = axios.create({

    baseURL:"https://test1-c3ba1-default-rtdb.firebaseio.com",


})
// instance.defaults.headers.common[""]

export default instance;