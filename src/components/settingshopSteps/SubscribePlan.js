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
  Table,
  Card,
} from "react-bootstrap";
import Select from "react-select";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LogoContact from "../../images/default-user.png";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default () => {
  const [formType, setformType] = useState("signin");
  return (
    <div className="account mt-0">
      <div className="priceTab">
        <div className="toggle">
          <div
            className={formType === "signin" ? "signInActive" : "signIn"}
            onClick={() => setformType("signin")}
          >
            Sign in
          </div>
          <div
            className={formType === "signup" ? "signupActive" : "signUp"}
            onClick={() => setformType("signup")}
          >
            Sign up
          </div>
        </div>
        <Row className="mt-4 card-subscribe">
          <Col sm={3}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Link href="#">Lorem ipsum dolor sit amet</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card>
              <h4 className="text-center">Basic</h4>
              <Card.Body>
                <Card.Title Name="text-brand mb-2 price_plan">
                  <b>$12</b> <small>/ année</small>
                </Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
                <Button variant="primary">Choose Plan</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card>
              <h4 className="text-center">Standard</h4>
              <Card.Body>
                <Card.Title Name="text-brand mb-2 price_plan">
                  <b>$12</b> <small>/ année</small>
                </Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
                <Button variant="primary">Choose Plan</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card>
              <h4 className="text-center">Business</h4>
              <Card.Body>
                <Card.Title Name="text-brand mb-2 price_plan">
                  <b>$12</b> <small>/ année</small>
                </Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
                <Button variant="primary">Choose Plan</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
