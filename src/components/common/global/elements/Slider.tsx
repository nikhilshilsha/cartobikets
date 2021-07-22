import React from 'react';
import Slider from 'react-slick';

type Props = {
  children: any;
  settings: object;
};

export default ({ children, settings }: Props) => (
  <Slider settings={settings}>{children}</Slider>
);
