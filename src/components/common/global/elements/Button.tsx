import React from 'react';
import { Button } from 'react-bootstrap';

type Props = {
  type: string;
  className?: string;
  children: any;
  onClick?: React.MouseEventHandler;
  variant?: string;
};

export default ({ children, className, type, onClick, variant }: Props) => (
  <Button type={type} className={className} onClick={onClick} variant={variant}>
    {children}
  </Button>
);
