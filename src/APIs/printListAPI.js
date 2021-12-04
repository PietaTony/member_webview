import api from './api';

const printListAPI = {};

printListAPI.getAllPrintList = () => {
  const url = `/test`;
  return api.fire({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
};

printListAPI.createPrintList = (newTest) => {
  const url = `/test`;
  return api.fire({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    data: newTest,
  });
};

printListAPI.getPrintList = (id) => {
  const url = `/test/${id}`;
  return api.fire({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
};

printListAPI.editPrintList = (id, newTest) => {
  const url = `/test/${id}`;
  return api.fire({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    data: newTest,
  });
};

printListAPI.deletePrintList = (id) => {
  const url = `/test/${id}`;
  return api.fire({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  });
};

export default printListAPI;
