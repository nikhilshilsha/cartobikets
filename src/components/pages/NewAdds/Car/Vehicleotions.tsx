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
import { Accordion } from '../../../common/global/elements';
import { AccordianArray } from '../../../../utils/common';
import Securityoption from '../Car/AccordionContent/Securityoption';
import Comfortoption from '../Car/AccordionContent/Comfortoption';
import OutdoorEqipment from '../Car/AccordionContent/OutdoorEqipment';
import Others from '../Car/AccordionContent/Others';

function Account() {
  const [step, setStep] = useState(1);
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
        return <Securityoption />;
      case 2:
        return <Comfortoption />;
      case 3:
        return <OutdoorEqipment />;
      case 4:
        return <Others />;
      default:
        break;
    }
  };
  return (
    <>
      <Container>
        <div className="vehicleDetail">
          <div className="d-flex mb-3">
            <h5>choose the vehicle options</h5>
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2 vehicle-search"
              aria-label="Search"
            />
            <div className="ico-serach">
              <svg
                className="svg-inline--fa fa-search fa-w-16"
                aria-hidden="true"
                focusable="false"
                data-prefix="fa"
                data-icon="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="#ccc"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="accord-data">
          {AccordianArray.map(accord => (
            <Accordion
              accordianClassName="accordion-div"
              buttonclassName="button-accord"
              buttonText={accord.buttonText}
              accordianText={displayStepFormContent()}
              Onclick={() => {
                stepSetup(accord.step);
              }}
              currentStep={step}
              accordianStep={accord.step}
            />
          ))}
        </div>
        </div>
      </Container>
    </>
  );
}

export default Account;
