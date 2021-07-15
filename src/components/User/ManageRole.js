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
} from "react-bootstrap";
import Navbar from "../common/Navbar";
import LogoContact from "../../images/default-user.png";
function Role() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="account ">
          <div className="box-center fom-div">
            <div>Add a seller</div>
            <Form>
              <Form.Group
                as={Row}
                className="mb-3 profile-field"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4">
                  vendor name:
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="email" placeholder=" vendor name" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3 profile-field"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4">
                  module
                  <br />
                  -managers.department :
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="email" placeholder="first name" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3 profile-field"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4">
                  Role :
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="email" placeholder="first name" />
                </Col>
              </Form.Group>

              <Button type="submit" className="btn btn-primary addSeller">
                {" "}
                add{" "}
              </Button>
            </Form>
          </div>
          <div className="filter">
            <p>members</p>
            <div className="input-div d-flex justify-content-between align-items-center">
              <Form.Control type="" placeholder="" />
              <Form.Control type="" placeholder="" />
              <Form.Control type="" placeholder="" />
            </div>
            <div className="table-role">
              <Table responsive>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>no of person</th>
                    <th>address email</th>

                    <th>phone number</th>
                    <th>Role</th>
                    <th>DEpartment</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Elon musk</td>
                    <td>Jennider@gmail.com</td>
                    <td>+76578 74638</td>
                    <td>
                      <Form.Control type="" placeholder="" />
                    </td>
                    <td>
                      <Form.Control type="" placeholder="" />
                    </td>

                    <td>
                      <i class="fas fa-check"></i>
                    </td>
                    <td>
                      <div className="d-flex justify-content-between align-items-center">
                        {" "}
                        <i className="fas fa-pen" />
                        <i className="fas fa-trash-alt" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Elon musk</td>
                    <td>Jennider@gmail.com</td>
                    <td>+76578 74638</td>
                    <td>
                      <Form.Control type="" placeholder="" />
                    </td>
                    <td>
                      <Form.Control type="" placeholder="" />
                    </td>

                    <td>
                      <i class="fas fa-check"></i>
                    </td>
                    <td>
                      <div className="d-flex justify-content-between align-items-center">
                        {" "}
                        <i className="fas fa-pen" />
                        <i className="fas fa-trash-alt" />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>Elon musk</td>
                    <td>Jennider@gmail.com</td>
                    <td>+76578 74638</td>
                    <td>
                      <Form.Control type="" placeholder="" />
                    </td>
                    <td>
                      <Form.Control type="" placeholder="" />
                    </td>

                    <td>
                      <i class="fas fa-check"></i>
                    </td>
                    <td>
                      <div className="d-flex justify-content-between align-items-center">
                        {" "}
                        <i className="fas fa-pen" />
                        <i className="fas fa-trash-alt" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Role;
