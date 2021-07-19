import React from 'react';
import { Container } from 'react-bootstrap';

import * as Assets from '../../common/assets';

import Navbar from '../../common/global/CommonComponents/Navbar';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button, Form } from '../../common/global/elements';
function Signup() {
  const history = useHistory();
  console.log(history.location, 'location');
  const SignupFields = [
    {
      type: 'email',
      name: 'email',
      placeholder: 'Enter Email Id',
      className: '',
      controlId: 'formEmail',
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Enter password',
      className: '',
      controlId: 'formPassword',
    },
  ];
  return (
    <>
      <Navbar />
      <div className="login Register">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col sm={7}>
              <img src={Assets.Sign} />
            </Col>
            <Col sm={5}>
              <div className="form-box">
                {history.location.pathname === '/verify-success' ? (
                  <div className="check-div">
                    <i className="far fa-check-circle"></i>
                    <p>
                      thanks for checking your inbox to complete registartion we
                      have sent registration link at :
                    </p>
                    <p className="font-weight-bold">ui@gmail.com</p>
                  </div>
                ) : history.location.pathname === '/verification-message' ? (
                  <div className="verify-div">
                    <p className="pb-2">
                      Verify your email address:<strong> ui@gmail.com</strong>
                    </p>
                    <p>
                      Before Procedding please check your email for
                      verification. if you did not receive the email, CLICK HERE
                      TO REQUEST ANOTHER
                    </p>
                  </div>
                ) : (
                  <>
                    <h5>create your account</h5>
                    <div className="people d-flex ">
                      <div>
                        <img src={Assets.Particular} />
                        Particular
                      </div>
                      <div>
                        <img src={Assets.Professional} />
                        Professional
                      </div>
                    </div>
                    <Form fields={SignupFields} />
                    <div className="d-flex justify-content-between align-items-center">
                      <Button
                        variant="primary"
                        type="submit"
                        className="btn-login"
                      >
                        Create an account
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Signup;
