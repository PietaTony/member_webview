import React, { useState } from "react";
import Designer from "./component/designer/Designer";
import SideBar from "../components/SideBar";
import Pdf from "react-to-pdf";
import { Button } from "react-bootstrap";

export default function DesignerPage() {
  const [objects, setObjects] = useState([]);
  const ref = React.createRef();

  return (
    <>
      <div style={Style.sidenav}>
        <SideBar width={Style.sidenav.width} />
      </div>
      <div style={Style.main}>
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
    </>
  );
}

const sidenavSize = 180;
const Style = {
  sidenav: {
    height: "100%",
    width: sidenavSize,
    position: "fixed",
    "z-index": 1,
    top: 0,
    left: 0,
    "background-color": "#111",
    "overflow-x": "hidden",
    "padding-top": "20px",
  },
  main: {
    "margin-left": sidenavSize /* Same as the width of the sidenav */,
    "font-size": "28px" /* Increased text to enable scrolling */,
    padding: "0px 10px",
  },
};
