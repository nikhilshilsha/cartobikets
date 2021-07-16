import React from "react";
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
import Select from "react-select";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import LogoContact from "../../images/default-user.png";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export default () => {
  return (
    <div className="account mt-0">
      <div className="box-center">
        <div>Add a seller</div>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="4">
              vendor name:
            </Form.Label>
            <Col sm="8">
              <Form.Control type="email" placeholder=" vendor name" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="4">
              module
              <br />
              -managers.department :
            </Form.Label>
            <Col sm="8">
              <Form.Control type="email" placeholder="first name" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
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
        <h5>page.shop.contact.our_memeber :</h5>
        <div className="input-div d-flex justify-content-between align-items-center">
          <Select value="module setting" onChange options />
          <Select value="module setting" onChange options />
          <Select value="module setting" onChange options />
        </div>
        <div className="table-wrap table-responsive  mb-3">
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
                  <i className="fas fa-check"></i>
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
                  <i className="fas fa-check"></i>
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
                  <i className="fas fa-check"></i>
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
  );
};
