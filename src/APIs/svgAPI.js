import api from './api';

const svgAPI = {};

svgAPI.getAllSVG = () => {
  const url = `/svg`;
  return api.fire({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
};

svgAPI.createSVG = (newSVG) => {
  const url = `/svg`;
  return api.fire({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    data: newSVG,
  });
};

svgAPI.getSVG = (id) => {
  const url = `/svg/${id}`;
  return api.fire({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
};

svgAPI.editSVG = (id, newSVG) => {
  const url = `/svg/${id}`;
  return api.fire({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    data: newSVG,
  });
};

svgAPI.deleteSVG = (id) => {
  const url = `/svg/${id}`;
  return api.fire({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  });
};

export default svgAPI;
