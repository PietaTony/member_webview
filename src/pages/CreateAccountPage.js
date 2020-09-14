import React, { useState, useEffect } from 'react';

import { Button, Form, Card } from 'react-bootstrap';
import Str from '../config/zh-tw.json';
import { reqNewUser } from '../net/memberAPI';

export default function CreateAccountPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    setIsCheck(password && password === checkPassword);
  }, [password, checkPassword]);

  return (
    <div className="CreateAccount" align="center">
      <Card style={{ width: '20rem' }} border="Dark">
        <Card.Body>
          <Form>
            <EmailBar email={email} setEmail={setEmail} />
            <PasswordBar password={password} setPassword={setPassword} />
            <CheckPasswordBar
              checkPassword={checkPassword}
              setCheckPassword={setCheckPassword}
            />
            <Button
              variant="danger"
              type="submit"
              disabled={!isCheck}
              onClick={() => reqNewUser({ email: email, password: password })}>
              {Str.create}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

function EmailBar({ email, setEmail }) {
  return (
    <Form.Group controlId="formBasicAccount">
      {Str.email}
      <Form.Label>
        <Form.Control
          type="account"
          placeholder={Str.email}
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </Form.Label>
    </Form.Group>
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
