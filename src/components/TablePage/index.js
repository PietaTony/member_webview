import React, { useState, useEffect } from 'react';

import AddBar from './AddBar';
import ShowTable from '../ShowTable';
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
      const initialDatas = res.data.data;
      const dataArray = [];
      initialDatas.forEach((initialData) => {
        dataArray.push({
          name: initialData[2],
          type: initialData[3],
          data: initialData[4],
        });
      });
      setDatas(dataArray);
    });
  };

  useEffect(() => {
    setInitialDatas();
  }, []);

  return (
    <>
      <div><a href="/">Back to SVG Editor</a></div>
      <AddBar setBody={setDatas} />
      <ShowTable head={head} datas={datas}/>
    </>
  );
}
