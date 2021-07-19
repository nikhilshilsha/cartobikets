import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Button,
  Container,
  Nav,
  Breadcrumb,
  Form,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import Navbar from '../../common/global/CommonComponents/Navbar';
import MyAccount from './MyAccount';
import MyStore from './MyStore';
import AccountValidate from './AccountValidate';
import ManageRole from '../User/ManageRole';

import { stepFormLi, stepFormLimobile } from '../../../utils/common';
function Account() {
  const [step, setStep] = useState(1);
  const [activeStep, setActiveStep] = useState(1);
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    function setInnerWidth() {
      window.addEventListener('resize', () => setWidth(window.innerWidth));
    }
    setInnerWidth();
  }, [window.innerWidth]);
  console.log(width);
  const stepSetup = paramstep => {
    if (paramstep == 1) {
      setStep(1);
    } else if (paramstep < step) {
      setStep(step - 1);
    } else {
      setStep(step + 1);
    }
  };
  const displayStepFormContent = () => {
    switch (step) {
      case 1:
        return <MyAccount />;
        break;
      case 2:
        return <MyStore />;
      case 3:
        return <AccountValidate />;
      case 4:
        return <ManageRole />;
      default:
        break;
    }
  };
  return (
    <>
      <Navbar />
      <Container>
        <div className="account">
          <div className="loading d-flex justify-content-between align-items-center">
            <span className="">back</span>
            <svg width="70" height="70" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#dddddd"
                stroke-width="15"
              ></circle>
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#817aff"
                stroke-width="15"
                stroke-dasharray="339.29200658769764"
                stroke-dashoffset="75.3906838637864"
              ></circle>
            </svg>
          </div>
          <div className="position-relative">
            <ul className="steps-form">
              {width < 320 || width > 600
                ? stepFormLi.map(ste => (
                    <li
                      className={step == ste.stepIndex ? 'current' : ''}
                      onClick={() => stepSetup(ste.stepIndex)}
                    >
                      <a href="javascript:;">{ste.stepName}</a>
                    </li>
                  ))
                : stepFormLimobile.map(ste => (
                    <li
                      className={
                        step == ste.stepIndex
                          ? 'current mobile-view2'
                          : 'mobile-view2'
                      }
                      onClick={() => stepSetup(ste.stepIndex)}
                    >
                      <a href="javascript:;">{ste.stepName}</a>
                    </li>
                  ))}
            </ul>
            {displayStepFormContent()}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Account;
