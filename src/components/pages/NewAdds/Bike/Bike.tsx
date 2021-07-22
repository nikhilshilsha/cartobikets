import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Container,
  Nav,
  Breadcrumb,
  Form,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import { Button } from '../../../common/global/elements';
import BikeDetails from './BikeDetails';
import Photos from './Photos';
import DetailsAdd from './DetailsAdd';


// import Sidebar from '../../../common/global/CommonComponents/Sidebar';

import { MotorSteps, stepFormLimobile } from '../../../../utils/common';
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
        return <BikeDetails />;
      case 2:
        return <Photos />;
      case 3:
        return <DetailsAdd />;

      default:
        break;
    }
  };
  return (
    // <Sidebar>
    <Container>
      <div className="account auction-list car-list">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Breadcrumb>
              <Breadcrumb.Item active>Home</Breadcrumb.Item>

              <Breadcrumb.Item href="#">
                breadcrumb.create-announce-moto-page
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            {' '}
            <Button variant="warning" type="submit">
              Add an Add
            </Button>
          </div>
        </div>
        <div className="loading d-flex justify-content-between align-items-center">
          <span className=""></span>
        </div>

        <div className="position-relative">
          <div className="d-flex justify-content-between">
            <ul className="steps-form">
              {width < 320 || width > 600
                ? MotorSteps.map(ste => (
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
            <div className="right-ico">
              <i className="fas fa-motorcycle"></i>
            </div>
          </div>
          {displayStepFormContent()}
        </div>
      </div>
    </Container>
    // </Sidebar>
  );
}

export default Account;
