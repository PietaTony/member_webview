import React, { useState, useEffect } from 'react';

import ShowTable from './ShowTable';

import LANG from '../../languages/zh-tw.json';

import { getAllPrintList } from '../../APIs/session';

export default function PrintListPage() {
  const [datas, setDatas] = useState([]);
  const head = {
    id: LANG.test_id,
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
    getAllPrintList().then((res) => {
      const initialDatas = res.data;
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
      />
    </>
  );
}
