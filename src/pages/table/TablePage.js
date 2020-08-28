import React, { useState } from "react";
import str from "../../config/zh-tw.json";
import AddBar from "./component/AddBar";
import ShowTable from "./component/Table";
// import { useParams } from "react-router-dom";

export default function TablePage() {
  // let { token } = useParams();
  // console.log(token);

  let head = {
    term: str.term,
    type: str.type,
    content: str.content,
  };
  const [datas, setDatas] = useState([]);

  return (
    <>
      <AddBar setBody={setDatas} />
      <ShowTable head={head} datas={datas} setDatas={setDatas} />
    </>
  );
}
