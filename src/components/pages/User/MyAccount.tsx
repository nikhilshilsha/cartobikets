import React, { useState } from 'react';
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
  return (
    <>
      <Navbar />
      <Container>
        <div className="account">
          <div className="box_center fom-div">
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
          </div>
        </div>
      </Container>
    </>
  );
}

export default Account;
