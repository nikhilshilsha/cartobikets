import React, { useState } from "react";
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
} from "react-bootstrap";
import Navbar from "../common/Navbar";
import LogoContact from "../../images/default-user.png";
function Account() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="account">
          <div className="box_center">
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4">
                  N TVA
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
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4">
                  store name
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="email" placeholder="store name" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
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
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4">
                  Telephone NUmber
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
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4">
                  street
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
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4">
                  zip code
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
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4">
                  Country
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
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4">
                  Date of foundation
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