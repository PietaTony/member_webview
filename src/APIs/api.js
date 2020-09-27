import axios from 'axios';

const api = {};

const API_TIMEOUT_DUR = 30000;
export const instance = axios.create({
  timeout: API_TIMEOUT_DUR,
  onUploadProgress: (progressEvent) => {
    document.body.style.cursor =
      progressEvent.loaded === progressEvent.total ? 'default' : 'progress';
  },
});

api.fire = async (options, API_HOST = 'http://localhost:5000') => {
  // eslint-disable-next-line consistent-return
  return instance
    .request({
      ...options,
      headers: {
        ...options.headers,
      },
      url: `${API_HOST}${options.url}`,
    })
    .catch((error) => {
      throw error;
    });
};

export default api;
