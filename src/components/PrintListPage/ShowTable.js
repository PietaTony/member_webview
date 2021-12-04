import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

import LANG from '../../languages/zh-tw.json';

import EditTable from './EditTable';
import CreateTable from './CreateTable';
import { deletePrintList } from '../../APIs/session';
import { Link } from 'react-router-dom';

export default function ShowTable({
  head,
  datas,
  setDatas,
}) {
  const [isAddRow, setIsAddRow] = useState(false);

  return (
    <>
      <Link to="/">返回主頁</Link>
      <Table striped bordered hover size="sm" className='my-3'>
        <TableHead head={head} />
        <tbody>
          <TableBody
            datas={datas}
            setDatas={setDatas}
          />
          {isAddRow ? (
            <CreateTable
              datas={datas}
              setDatas={setDatas}
              setIsAddRow={setIsAddRow}
            />
          ) : undefined}
        </tbody>
      </Table>
      <input
        type="button"
        value={isAddRow ? '取消新增列印清單' : '新增一份列印清單'}
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

function TableBody({ datas, setDatas }) {
  // let [newData, setNewData] = useState();

  return (
    <>
      {datas.map((data, i) => {
        return (
          <tr key={i}>
            <TableItem data={data} />
            <td>
              <input
                type="button"
                value="Delete"
                onClick={() => {
                  deletePrintList(datas[i].id);
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

function TableItem({ data }) {
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
        return (
          <td key={id}>
            {val === 'id' ? (
              <p>{newData[val]}</p>
            ) : (
              <input
                type={val.includes('Tag') ? 'text' : 'number'}
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
