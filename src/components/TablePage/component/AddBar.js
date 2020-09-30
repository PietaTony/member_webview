import React, { useState } from 'react';
import {
  InputGroup,
  DropdownButton,
  Dropdown,
  Button,
  Form,
} from 'react-bootstrap';
import LANG from '../../../languages/zh-tw.json';

export default function AddBar({ setBody }) {
  const [term, setTerm] = useState(LANG.term + LANG.name);
  const [termType, setTermType] = useState(LANG.choice + LANG.type);
  const [content, setContent] = useState(LANG.default + LANG.content);

  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text>{LANG.term}</InputGroup.Text>
      </InputGroup.Prepend>

      <Form.Control
        placeholder={term}
        onChange={(e) => setTerm(e.target.value)}
      />

      <TypeDropdown termType={termType} setTermType={setTermType} />

      <Form.Control
        placeholder={content}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          onClick={() =>
            setBody((oldBody) => [
              ...oldBody,
              { term: term, type: termType, content: content },
            ])
          }>
          {LANG.new}
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

function TypeDropdown({ termType, setTermType }) {
  const items = [];
  Object.keys(LANG.types).forEach((key) => {
    items.push(
      <Dropdown.Item key={key} eventKey={LANG.types[key]}>
        {LANG.types[key]}
      </Dropdown.Item>,
    );
  });
  return (
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title={termType}
      id="items"
      onSelect={(e) => {
        setTermType(e);
      }}>
      {items}
    </DropdownButton>
  );
}
