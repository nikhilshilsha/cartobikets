import React from "react";
import {
  Row,
  Col,
  Button,
  Container,
  Nav,
  Breadcrumb,
  Card,
  Form,
  Table,
} from "react-bootstrap";

import LoginImg from "../../images/illu-2.png";
import Navbar from "../common/Navbar";
function Login() {
  return (
    <>
      <Navbar />
      <div className="login">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col sm={7}>
              <img src={LoginImg} />
            </Col>
            <Col sm={5}>
              <div className="form-box">
                <h5>Log in</h5>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn-login"
                    >
                      Login
                    </Button>
                  </div>
                  <div className="link d-flex justify-content-between align-items-center mt-1">
                    <a href="/forgotpassword">Forgot your password ?</a>
                    <a href="/signup">sign_up</a>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Login;
