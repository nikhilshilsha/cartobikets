import React from 'react';
import { Col } from 'react-bootstrap';

type Props = {
  children: any;
  className?: string;
  sm?: number;
  md?: number;
  lg?: number;
};

export default ({ children, sm, md, lg, className }: Props) => {
  return (
    <Col className={className} sm={sm} md={md} lg={lg}>
      {children}
    </Col>
  );
};
