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
import Select from 'react-select';

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
                className="mb-3 profile-field "
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
                  N TVA*
                </Form.Label>
                <Col sm="8">
                  <Col sm={12} className="pl-0 pr-0">
                    <InputGroup className="mb-2">
                      <InputGroup.Text>@</InputGroup.Text>
                      <FormControl
                        id="inlineFormInputGroup"
                        placeholder="Username"
                      />
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
                  store name*
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="email" placeholder="store name" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3 profile-field"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4">
                  Link
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="email" placeholder="nom" />
                  <p className="mt-1">module-setting-store.slug_roles</p>
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
              <Form.Group
                as={Row}
                className="mb-3 profile-field"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4">
                  Date of foundation
                </Form.Label>
                <Col sm="8">
                  <Col sm={12} className="pl-0 pr-0">
                    <Select />
                  </Col>
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
