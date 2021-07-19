import React from 'react';
import {
  Container,
  Nav,
  Breadcrumb,
  Form,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import { Row, Col, Button } from '../../common/global/elements';
import * as Assets from '../../common/assets';
import Select from 'react-select';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
export default () => {
  return (
    <div className="account mt-0">
      <Tabs>
        <TabList>
          <Tab>
            <i className="fas fa-portrait"></i> My store
          </Tab>
          <Tab>
            <i className="far fa-clock"></i>{' '}
            module-setting-store.link.working_hours{' '}
          </Tab>
          <Tab>
            <i className="far fa-check-circle"></i>{' '}
            module-setting-store.link.content_text{' '}
          </Tab>
          <Tab>
            <i className="far fa-question-circle"></i>{' '}
            module-managers.department{' '}
          </Tab>
        </TabList>

        <TabPanel>
          <h5 className="p-4 text-center">
            module-setting-store.store.information :
          </h5>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="4">
                Photo
              </Form.Label>
              <Col sm={8}>
                <div className="user-image">
                  <img src={Assets.LogoContact} />
                </div>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="4">
                Email
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="email" placeholder="email address" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="4">
                username
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="email" placeholder="username" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="4">
                first name
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="email" placeholder="first name" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="4">
                nom
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="email" placeholder="nom" />
                <p className="mt-1">
                  First and last name is not displayed to the public.
                </p>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="4">
                Telephone NUmber
              </Form.Label>
              <Col sm={8}>
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
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="4">
                street
              </Form.Label>
              <Col sm={8}>
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
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="4">
                zip code
              </Form.Label>
              <Col sm={8}>
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
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="4">
                Country
              </Form.Label>
              <Col sm={8}>
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
            <Button type="submit" className="mb-2 float-right sve-btn">
              Save
            </Button>
          </Form>
        </TabPanel>
        <TabPanel>
          {' '}
          <h5 className="p-4 text-center">
            module-setting-store.hours.working_hours :
          </h5>
          <Row>
            <Col sm={3}>
              <div className="checkbox-form checkDiv d-flex">
                <input type="checkbox" name="closed" className="isClosed" />
                <span>Monday</span>
              </div>
            </Col>
            <Col sm={4}>
              <div className="d-flex">
                {' '}
                <Select value="module setting" onChange options />
                <div className="mx-md-2 mx-1 d-flex justify-content-center align-items-center">
                  {' '}
                  à{' '}
                </div>
                <Select value="module setting" onChange options />
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col sm={3}>
              <div className="checkbox-form checkDiv d-flex">
                <input type="checkbox" name="closed" className="isClosed" />
                <span>Tuesday</span>
              </div>
            </Col>
            <Col sm={4}>
              <div className="d-flex">
                {' '}
                <Select value="module setting" onChange options />
                <div className="mx-md-2 mx-1 d-flex justify-content-center align-items-center">
                  {' '}
                  à{' '}
                </div>
                <Select value="module setting" onChange options />
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col sm={3}>
              <div className="checkbox-form checkDiv d-flex">
                <input type="checkbox" name="closed" className="isClosed" />
                <span>Wednesday</span>
              </div>
            </Col>
            <Col sm={4}>
              <div className="d-flex">
                {' '}
                <Select value="module setting" onChange options />
                <div className="mx-md-2 mx-1 d-flex justify-content-center align-items-center">
                  {' '}
                  à{' '}
                </div>
                <Select value="module setting" onChange options />
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col sm={3}>
              <div className="checkbox-form checkDiv d-flex">
                <input type="checkbox" name="closed" className="isClosed" />
                <span>Friday</span>
              </div>
            </Col>
            <Col sm={4}>
              <div className="d-flex">
                {' '}
                <Select value="module setting" onChange options />
                <div className="mx-md-2 mx-1 d-flex justify-content-center align-items-center">
                  {' '}
                  à{' '}
                </div>
                <Select value="module setting" onChange options />
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col sm={3}>
              <div className="checkbox-form checkDiv d-flex">
                <input type="checkbox" name="closed" className="isClosed" />
                <span>Sunday</span>
              </div>
            </Col>
            <Col sm={4}>
              <h6>module-setting-store.hours.Closed_today</h6>
              <div className="float-right mt-2">
                <Button type="button" className="btn btn-warning">
                  Save
                </Button>
              </div>
            </Col>
          </Row>
        </TabPanel>
      </Tabs>
    </div>
  );
};
