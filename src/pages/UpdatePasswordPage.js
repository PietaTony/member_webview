import React, { useState, useEffect } from "react";

import { Button, Form, Card } from "react-bootstrap";
import Str from "../config/zh-tw.json";
import { updatePassword } from "../net/memberAPI";
import Pages from "./Pages.json";

export default function CreateAccountPage({ history, location }) {
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    setIsCheck(password && password === checkPassword);
  }, [password, checkPassword]);

  return (
    <div className="CreateAccount" align="center">
      <Card style={{ width: "20rem" }} border="Dark">
        <Card.Body>
          <Form>
            <PasswordBar password={password} setPassword={setPassword} />
            <CheckPasswordBar
              checkPassword={checkPassword}
              setCheckPassword={setCheckPassword}
            />
            <Button
              variant="danger"
              disabled={!isCheck}
              onClick={() => {
                updatePassword({
                  name: location.state.identifying,
                  password: password,
                });
                history.push(Pages.login);
              }}
            >
              {Str.update}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

function PasswordBar({ password, setPassword }) {
  return (
    <Form.Group controlId="formBasicPassword">
      {Str.password}
      <Form.Label>
        <Form.Control
          type="password"
          placeholder={Str.password}
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </Form.Label>
    </Form.Group>
  );
}

function CheckPasswordBar({ checkPassword, setCheckPassword }) {
  return (
    <Form.Group controlId="formBasicRePassword">
      {Str.check + Str.password}
      <Form.Label>
        <Form.Control
          type="password"
          placeholder={Str.check + Str.password}
          value={checkPassword}
          onChange={({ target }) => setCheckPassword(target.value)}
        />
      </Form.Label>
    </Form.Group>
  );
}
