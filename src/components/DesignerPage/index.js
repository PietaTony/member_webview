import React, { useState } from 'react';
import ReactToPdf from 'react-to-pdf';
import { Button } from 'react-bootstrap';

import { Designer } from './component';
import './style.css';

export default function DesignerPage() {
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
      <ReactToPdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
      </ReactToPdf>
      <a href="/table">Table Page</a>
    </div>
  );
}
