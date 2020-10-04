import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

export default function ShowTable({ head, datas }) {
  return (
    <Table striped bordered hover size="sm">
      <TableHead head={head} />
      <TableBody datas={datas} />
    </Table>
  );
}

function TableHead({ head }) {
  const THead = [];
  Object.keys(head).forEach((key) => {
    THead.push(<th key={key}>{head[key]}</th>);
  });
  return (
    <thead>
      <tr>{THead}</tr>
    </thead>
  );
}

function TableBody({ datas }) {
  const TBody = [];
  Object.keys(datas).forEach((key) => {
    TBody.push(
      <tr key={key}>
        <TableData data={datas[key]} />
      </tr>,
    );
  });
  return <tbody>{TBody}</tbody>;
}

function TableData({ data }) {
  const TData = [];
  Object.keys(data).forEach((key) => {
    TData.push(<TableItem key={key} item={data[key]} />);
  });
  return TData;
}

function TableItem({ item }) {
  const [_item, setItem] = useState(item);
  return (
    <td
      onDoubleClick={() => {
        setItem('測試');
      }}>
      {_item}
    </td>
  );
}
