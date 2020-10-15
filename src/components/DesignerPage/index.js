import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import { Designer } from '../ReactDesigner';
import svgAPI from '../../APIs/svgAPI';

import LANG from '../../languages/zh-tw.json';

import './style.css';

export default function DesignerPage() {
  const [svg, setSvg] = useState({ name: '', data: [] });
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(350);

  const setSvgName = (newName) => {
    const tmp = { ...svg };
    tmp.name = newName;
    setSvg(tmp);
  };
  const setSvgObjects = (newObjects) => {
    const tmp = { ...svg };
    tmp.data = newObjects;
    setSvg(tmp);
  };

  return (
    <div className="designer_page_container">
      <div>
        <label>
          {LANG.name}:{' '}
          <input
            type="text"
            name="svg_name"
            value={svg.name}
            onChange={(e) => setSvgName(e.target.value)}></input>
        </label>
      </div>
      <div>
        <label>
          {LANG.width}:{' '}
          <input
            name="width"
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}></input>
        </label>
        <label>
          {LANG.height}:{' '}
          <input
            name="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}></input>
        </label>
      </div>
      <div className="designer">
        <Designer
          width={width}
          height={height}
          objects={svg.data}
          onUpdate={(newObjects) => setSvgObjects(newObjects)}
        />
      </div>
      <br />
      <Button
        onClick={() => {
          if (svg.name) {
            saveNewSvg(svg);
            window.location.replace('/');
          } else {
            alert(LANG.please_enter_name);
          }
        }}>
        {LANG.save_svg}
      </Button>
      <a href="/">{LANG.back}</a>
    </div>
  );
}

const saveNewSvg = (newSVG) => {
  svgAPI
    .createSVG(newSVG)
    .then((res) => {})
    .catch((err) => {
      console.error(err);
    });
};
