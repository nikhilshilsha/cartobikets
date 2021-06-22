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
  InputGroup,
} from "react-bootstrap";

import Sign from "../../images/illu-5.png";
import Particular from "../../images/accou_par.png";
import Professional from "../../images/accou_pro.png";

import Navbar from "../common/Navbar";
function Login() {
  return (
    <>
      <Navbar />
      <div className="login Register">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col sm={7}>
              <img src={Sign} />
            </Col>
            <Col sm={5}>
              <div className="form-box">
                <h5>create your account</h5>
                <div className="people d-flex ">
                  <div>
                    <img src={Particular} />
                    Particular
                  </div>
                  <div>
                    <img src={Professional} />
                    Professional
                  </div>
                </div>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Address email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="validationCustomUsername">
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        +32
                      </InputGroup.Text>
                      <Form.Control type="text" placeholder="" required />
                    </InputGroup>
                  </Form.Group>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn-login"
                    >
                      Create an account
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
