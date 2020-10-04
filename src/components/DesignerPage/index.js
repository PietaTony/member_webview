import React, { useState, useEffect } from 'react';
import ReactToPdf from 'react-to-pdf';
import { Button } from 'react-bootstrap';

import { Designer } from '../ReactDesigner';
import ShowTable from '../ShowTable';
import svgAPI from '../../APIs/svgAPI';

import LANG from '../../languages/zh-tw.json';

import './style.css';

export default function DesignerPage() {
  const [datas, setDatas] = useState([]);
  const [objects, setObjects] = useState([]);
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(350);
  const ref = React.createRef();

  return (
    <div className="designer_page_container">
      <div>
        <label>
          Width:
          <input
            name="width"
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}></input>
        </label>
        <label>
          Height:
          <input
            name="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}></input>
        </label>
      </div>
      <div ref={ref} className="designer">
        <Designer
          width={width}
          height={height}
          objects={objects}
          onUpdate={(newObjects) => setObjects(newObjects)}
        />
      </div>
      <br />
      <Button
        onClick={() => {
          const newBody = {
            data: JSON.stringify(objects),
          };
          console.log(objects);
          setDatas((oldBody) => [...oldBody, newBody]);
        }}>
        Save SVG to Database
      </Button>
      <ReactToPdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <Button variant="outline-secondary" onClick={toPdf}>
            Generate Pdf
          </Button>
        )}
      </ReactToPdf>
      <a href="/table">
        <b>Redirect to Table Page</b>
      </a>
      <SVGTable datas={datas} setDatas={setDatas} />
    </div>
  );
}

function SVGTable({ datas, setDatas }) {
  const head = {
    data: LANG.data,
  };

  // const setInitialDatas = async () => {
  //   await svgAPI.getAllSVG().then((res) => {
  //     const initialDatas = res.data.data;
  //     const dataArray = [];
  //     initialDatas.forEach((initialData) => {
  //       dataArray.push({
  //         data: initialData,
  //       });
  //     });
  //     setDatas(dataArray);
  //   });
  // };

  // useEffect(() => {
  //   setInitialDatas();
  // }, []);

  return <ShowTable head={head} datas={datas} setDatas={setDatas} />;
}
