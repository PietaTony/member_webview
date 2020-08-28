import React, { useState } from "react";
import {
  InputGroup,
  DropdownButton,
  Dropdown,
  Button,
  Form,
} from "react-bootstrap";
import Str from "../../../config/zh-tw.json";

export default function AddBar({ setBody }) {
  const [term, setTerm] = useState(Str.term + Str.name);
  const [termType, setTermType] = useState(Str.choice + Str.type);
  const [content, setContent] = useState(Str.default + Str.content);

  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text>{Str.term}</InputGroup.Text>
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
          }
        >
          {Str.new}
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

function TypeDropdown({ termType, setTermType }) {
  let Items = [];
  Object.keys(Str.types).forEach((key) => {
    Items.push(
      <Dropdown.Item key={key} eventKey={Str.types[key]}>
        {Str.types[key]}
      </Dropdown.Item>
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
      }}
    >
      {Items}
    </DropdownButton>
  );
}
