import React,{useState,useEffect,useRef} from 'react';
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
import { useDispatch } from 'react-redux';
import {forgetPassowrd} from "../../../redux/action/userAction";
import {useHistory} from "react-router-dom";
import Validate, {ValidationItems, ValidationButton} from 'react-real-time-form-validation';
function Login() {
  const [email,setEmail]=useState("")
  const dispatch=useDispatch()
  const formValidation = new Validate();
const history=useHistory();
  const loginref = useRef<HTMLButtonElement>(null);
  const loginref1 = useRef<HTMLButtonElement>(null);


  useEffect(() => {
    async function setBtnEvent(){
      loginref.current?.addEventListener('click',(e) => e.preventDefault())
      loginref1.current?.addEventListener('click',(e) => e.preventDefault())
    }
    setBtnEvent()
  },[])

  
  const submitEmail=async(e)=>{
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    formValidation.createValidation('email','notBlank', 'This field is mandatory.');
    
    formValidation.createValidation('email', (email)=>re.test(email), 'Please provide a valid email address.');
    const params={
      email
    } 
const res:any=await dispatch(forgetPassowrd(params))
if(res.status===200)
history.push("/verification-message",email)

  }
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
                    <Form.Control name="email" type="email" placeholder="Enter email" value={email} onChange={(e)=>
                    {formValidation.onChangeStatus(e.target.name, e.target.value);
                      setEmail(e.target.value)}}/>
                       <span style={{color: "red"}}>
                    <ValidationItems name="email" /></span>
                  </Form.Group>

                  <div className="d-flex ">
                    <Button
                    onClick={(e)=>{submitEmail(e)}}
                      variant="btn-info"
                      type="submit"
                      className="btn-reset mr-2"
                      ref={loginref}
                    >
                      Reset
                    </Button>
                    <Button
                      variant="btn-light"
                      type="submit"
                      className="cancel"
                      ref={loginref1}
                      onClick={()=>{history.push("/login")}}
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
