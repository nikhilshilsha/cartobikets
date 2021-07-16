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
  Tabs,
  Tab,
} from "react-bootstrap";
// import LogoContact from "../../images/default-user.png";

export default () => {
  return (
    <div className="account mt-0">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="EmailAddress"></Tab>
        <Tab eventKey="profile" title="Password"></Tab>
        <Tab
          eventKey="contact"
          title="module-profile.link.management"
          disabled
        ></Tab>
      </Tabs>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="4" className="text-center">
          module-profile.setting.fields.currentMail*
        </Form.Label>
        <Col sm="8">
          <Form.Control type="email" placeholder="" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="4" className="text-center">
          module-profile.setting.fields.newMail*
        </Form.Label>
        <Col sm="8">
          <Form.Control type="email" placeholder="" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="4" className="text-center">
          module-profile.setting.fields.confirmMail*
        </Form.Label>
        <Col sm="8">
          <Form.Control type="email" placeholder="" />
        </Col>
      </Form.Group>
    </div>
  );
};
