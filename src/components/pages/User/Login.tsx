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
import { useDispatch } from 'react-redux';
import Validate, {ValidationItems, ValidationButton} from 'react-real-time-form-validation';

import * as Assets from '../../common/assets';
import Navbar from '../../common/global/CommonComponents/Navbar';
import {LoginUser } from "../../../redux/action/userAction";
import {useHistory} from "react-router-dom";
function Login() {
  const formValidation = new Validate();
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const dispatch=useDispatch();
  const history=useHistory();
  const loginref = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    async function setBtnEvent(){
      loginref.current?.addEventListener('click',(e) => e.preventDefault())
     
    }
    setBtnEvent()
   
    
    
  },[])
  const onLoginSubmit=async(e)=>{
  
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
    formValidation.createValidation('email', 'notBlank', 'This field is mandatory.');
    formValidation.createValidation('password', 'notBlank', 'This field is mandatory.');
    formValidation.createValidation('email', (email)=>re.test(email), 'Please provide a valid email address.');
    formValidation.createValidation('password', (password) => password.length >= 6, 'The password must be at least 6 characters.');
    
    const params={
  email,password
}
if(email.length!==0 &&password.length>=6 && re.test(email)){
 const res: any = await dispatch(LoginUser(params))

if(res.status===200 ){
  localStorage.setItem("token",res.data.token);
  history.push("/")
  
}
else{
  history.push("/login")
}}
else{
  history.push("/login")
}

  }
  return (
    <>
      <Navbar />
      <div className="login">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col sm={7}>
              <img src={Assets.LoginImg} />
            </Col>
            <Col sm={5}>
              <div className="form-box">
                <h5>Log in</h5>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name="email" type="email" value={email} placeholder="Enter email" onChange={(e)=>{
  
                      formValidation.onChangeStatus(e.target.name, e.target.value);
                      setEmail(e.target.value)}}/>
                       <span style={{color: "red"}}>
                    <ValidationItems name="email" /></span>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name="password" type="password" value={password} placeholder="Password" onChange={(e)=>{
                      formValidation.onChangeStatus(e.target.name, e.target.value);
                      setPassword(e.target.value)}} />
                       <span style={{color: "red"}}>
                       <ValidationItems name="password" /></span>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button onClick={(e)=>onLoginSubmit(e)}
                      variant="primary"
                      ref={loginref}
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
