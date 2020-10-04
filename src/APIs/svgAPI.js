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

svgAPI.getSVG = (name) => {
  const url = `/svg/${name}`;
  return api.fire({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
};

svgAPI.editSVG = (name, renewedSVG) => {
  const url = `/svg/${name}`;
  return api.fire({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    data: renewedSVG,
  });
};

svgAPI.deleteSVG = (name) => {
  const url = `/svg/${name}`;
  return api.fire({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  });
};

export default svgAPI;
