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
import * as Assets from '../../common/assets';
import Navbar from '../../common/global/CommonComponents/Navbar';
import {LoginUser } from "../../../redux/action/userAction";
function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const dispatch=useDispatch();
  const loginref = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    async function setBtnEvent(){
      loginref.current?.addEventListener('click',(e) => e.preventDefault())
    }
    setBtnEvent()
  },[])
  const onLoginSubmit=async(e)=>{
  
   const params={
  email,password
}
 const res=await dispatch(LoginUser(params));

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
                    <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
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
