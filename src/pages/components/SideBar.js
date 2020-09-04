import React from "react";
import { Nav, Col, Image, Button, Breadcrumb } from "react-bootstrap";
import { TypeClass } from "../../config/TypeList";

const rootPath = process.env.PUBLIC_URL;
export function LeftSideBar({ width }) {
  return (
    <>
      <Col xs={6} md={4}>
        <Image src={rootPath + "/images/DontMove.png"} roundedCircle />
      </Col>
      <Nav
        className="col-md-12  d-md-block  sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export function RightSideBar({ datas, objects, setObjects }) {
  const newdatas = datas.filter((data) => data.TYPECLASS === TypeClass.Base);
  return newdatas.map((data, i) => (
    <Button key={i} onClick={() => setObjects([...objects, data])} block>
      {data.TYPESN}
    </Button>
  ));
}

export function Bread() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}
