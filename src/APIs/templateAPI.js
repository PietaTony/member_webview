import api from './api';

const templateAPI = {};

templateAPI.getAllTemplate = () => {
  const url = `/template`;
  return api.fire({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
};

templateAPI.createTemplate = (newTemplate) => {
  const url = `/template`;
  return api.fire({
    url,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    method: 'POST',
    newTemplate,
  });
};

templateAPI.getTemplate = (template_ID) => {
  const url = `/template/${template_ID}`;
  return api.fire({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
};

templateAPI.editTemplate = (template_ID, newTemplate) => {
  const url = `/template/${template_ID}`;
  return api.fire({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    newTemplate,
  });
};

templateAPI.deleteTemplate = (template_ID) => {
  const url = `/template/${template_ID}`;
  return api.fire({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  });
};

export default templateAPI;
