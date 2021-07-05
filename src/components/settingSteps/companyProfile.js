import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Container,
  Dropdown,
  Nav,
  Breadcrumb,
  Form,
  InputGroup,
  FormControl,
  Tabs,
  Tab,
} from "react-bootstrap";
import LogoContact from "../../images/default-user.png";
import CommonModal from "../common/commonModal";
import Close from "../../images/close.png";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
export default () => {
  const [open, SetOpen] = useState(false);
  const closeIcon = (
    <>
      <img src={Close} className="closeIco" />
    </>
  );
  return (
    <div className="company mt-0">
      <div className="company-header">
        <h4>module-profile.title.branch</h4>
        <Button
          className="btn-brand company-btn"
          onClick={() => SetOpen(!open)}
        >
          {" "}
          Create a subsidiary{" "}
        </Button>
      </div>
      <Dropdown.Divider />
      <CommonModal
        open={open}
        onClose={() => SetOpen(!open)}
        className={{ modal: "ModalWidth", closeButton: "crossbutton" }}
        closeIcon={closeIcon}
      >
        <h5>module-profile.subsidiary.title</h5>
        <div className="subsidary">
          <h6>module-profile.subsidiary.text</h6>
          <Form className="account mt-0">
            <Form.Group
              as={Row}
              className="mb-3 profile-field"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="3">
                announces.activity.branch_name*
              </Form.Label>
              <Col sm="9">
                <Form.Control type="email" placeholder="email address" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3 profile-field"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="3">
                Link *
              </Form.Label>
              <Col sm="9">
                <Form.Control type="email" placeholder="username" />
                <p className="mt-1">
                  The link can only contain alphanumeric characters (A to Z, 0
                  to 9) and (-). They must not contain generic terms or
                  extensions (.com or .net).
                </p>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3 profile-field"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="3">
                Telephone NUmber
              </Form.Label>
              <Col sm="9">
                <Col sm={12} className="pl-0 pr-0">
                  <IntlTelInput
                    containerClassName="intl-tel-input country-list-code"
                    inputClassName="form-control "
                  />
                </Col>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3 profile-field"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="3">
                street
              </Form.Label>
              <Col sm="9">
                <Col sm={12} className="pl-0 pr-0">
                  <InputGroup className="mb-3">
                    <FormControl aria-label="" />
                    <FormControl aria-label="" />
                  </InputGroup>
                </Col>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3 profile-field"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="3">
                zip code
              </Form.Label>
              <Col sm="9">
                <Col sm={12} className="pl-0 pr-0">
                  <InputGroup className="mb-3">
                    <FormControl aria-label="" />
                    <FormControl aria-label="" />
                  </InputGroup>
                </Col>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3 profile-field"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="3">
                Country
              </Form.Label>
              <Col sm="9">
                <Col sm={12} className="pl-0 pr-0">
                  <InputGroup className="mb-2">
                    <InputGroup.Text>@</InputGroup.Text>
                    <FormControl
                      id="inlineFormInputGroup"
                      placeholder="Username"
                    />
                  </InputGroup>
                </Col>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3 profile-field"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="3">
                Date of foundation
              </Form.Label>
              <Col sm="9">
                <Form.Control type="email" placeholder="Date of foundation" />
              </Col>
            </Form.Group>
            <div className="profile-button-container">
              <Button type="submit" className="mb-2 float-right sve-btn">
                Save
              </Button>
            </div>
          </Form>
        </div>
      </CommonModal>
    </div>
  );
};
