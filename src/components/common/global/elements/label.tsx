import React from 'react';
import { Form } from 'react-bootstrap';

type Props = {
  className?: string;
  lable: string;
};

export default ({ className, lable }: Props) => {
  return <Form.Label className={className}>{lable}</Form.Label>;
};
