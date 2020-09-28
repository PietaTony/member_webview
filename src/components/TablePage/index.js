import React, { useState } from 'react';
// import { useParams } from "react-router-dom";

import AddBar from './component/AddBar';
import ShowTable from './component/Table';

import LANG from '../../languages/zh-tw.json';

export default function TablePage() {
  // let { token } = useParams();
  // console.log(token);

  const head = {
    term: LANG.term,
    type: LANG.type,
    content: LANG.content,
  };
  const [datas, setDatas] = useState([]);

  return (
    <>
      <AddBar setBody={setDatas} />
      <ShowTable head={head} datas={datas} setDatas={setDatas} />
    </>
  );
}
