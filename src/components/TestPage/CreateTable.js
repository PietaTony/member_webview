import React, { useState } from 'react';

import LANG from '../../languages/zh-tw.json';

export default function CreateTable({
  datas,
  setDatas,
  createData,
  setIsAddRow,
}) {
  const [newData, setNewData] = useState({
    boxSize: 0,
    packSize: 0,
    boardSize: 0,
    boxTag: '',
    packTag: '',
    boardTag: '',
    counter: 0,
  });

  return (
    <tr>
      {Object.keys(newData).map((val, id) => (
        <td key={id}>
          {val === 'counter' ? (
            <p>{newData[val]}</p>
          ) : (
            <input
              type={val.includes('Size') ? 'number' : 'text'}
              style={styles.inputText}
              placeholder={LANG.please_enter_data}
              value={newData[val]}
              onChange={(e) => {
                let {
                  target: { value },
                } = e;
                setNewData((newData) => {
                  let data = { ...newData };
                  data[val] = val.includes('Size') ? parseInt(value) : value;

                  return { ...data };
                });
              }}
            />
          )}
        </td>
      ))}
      <td>
        <input
          type="button"
          value="Create"
          onClick={() => {
            createData(newData);
            const newDatas = [...datas, newData];
            setDatas(newDatas);
            setIsAddRow((isAddRow) => !isAddRow);
          }}
        />
      </td>
    </tr>
  );
}

const styles = {
  inputText: {
    width: '100%',
    border: 0,
    background: 'rgba(0,0,0,0)',
  },
};
