import printListAPI from './printListAPI';

export const getAllPrintList = () => {
  return printListAPI
    .getAllPrintList()
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const createPrintList = (data) => {
  return printListAPI
    .createPrintList(data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const deletePrintList = (id) => {
  printListAPI
    .deletePrintList(id)
    .then((res) => {})
    .catch((err) => {
      console.error(err);
    });
};

export const editPrintList = (id, data) => {
  printListAPI
    .editPrintList(id, data)
    .then((res) => {})
    .catch((err) => {
      console.error(err);
    });
};
