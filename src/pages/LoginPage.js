import React, { useState } from 'react';

import { Button, Form, Card } from 'react-bootstrap';
import Str from '../config/zh-tw.json';
import { reqLogin } from '../net/memberAPI';
import Pages from './Pages.json';

export default function LoginPage({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="Login" align="center">
      <Card style={{ width: '20rem' }} border="Dark">
        <Card.Body>
          <Form>
            <EmailBar email={email} setEmail={setEmail} />
            <PasswordBar password={password} setPassword={setPassword} />
            <ButtonBar
              history={history}
              state={{ email: email, password: password }}
            />
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
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Label>
    </Form.Group>
  );
}

function ButtonBar({ history, state }) {
  return (
    <>
      <Button
        variant="danger"
        onClick={() =>
          reqLogin(state).then((res) => {
            if (res.status === 'Success') {
              history.push('/' + res.token);
            }
          })
        }>
        {Str.login}
      </Button>

      <Button
        variant="primary"
        onClick={() => history.push(Pages.createAccount)}>
        {Str.create}
      </Button>

      <Button
        variant="warning"
        onClick={() => history.push(Pages.forgetPassword)}>
        {Str.forget + Str.password}
      </Button>
    </>
  );
}
