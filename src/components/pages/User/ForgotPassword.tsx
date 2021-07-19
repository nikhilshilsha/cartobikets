import React from 'react';
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
} from 'react-bootstrap';

import * as Assets from '../../common/assets';
import Navbar from '../../common/global/CommonComponents/Navbar';
function Login() {
  return (
    <>
      <Navbar />
      <div className="login Register">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col sm={7}>
              <img src={Assets.Pasword} />
            </Col>
            <Col sm={5}>
              <div className="form-box">
                <h5>Reset password</h5>
                <p className="note">
                  Please enter your email address to search for your account.
                </p>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <div className="d-flex ">
                    <Button
                      variant="btn-info"
                      type="submit"
                      className="btn-reset mr-2"
                    >
                      Reset
                    </Button>
                    <Button
                      variant="btn-light"
                      type="submit"
                      className="cancel"
                    >
                      Cancel
                    </Button>
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
