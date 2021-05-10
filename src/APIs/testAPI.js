import api from './api';

const testAPI = {};

testAPI.getAllTest = () => {
  const url = `/test`;
  return api.fire({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
};

testAPI.createTest = (newTest) => {
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

testAPI.getTest = (id) => {
  const url = `/test/${id}`;
  return api.fire({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
};

testAPI.editTest = (id, newTest) => {
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

testAPI.deleteTest = (id) => {
  const url = `/test/${id}`;
  return api.fire({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  });
};

export default testAPI;
