import React from 'react';
import Select from 'react-select';

type Props = {
  selectedOption: string;
  handleChange: any;
  options: any;
  isMulti: boolean;
  className?:string;
};

export default ({
  selectedOption,
  options,
  handleChange,
  isMulti,
  className,
}: Props) => (
  <Select
    value={selectedOption}
    onChange={handleChange}
    options={options}
    isMulti={isMulti}
    className={className}
  />
);
