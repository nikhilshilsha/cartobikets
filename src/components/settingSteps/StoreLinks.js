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
  Tabs,
  Tab,
} from "react-bootstrap";
import LogoContact from "../../images/default-user.png";

export default () => {
  return (
    <div className="account mt-0">
      <Row>
        <Col sm={3} className="">
          <p  className="mb">module-profile.comments.visible*</p>
        </Col>
        <Col sm={9} className="">
          <div>
            {" "}
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                id="disabledComments"
                name="disabledComments"
                class="custom-control-input"
              />
              <label
                for="disabledComments"
                class="custom-control-label"
              ></label>
            </div>
            <span class="form-text text-muted">
              module-profile.comments.descriptions
            </span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={3} className="">
          <p  className="mb">Telephone number*</p>
        </Col>
        <Col sm={9} className="">
          <div>
            {" "}
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                id="disabledComments"
                name="disabledComments"
                class="custom-control-input"
              />
              <label
                for="disabledComments"
                class="custom-control-label"
              ></label>
            </div>
            <span class="form-text text-muted">
              module-profile.comments.descriptions
            </span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={3} className="">
          <p  className="mb">email address*</p>
        </Col>
        <Col sm={9} className="">
          <div>
            {" "}
            <div>
              {" "}
              <div class="custom-control custom-switch">
                <input
                  type="checkbox"
                  id="disabledComments"
                  name="disabledComments"
                  class="custom-control-input"
                />
                <label
                  for="disabledComments"
                  class="custom-control-label"
                ></label>
              </div>
              <span class="form-text text-muted">
                module-profile.comments.descriptions
              </span>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={3} className="">
          <p  className="mb">fields.address*</p>
        </Col>
        <Col sm={9} className="">
          <div>
            {" "}
            <div>
              {" "}
              <div class="custom-control custom-switch">
                <input
                  type="checkbox"
                  id="disabledComments"
                  name="disabledComments"
                  class="custom-control-input"
                />
                <label
                  for="disabledComments"
                  class="custom-control-label"
                ></label>
              </div>
              <span class="form-text text-muted">
                module-profile.comments.descriptions
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
