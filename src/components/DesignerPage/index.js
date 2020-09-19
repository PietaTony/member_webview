import React, { useState } from 'react';
import Pdf from 'react-to-pdf';
import { Button } from 'react-bootstrap';
import Designer from './component/Designer';

export default function DesignerPage() {
  const [objects, setObjects] = useState([]);
  const ref = React.createRef();

  return (
    <div style={style.main}>
      <div ref={ref}>
        <Designer
          width={400}
          height={350}
          objects={objects}
          onUpdate={(newObjects) => setObjects(newObjects)}
        />
      </div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
      </Pdf>
    </div>
  );
}

const style = {
  main: {
    'margin-left': '180px' /* Same as the width of the sidenav */,
    'font-size': '28px' /* Increased text to enable scrolling */,
    'padding': '0px 10px',
  },
};
