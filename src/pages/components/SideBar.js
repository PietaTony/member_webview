import React from "react";
import { Nav, Col, Image } from "react-bootstrap";
const rootPath = process.env.PUBLIC_URL;
export default function SideBar({ width }) {
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
