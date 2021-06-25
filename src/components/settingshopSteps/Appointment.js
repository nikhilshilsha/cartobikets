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
import LogoContact from "../../images/default-user.png";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export default () => {
  return (
    <div className="account mt-0">
      <Tabs>
        <TabList>
          <Tab>
            <i class="fas fa-clock"></i>{" "}
            module-setting-store.appointment.availability
          </Tab>

          <Tab>
            <i class="far fa-question-circle"></i>
            module-setting-store.appointment.auto_reply
          </Tab>
        </TabList>

        <TabPanel>
          {" "}
          <Row>
            <Col sm={2}>
              <div class="checkbox-form checkDiv d-flex">
                <input type="checkbox" name="closed" class="isClosed" />
                <span>Monday</span>
              </div>
            </Col>
            <Col sm={8}>
              <div className="d-flex justify-content-between">
                <h6>module-setting-store.appointment.number_of_appointments</h6>
                <Select value="module setting" onChange options />
                <h6> module-setting-store.appointment.appointment</h6>
              </div>
              <div className="d-flex justify-content-between">
                <div class="checkbox-form checkDiv d-flex">
                  <input type="radio" name="closed" class="isClosed" />
                  <span>module-setting-store.appointment.half_hour</span>
                </div>
                <div class="checkbox-form checkDiv d-flex">
                  <input type="radio" name="closed" class="isClosed" />
                  <span>module-setting-store.appointment.half_hour</span>
                </div>
              </div>
              <div>
                <svg
                  class="svg-inline--fa fa-sun fa-w-16"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="sun"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="#f6cd46"
                    d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
                  ></path>
                </svg>
                <div class="availableListTime">
                  <span class="btn btn-link mr-3 mb-3"> 08:00 - 08:30 </span>
                  <span class="btn btn-link mr-3 mb-3"> 08:30 - 09:00 </span>
                  <span class="btn btn-link mr-3 mb-3"> 09:00 - 09:30 </span>
                  <span class="btn btn-link mr-3 mb-3"> 09:30 - 10:00 </span>
                  <span class="btn btn-link mr-3 mb-3"> 10:00 - 10:30 </span>
                  <span class="btn btn-link mr-3 mb-3"> 10:30 - 11:00 </span>
                  <span class="btn btn-link mr-3 mb-3"> 11:00 - 11:30 </span>
                  <span class="btn btn-link mr-3 mb-3"> 11:30 - 12:00 </span>
                </div>
              </div>
              <div className="">
                <svg
                  class="svg-inline--fa fa-cloud-sun fa-w-20"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="cloud-sun"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="#f6cd46"
                    d="M575.2 325.7c.2-1.9.8-3.7.8-5.6 0-35.3-28.7-64-64-64-12.6 0-24.2 3.8-34.1 10-17.6-38.8-56.5-66-101.9-66-61.8 0-112 50.1-112 112 0 3 .7 5.8.9 8.7-49.6 3.7-88.9 44.7-88.9 95.3 0 53 43 96 96 96h272c53 0 96-43 96-96 0-42.1-27.2-77.4-64.8-90.4zm-430.4-22.6c-43.7-43.7-43.7-114.7 0-158.3 43.7-43.7 114.7-43.7 158.4 0 9.7 9.7 16.9 20.9 22.3 32.7 9.8-3.7 20.1-6 30.7-7.5L386 81.1c4-11.9-7.3-23.1-19.2-19.2L279 91.2 237.5 8.4C232-2.8 216-2.8 210.4 8.4L169 91.2 81.1 61.9C69.3 58 58 69.3 61.9 81.1l29.3 87.8-82.8 41.5c-11.2 5.6-11.2 21.5 0 27.1l82.8 41.4-29.3 87.8c-4 11.9 7.3 23.1 19.2 19.2l76.1-25.3c6.1-12.4 14-23.7 23.6-33.5-13.1-5.4-25.4-13.4-36-24zm-4.8-79.2c0 40.8 29.3 74.8 67.9 82.3 8-4.7 16.3-8.8 25.2-11.7 5.4-44.3 31-82.5 67.4-105C287.3 160.4 258 140 224 140c-46.3 0-84 37.6-84 83.9z"
                  ></path>
                </svg>
                <div class="availableListTime">
                  <span class="btn btn-link mr-3 mb-3"> 08:00 - 08:30 </span>
                  <span class="btn btn-link mr-3 mb-3"> 08:30 - 09:00 </span>
                  <span class="btn btn-link mr-3 mb-3"> 09:00 - 09:30 </span>
                  <span class="btn btn-link mr-3 mb-3"> 09:30 - 10:00 </span>
                  <span class="btn btn-link mr-3 mb-3"> 10:00 - 10:30 </span>
                  <span class="btn btn-link mr-3 mb-3"> 10:30 - 11:00 </span>
                  <span class="btn btn-link mr-3 mb-3"> 11:00 - 11:30 </span>
                  <span class="btn btn-link mr-3 mb-3"> 11:30 - 12:00 </span>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col sm={2}>
              <div class="checkbox-form checkDiv d-flex">
                <input type="checkbox" name="closed" class="isClosed" />
                <span>Tuesday</span>
              </div>
            </Col>
            <Col sm={8}>
              <div className="">
                {" "}
                <h6>module-setting-store.appointment.none</h6>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col sm={2}>
              <div class="checkbox-form checkDiv d-flex">
                <input type="checkbox" name="closed" class="isClosed" />
                <span>Wednesday</span>
              </div>
            </Col>
            <Col sm={8}>
              <div className="">
                {" "}
                <h6>module-setting-store.appointment.none</h6>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col sm={2}>
              <div class="checkbox-form checkDiv d-flex">
                <input type="checkbox" name="closed" class="isClosed" />
                <span>Thursday</span>
              </div>
            </Col>
            <Col sm={8}>
              <div className="">
                {" "}
                <h6>module-setting-store.appointment.none</h6>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col sm={2}>
              <div class="checkbox-form checkDiv d-flex">
                <input type="checkbox" name="closed" class="isClosed" />
                <span>Friday</span>
              </div>
            </Col>
            <Col sm={8}>
              <div className="">
                {" "}
                <h6>module-setting-store.appointment.none</h6>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col sm={2}>
              <div class="checkbox-form checkDiv d-flex">
                <input type="checkbox" name="closed" class="isClosed" />
                <span>Saturday</span>
              </div>
            </Col>
            <Col sm={8}>
              <div className="">
                {" "}
                <h6>module-setting-store.appointment.none</h6>
              </div>
            </Col>
          </Row>
        </TabPanel>
      </Tabs>
    </div>
  );
};
