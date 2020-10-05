import React from 'react';
import { Table } from 'react-bootstrap';

export default function ShowTable({ head, datas, setDatas, deleteData }) {
  return (
    <Table striped bordered hover size="sm">
      <TableHead head={head} />
      <TableBody datas={datas} setDatas={setDatas} deleteData={deleteData} />
    </Table>
  );
}

function TableHead({ head }) {
  const THead = [];
  Object.keys(head).forEach((key) => {
    THead.push(<th key={key}>{head[key]}</th>);
  });
  THead.push(<th key="delete">刪除</th>);
  return (
    <thead>
      <tr>{THead}</tr>
    </thead>
  );
}

function TableBody({ datas, setDatas, deleteData }) {
  const TBody = [];
  Object.keys(datas).forEach((key) => {
    TBody.push(
      <tr key={key}>
        <TableData
          data={datas[key]}
          setData={(newData) => {
            const newDatas = [...datas];
            newDatas[key] = newData;
            setDatas(newDatas);
          }}
          deleteData={() => {}}
        />
        <td key={key}>
          <input
            type="button"
            value="Delete"
            onClick={() => {
              deleteData(datas[key]['template_id']);
              const newDatas = [...datas];
              newDatas.splice(key, 1);
              setDatas(newDatas);
            }}></input>
        </td>
      </tr>,
    );
  });
  return <tbody>{TBody}</tbody>;
}

function TableData({ data, setData }) {
  const TData = [];
  Object.keys(data).forEach((key) => {
    if (key === 'template_id') {
      TData.push(<td key={key}>{data[key]}</td>);
    } else {
      TData.push(
        <TableItem
          key={key}
          item={data[key]}
          setItem={(newItem) => {
            const newData = { ...data };
            newData[key] = newItem;
            setData(newData);
          }}
        />,
      );
    }
  });
  return TData;
}

function TableItem({ item, setItem }) {
  return (
    <td>
      <input
        type="text"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}></input>
    </td>
  );
}
