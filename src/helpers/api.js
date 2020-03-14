import axios from "axios";

const handleError = response => Promise.reject(response);
const handleSuccess = response => response.data;

//http get api
export const get = (url, params) => {
  return axios
    .get(url, { params })
    .then(handleSuccess)
    .catch(handleError);
};

//http post api
export const post = (url, body) => {
  return axios
    .get(url, body)
    .then(handleSuccess)
    .catch(handleError);
};
