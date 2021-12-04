import React, { useState } from 'react';
import LANG from '../../languages/zh-tw.json';
import { createPrintList } from '../../APIs/session';

export default function CreateTable({ datas, setDatas, setIsAddRow }) {
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
      <td></td>
      {Object.keys(newData).map((val, id) => (
        <td key={id}>
          <input
            type={val.includes('Tag') ? 'text' : 'number'}
            style={styles.inputText}
            placeholder={LANG.please_enter_data}
            value={newData[val]}
            min="0"
            onChange={(e) => {
              let {
                target: { value },
              } = e;
              setNewData((newData) => {
                let data = { ...newData };
                data[val] = val.includes('Tag') ? value : parseInt(value);

                return { ...data };
              });
            }}
          />
        </td>
      ))}
      <td>
        <input
          type="button"
          value="Create"
          onClick={() => {
            createPrintList(newData)
              .then((res) => {
                const newDatas = [...datas, { id: res.data.insert_id, ...newData }];
                setDatas(newDatas);
                setIsAddRow((isAddRow) => !isAddRow);
              });
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
