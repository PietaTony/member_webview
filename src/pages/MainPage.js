import React, { useState, useEffect } from "react";
import { LeftSideBar, RightSideBar, Bread } from "./components/SideBar";
import { Button, Card, CardDeck } from "react-bootstrap";
import { BaseComponents } from "../config/TypeList";

export default function MainPage() {
  const [objects, setObjects] = useState([]);
  useEffect(() => {
    ToModel(objects);
  }, [objects]);
  return (
    <>
      <div style={Style.leftSideNav}>
        <LeftSideBar width={Style.leftSideNav.width} />
      </div>

      <div style={Style.main}>
        <Bread />
        <Items objects={objects} setObjects={setObjects} />
      </div>

      <div style={Style.rightSideNav}>
        <RightSideBar
          datas={BaseComponents}
          objects={objects}
          setObjects={setObjects}
        />
      </div>
    </>
  );
}

function Items({ objects, setObjects }) {
  return (
    <CardDeck>
      {objects.map((object, i) => (
        <div key={i}>
          <Card style={{ width: "13rem" }}>
            <Card.Body>
              <Card.Title>
                {object.TYPESN}{" "}
                <Button
                  variant={"danger"}
                  onClick={() =>
                    setObjects(objects.filter((value, index) => index !== i))
                  }
                >
                  Remove
                </Button>
              </Card.Title>
            </Card.Body>
          </Card>
          <br />
        </div>
      ))}
    </CardDeck>
  );
}

function ToModel(objects) {
  let FTABLE = {};
  objects.forEach((value) => {
    FTABLE = { ...FTABLE, ...value.JDATA };
  });
  console.log({ FTABLE: FTABLE });
}

const leftSideNavSize = 180;
const rightSideNavSize = 180;
const Style = {
  leftSideNav: {
    height: "100%",
    width: leftSideNavSize,
    position: "fixed",
    zindex: 1,
    top: 0,
    left: 0,
    backgroundColor: "#111",
    overflowX: "hidden",
    paddingTop: "20px",
  },
  rightSideNav: {
    height: "100%",
    width: rightSideNavSize,
    position: "fixed",
    zindex: 1,
    top: 0,
    right: 0,
    backgroundColor: "#111",
    overflowX: "hidden",
    paddingTop: "20px",
  },
  main: {
    marginLeft: leftSideNavSize /* Same as the width of the sidenav */,
    marginRight: rightSideNavSize,
    fontSize: "28px" /* Increased text to enable scrolling */,
    padding: "0px 10px",
  },
};
