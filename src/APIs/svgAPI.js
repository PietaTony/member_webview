import api from './api';

const svgAPI = {};

svgAPI.getAllSVG = () => {
  const url = `/svg`;
  return api.fire({
    url,
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  });
};

svgAPI.createSVG = () => {
  const url = `/svg`;
  return api.fire({
    url,
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  });
};

svgAPI.getSVG = (name) => {
  const url = `/svg/${name}`;
  return api.fire({
    url,
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  });
};

svgAPI.editSVG = (name) => {
  const url = `/svg/${name}`;
  return api.fire({
    url,
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  });
};

svgAPI.deleteSVG = (name) => {
  const url = `/svg/${name}`;
  return api.fire({
    url,
    headers: { 'Content-Type': 'application/json' },
    method: 'DELETE',
  });
};

export default svgAPI;
