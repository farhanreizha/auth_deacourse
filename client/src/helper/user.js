import axios from 'axios';

export const auth = (url, data) => {
  return axios({
    url: url,
    method: 'POST',
    data: data,
  });
};

export const getDetail = (url, data) => {
  return axios({
    url: url,
    method: 'POST',
    data: {
      id: data.id,
      username: data.username,
    },
    headers: {
      token: data.token,
    },
  });
};
export const update = (url, data) => {
  return axios({
    url: url,
    method: 'PUT',
    data: {
      username: data.username,
      password: data.password,
    },
    headers: {
      token: data.token,
    }
  });
};
