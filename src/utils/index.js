import axios from "axios";


const url = "/"
export  const requestFn = axios.create({
    baseURL:url
})