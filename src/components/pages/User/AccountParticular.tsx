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
import * as Assets from '../../common/assets';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
function Account() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    function setInnerWidth() {
      window.addEventListener('resize', () => setWidth(window.innerWidth));
    }
    setInnerWidth();
  }, [window.innerWidth]);
  console.log(width);
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
          <div className="box_center fom-div position-relative">
            <ul className="steps-form ">
              {width > 480 ? (
                <li data-steps="1" className="active current">
                  <a href="">
                    <span>
                      1. <strong>My account</strong>
                    </span>
                  </a>
                </li>
              ) : (
                <li data-steps="1" className="active current mobile-view">
                  <a href="">
                    <span>1</span>
                  </a>
                </li>
              )}

              <Form>
                <Form.Group
                  as={Row}
                  className="mb-3 profile-field"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="4">
                    Photo
                  </Form.Label>
                  <Col sm="8">
                    <div className="user-image">
                      <img src={Assets.LogoContact} />
                    </div>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3 profile-field"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="4">
                    Email Address*
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control type="email" placeholder="email address" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3 profile-field"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="4">
                    username*
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control type="email" placeholder="username" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3 profile-field"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="4">
                    First name*
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control type="email" placeholder="first name" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3 profile-field"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="4">
                    nom*
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control type="email" placeholder="nom" />
                    <p className="mt-1">
                      First and last name is not displayed to the public.
                    </p>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3 profile-field"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="4">
                    Telephone NUmber*
                  </Form.Label>
                  <Col sm="8">
                    <Col sm={12} className="pl-0 pr-0">
                      <IntlTelInput
                        containerClassName="intl-tel-input country-list-code"
                        inputClassName="form-control "
                      />
                    </Col>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3 profile-field"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="4">
                    street
                  </Form.Label>
                  <Col sm="8">
                    <Col sm={12} className="pl-0 pr-0">
                      <InputGroup className="mb-3 profile-field">
                        <FormControl aria-label="" />
                        <FormControl aria-label="" />
                      </InputGroup>
                    </Col>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3 profile-field"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="4">
                    zip code*
                  </Form.Label>
                  <Col sm="8">
                    <Col sm={12} className="pl-0 pr-0">
                      <InputGroup className="mb-3 profile-field">
                        <FormControl aria-label="" />
                        <FormControl aria-label="" />
                      </InputGroup>
                    </Col>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3 profile-field"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="4">
                    Country
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control type="email" placeholder="" />
                  </Col>
                </Form.Group>
                <Button type="submit" className="mb-2 float-right sve-btn">
                  Save
                </Button>
              </Form>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Account;
