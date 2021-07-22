import React, { MouseEventHandler } from 'react';
import { AccordionCollapse } from 'react-bootstrap';
import { Button } from '.';

type Props = {
  buttonText: string;
  Onclick: MouseEventHandler;
  accordianText: any;
  currentStep: number;
  accordianStep: number;
  buttonclassName?: string;
  accordianClassName?: string;
};

export default ({
  buttonText,
  Onclick,
  accordianText,
  currentStep,
  accordianStep,
  buttonclassName,
  accordianClassName,
}: Props) => (
  <>
    <Button type="submit" onClick={Onclick} className={buttonclassName}>
      {buttonText}
    </Button>
    {currentStep == accordianStep && (
      <div className={accordianClassName}>{accordianText}</div>
    )}
    <br />
  </>
);
