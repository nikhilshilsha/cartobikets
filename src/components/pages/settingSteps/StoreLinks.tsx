import React from 'react';
import {
 
  Button,
  Container,
  Nav,
  Breadcrumb,
  Form,
  InputGroup,
  FormControl,
  Tabs,
  Tab,
} from 'react-bootstrap';
// import LogoContact from '../../images/default-user.png';
import { Row, Col } from '../../common/global/elements';

export default () => {
  return (
    <div className="account mt-0">
      <Row>
        <Col sm={3} className="">
          <p className="mb">module-profile.comments.visible*</p>
        </Col>
        <Col sm={9} className="">
          <div>
            {' '}
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                id="disabledComments"
                name="disabledComments"
                className="custom-control-input"
              />
              <label
                htmlFor="disabledComments"
                className="custom-control-label"
              ></label>
            </div>
            <span className="form-text text-muted">
              module-profile.comments.descriptions
            </span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={3} className="">
          <p className="mb">Telephone number*</p>
        </Col>
        <Col sm={9} className="">
          <div>
            {' '}
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                id="disabledComments"
                name="disabledComments"
                className="custom-control-input"
              />
              <label
                htmlFor="disabledComments"
                className="custom-control-label"
              ></label>
            </div>
            <span className="form-text text-muted">
              module-profile.comments.descriptions
            </span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={3} className="">
          <p className="mb">email address*</p>
        </Col>
        <Col sm={9} className="">
          <div>
            {' '}
            <div>
              {' '}
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  id="disabledComments"
                  name="disabledComments"
                  className="custom-control-input"
                />
                <label
                  htmlFor="disabledComments"
                  className="custom-control-label"
                ></label>
              </div>
              <span className="form-text text-muted">
                module-profile.comments.descriptions
              </span>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={3} className="">
          <p className="mb">fields.address*</p>
        </Col>
        <Col sm={9} className="">
          <div>
            {' '}
            <div>
              {' '}
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  id="disabledComments"
                  name="disabledComments"
                  className="custom-control-input"
                />
                <label
                  htmlFor="disabledComments"
                  className="custom-control-label"
                ></label>
              </div>
              <span className="form-text text-muted">
                module-profile.comments.descriptions
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
