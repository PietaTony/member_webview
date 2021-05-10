import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

import LANG from '../../languages/zh-tw.json';

import EditTable from './EditTable';
import CreateTable from './CreateTable';

export default function ShowTable({
  head,
  datas,
  setDatas,
  createData,
  deleteData,
  editData,
}) {
  const [isAddRow, setIsAddRow] = useState(false);

  return (
    <>
      <Table striped bordered hover size="sm">
        <TableHead head={head} />
        <tbody>
          <TableBody
            datas={datas}
            setDatas={setDatas}
            deleteData={deleteData}
            editData={editData}
          />
          {isAddRow ? (
            <CreateTable
              datas={datas}
              setDatas={setDatas}
              createData={createData}
              setIsAddRow={setIsAddRow}
            />
          ) : undefined}
        </tbody>
      </Table>
      <input
        type="button"
        value={isAddRow ? '取消新增 test' : '新增test'}
        onClick={() => setIsAddRow((isAddRow) => !isAddRow)}
      />
    </>
  );
}

function TableHead({ head }) {
  return (
    <thead>
      <tr>
        {Object.keys(head).map((key) => (
          <th key={key}>{head[key]}</th>
        ))}
        <th key="edit">{LANG.edit}</th>
        <th key="delete">{LANG.delete}</th>
      </tr>
    </thead>
  );
}

function TableBody({ datas, setDatas, deleteData, editData }) {
  // let [newData, setNewData] = useState();

  return (
    <>
      {datas.map((data, i) => {
        return (
          <tr key={i}>
            <TableItem data={data} editData={editData} />
            <td>
              <input
                type="button"
                value="Delete"
                onClick={() => {
                  deleteData(datas[i].id);
                  const newDatas = [...datas];
                  newDatas.splice(i, 1);
                  setDatas(newDatas);
                }}></input>
            </td>
          </tr>
        );
      })}
    </>
  );
}

function TableItem({ data, editData }) {
  const [newData, setNewData] = useState({ ...data });
  let [isEdit, setIsEdit] = useState(false);

  const editModeToggle = () => {
    setIsEdit((isEdit) => !isEdit);
  };

  const handleUpdateData = (e, val) => {
    let {
      target: { value },
    } = e;

    let data = { ...newData };
    data[val] = val.includes('Size') ? parseInt(value) : value;

    setNewData({ ...data });
  };

  return (
    <>
      {Object.keys(newData).map((val, id) => {
        return val === 'id' ? undefined : (
          <td key={id}>
            {val === 'counter' ? (
              <p>{newData[val]}</p>
            ) : (
              <input
                type={val.includes('Size') ? 'number' : 'text'}
                style={styles.inputText}
                placeholder={LANG.please_enter_data}
                disabled={!isEdit}
                value={newData[val]}
                onChange={(e) => handleUpdateData(e, val)}
              />
            )}
          </td>
        );
      })}
      <EditTable
        isEdit={isEdit}
        editModeToggle={editModeToggle}
        newData={newData}
        editData={editData}
      />
    </>
  );
}

const styles = {
  inputText: {
    width: '100%',
    border: 0,
    background: 'rgba(0,0,0,0)',
  },
};
