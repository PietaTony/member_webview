import api from '../api';

const svgAPI = {};

svgAPI.getSVG = () => {
  const url = `/svg`;
  return api.fire({
    url,
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  });
};

export default svgAPI;
