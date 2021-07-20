import React from 'react';
import { Form } from 'react-bootstrap';

type Props = {
  className?: string;
  placeholder: string;
  type: string;
  name: string;
};

export default ({ className, type, name, placeholder }: Props) => (
  <>
    <Form.Control
      type={type}
      
      name={name}
      placeholder={placeholder}
      className={className}
    />
  </>
);
