import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import AddBar from './AddBar';
import ShowTable from '../ShowTable';
import templateAPI from '../../APIs/templateAPI';

import LANG from '../../languages/zh-tw.json';

export default function TablePage() {
  const head = {
    template_id: LANG.ID,
    term_name: LANG.name,
    type: LANG.type,
    data: LANG.data,
  };

  const [datas, setDatas] = useState([]);

  const setInitialDatas = async () => {
    await templateAPI.getAllTemplate().then((res) => {
      const initialDatas = res.data.data;
      const dataArray = [];
      initialDatas.forEach((initialData) => {
        dataArray.push({
          template_id: initialData[1],
          term_name: initialData[2],
          type: initialData[3],
          data: initialData[4],
        });
      });
      setDatas(dataArray);
    });
  };

  useEffect(() => {
    setInitialDatas();
  }, []);

  const updateTemplate = async () => {
    await Object.keys(datas).forEach((key) => {
      templateAPI
        .editTemplate(datas[key]['template_id'], datas[key])
        .then((res) => {})
        .catch((err) => {
          console.error(err);
        });
    });
  };

  const deleteData = async (template_id) => {
    await templateAPI
      .deleteTemplate(template_id)
      .then((res) => {})
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div>
        <a href="/">Back to SVG Editor</a>
      </div>
      <AddBar setBody={setDatas} />
      <ShowTable
        head={head}
        datas={datas}
        setDatas={setDatas}
        deleteData={deleteData}
      />
      <Button
        onClick={() => {
          updateTemplate();
        }}>
        Save changes
      </Button>
    </>
  );
}
