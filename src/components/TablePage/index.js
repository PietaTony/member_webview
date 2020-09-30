import React, { useState } from 'react';

import AddBar from './component/AddBar';
import ShowTable from './component/Table';
import templateAPI from '../../APIs/templateAPI';

import LANG from '../../languages/zh-tw.json';

export default function TablePage() {
  const head = {
    term: LANG.term,
    type: LANG.type,
    content: LANG.content,
  };

  // const initialDatas = templateAPI.getAllTemplate().then((result) => {
  //   console.log(result.data.data);
  //   return result.data.data;
  // });

  const [datas, setDatas] = useState([]);

  return (
    <>
      <AddBar setBody={setDatas} />
      <ShowTable head={head} datas={datas} setDatas={setDatas} />
    </>
  );
}
