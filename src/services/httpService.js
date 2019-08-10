import axios from 'axios';

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common['x-auth-token'] = jwt;
}

const instance = axios.create({
  withCredentials: true,
});

export default {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  setJwt,
};
