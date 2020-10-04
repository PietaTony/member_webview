import React, { useState, useEffect } from 'react';

import AddBar from './component/AddBar';
import ShowTable from './component/Table';
import templateAPI from '../../APIs/templateAPI';

import LANG from '../../languages/zh-tw.json';

export default function TablePage() {
  const head = {
    name: LANG.name,
    type: LANG.type,
    data: LANG.data,
  };

  const [datas, setDatas] = useState([]);

  const setInitialDatas = async () => {
    await templateAPI.getAllTemplate().then((res) => {
      const initialData = res.data.data[0];
      setDatas([{ name: initialData[2], type: initialData[3], data: initialData[4] }]);
    });
  };

  useEffect(() => {
    setInitialDatas();
  }, []);

  return (
    <>
      <AddBar setBody={setDatas} />
      <ShowTable head={head} datas={datas} setDatas={setDatas} />
    </>
  );
}
