import axios from "axios";


const url = "/"
export  const requestFn = axios.create({
    baseURL:url
})

export const postRequest = async (data) => {
  try {
    const resp = await requestFn.post('', data);
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
};