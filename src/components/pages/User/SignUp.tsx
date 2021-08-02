import React,{useState} from 'react';
import { Container } from 'react-bootstrap';

import * as Assets from '../../common/assets';
import { useDispatch } from 'react-redux';
import {registerUser} from "../../../redux/action/userAction";
import Navbar from '../../common/global/CommonComponents/Navbar';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button, Form } from '../../common/global/elements';
function Signup() {
  const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [phone,setPhone]=useState();
const [role_id,setRoleid]=useState("");
  const history = useHistory();
  const dispatch=useDispatch();
  

  const submitSignup=async()=>{
    const params={
      email,password,phone,role_id,
    }
    const res: any = await dispatch(registerUser(params))
    if(res.status===200){
      localStorage.setItem("token",res.data.token);
      history.push("/login")
      
    }
    else{
      history.push("/signup")
    }
  }
  const VerifyEmailFields = [
    {
      type: 'email',
      name: 'email',
      placeholder: 'Enter Email Id',
      className: '',
      controlId: 'formEmail',
     change:(e)=>{setEmail(e?.target.value)},
    },]
  const SignupFields = [
    {
      type: 'email',
      name: 'email',
      placeholder: 'Enter Email Id',
      className: '',
      controlId: 'formEmail',
     change:(e)=>{setEmail(e?.target.value)},
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Enter password',
      className: '',
      controlId: 'formPassword',
      change:(e)=>{setPassword(e?.target.value)}
    },
    {
      type: 'number',
      name: 'phone',
      placeholder: 'Enter Phone Number',
      className: '',
      controlId: 'formPhone',
      change:(e)=>{setPhone(e?.target.value)}
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
                      Verify your email address:<strong>{history.location.state}</strong>
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
                      <div onClick={()=>setRoleid("3")}>
                        <img src={Assets.Particular} />
                        Particular
                      </div>
                      <div onClick={()=>setRoleid("4")}>
                        <img src={Assets.Professional} />
                        Professional
                      </div>
                    </div>
                    <Form fields={SignupFields}  />
                    <div className="d-flex justify-content-between align-items-center">
                      <Button
                        variant="primary"
                        type="submit"
                        className="btn-login"
                        onClick={()=>submitSignup()}
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
