import api from './api';

const templateAPI = {};

templateAPI.getAllTemplate = () => {
  const url = `/template`;
  return api.fire({
    url,
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  });
};

templateAPI.createTemplate = () => {
  const url = `/template`;
  return api.fire({
    url,
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  });
};

templateAPI.getTemplate = (template_ID) => {
  const url = `/template/${template_ID}`;
  return api.fire({
    url,
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  });
};

templateAPI.editTemplate = (template_ID) => {
  const url = `/template/${template_ID}`;
  return api.fire({
    url,
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  });
};

templateAPI.deleteTemplate = (template_ID) => {
  const url = `/template/${template_ID}`;
  return api.fire({
    url,
    headers: { 'Content-Type': 'application/json' },
    method: 'DELETE',
  });
};

export default templateAPI;
