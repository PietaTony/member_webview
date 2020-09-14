import React, { useState } from 'react';

import { Button, Form, Card } from 'react-bootstrap';
import Str from '../config/zh-tw.json';
import { forgetPassword } from '../net/memberAPI';
import Pages from './Pages.json';

export default function ForgetPasswordPage({ history }) {
  const [email, setEmail] = useState('');
  const [identifyingCode, setIdentifyingCode] = useState('');

  return (
    <div className="ForgetPassword" align="center">
      <Card style={{ width: '20rem' }} border="Dark">
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicemail">
              {Str.email}
              <Form.Label>
                <Form.Control
                  type="email"
                  placeholder={Str.email}
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                />
              </Form.Label>
              <Button
                variant="danger"
                onClick={() => forgetPassword({ email: email })}>
                {Str.send + Str.identifyingCode}
              </Button>
            </Form.Group>

            <Form.Group controlId="formBasic">
              {Str.identifyingCode}
              <Form.Label>
                <Form.Control
                  type="identifyingCode"
                  placeholder={Str.identifyingCode}
                  value={identifyingCode}
                  onChange={({ target }) => setIdentifyingCode(target.value)}
                />
              </Form.Label>
            </Form.Group>
            <Button
              variant="warning"
              onClick={() => {
                history.push(Pages.updatePassowrd, {
                  identifying: identifyingCode,
                });
              }}>
              {Str.update + Str.password}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
