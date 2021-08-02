import React from 'react';
import { Form } from 'react-bootstrap';

type Props = {
  as?: any;
  className?: string;
  controlId?: string;
  fields: any;
};

export default ({ as, className, fields }: Props) => (
  <>
    {fields.map(field => (
      <Form.Group as={as} className={className}>
        {field.label && <Form.Label>{field.label}</Form.Label>}
        <Form.Control
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          className={field.className}
          onChange={(e)=>field.change(e)}
        />
      </Form.Group>
    ))}
  </>
);
