import React from "react";
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
import LogoContact from "../../images/default-user.png";

export default () => {
  return (
    <Form className="account mt-0">
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="4">
          Photo
        </Form.Label>
        <Col sm="8">
          <div className="user-image">
            <img src={LogoContact} />
          </div>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="4">
          Email
        </Form.Label>
        <Col sm="8">
          <Form.Control type="email" placeholder="email address" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="4">
          username
        </Form.Label>
        <Col sm="8">
          <Form.Control type="email" placeholder="username" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="4">
          first name
        </Form.Label>
        <Col sm="8">
          <Form.Control type="email" placeholder="first name" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="4">
          nom
        </Form.Label>
        <Col sm="8">
          <Form.Control type="email" placeholder="nom" />
          <p className="mt-1">
            First and last name is not displayed to the public.
          </p>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="4">
          Telephone NUmber
        </Form.Label>
        <Col sm="8">
          <Col sm={12} className="pl-0 pr-0">
            <InputGroup className="mb-2">
              <InputGroup.Text>@</InputGroup.Text>
              <FormControl id="inlineFormInputGroup" placeholder="Username" />
            </InputGroup>
          </Col>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="4">
          street
        </Form.Label>
        <Col sm="8">
          <Col sm={12} className="pl-0 pr-0">
            <InputGroup className="mb-2">
              <InputGroup.Text>@</InputGroup.Text>
              <FormControl id="inlineFormInputGroup" placeholder="Username" />
            </InputGroup>
          </Col>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="4">
          zip code
        </Form.Label>
        <Col sm="8">
          <Col sm={12} className="pl-0 pr-0">
            <InputGroup className="mb-2">
              <InputGroup.Text>@</InputGroup.Text>
              <FormControl id="inlineFormInputGroup" placeholder="Username" />
            </InputGroup>
          </Col>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="4">
          Country
        </Form.Label>
        <Col sm="8">
          <Col sm={12} className="pl-0 pr-0">
            <InputGroup className="mb-2">
              <InputGroup.Text>@</InputGroup.Text>
              <FormControl id="inlineFormInputGroup" placeholder="Username" />
            </InputGroup>
          </Col>
        </Col>
      </Form.Group>
      <Button
        type="submit"
        className="mb-2 d-flex justify-content-center align-items-center sve-btn"
      >
        Save
      </Button>
    </Form>
  );
};
