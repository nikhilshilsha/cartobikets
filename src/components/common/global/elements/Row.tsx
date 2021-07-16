import React from 'react';
import { Row } from 'react-bootstrap';

type Props = {
  children: any;
  className?: string;
};

export default ({ children, className }: Props) => (
  <Row className={className}>{children}</Row>
);
