import React, { useState, useEffect } from 'react';

import ShowTable from './ShowTable';
import testAPI from '../../APIs/testAPI';

import LANG from '../../languages/zh-tw.json';

export default function TestPage() {
  const [datas, setDatas] = useState([]);
  const head = {
    box: LANG.box_fewPack,
    pack: LANG.pack_fewBoard,
    board: LANG.board_fewSomething,
    boxTag: LANG.box_tag,
    packTag: LANG.pack_tag,
    boardTag: LANG.board_tag,
    counter: LANG.counter,
  };
  const columns = ['name'];

  useEffect(() => {
    // setInitialDatas
    testAPI.getAllTest().then((res) => {
      const initialDatas = res.data.data;
      setDatas(initialDatas);
    });
  }, []);

  return (
    <>
      <ShowTable
        head={head}
        columns={columns}
        datas={datas}
        setDatas={setDatas}
        createData={createData}
        deleteData={deleteData}
        editData={editData}
      />
    </>
  );
}

const createData = (data) => {
  testAPI
    .createTest(data)
    .then((res) => {})
    .catch((err) => {
      console.error(err);
    });
};

const deleteData = (id) => {
  testAPI
    .deleteTest(id)
    .then((res) => {})
    .catch((err) => {
      console.error(err);
    });
};

const editData = (id, data) => {
  testAPI
    .editTest(id, data)
    .then((res) => {})
    .catch((err) => {
      console.error(err);
    });
};
