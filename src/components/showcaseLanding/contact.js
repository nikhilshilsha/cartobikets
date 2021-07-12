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
  Card,
} from "react-bootstrap";
import ShowcaseNav from "../common/showcaseNav";
import "react-tabs/style/react-tabs.css";
import Car1 from "../../images/slider/05.jpg";
import Car2 from "../../images/default-vehicle.png";
import Logo from "../../images/logo.png";
import Contact from "../ShowcaseSub/Contact";
import Banner from "../common/banner";
import ShowcaseFooter from "../common/showcaseFooter";
import Department from "../ShowcaseSub/Department";
import Marketing from "../ShowcaseSub/Marketing";
import Member from "../ShowcaseSub/Member";

export default (props) => {
  const [activeStep, setActiveStep] = useState("Contact");
  const setTabContent = () => {
    switch (activeStep) {
      case "Contact":
        return <Contact />;
      case "Department":
        return <Department />;
      case "Marketing":
        return <Marketing />;
      case "Member":
        return <Member />;

      default:
        break;
    }
  };
  return (
    <>
      <ShowcaseNav />
      <div className="contact-desc">
        <div className="logo-d">
          {" "}
          <img src={Logo} className="" />
        </div>
        <Container>
          <div className="contact-content">
            {" "}
            <h2 class="titleHours">
              {" "}
              module-setting-store.link.working_hours{" "}
            </h2>
            <Row>
              <Col sm={6}>
                <ul>
                  <li>
                    <svg
                      class="svg-inline--fa fa-business-time fa-w-20"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="business-time"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="#fdc949"
                        d="M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144 144-64.41 144-144-64.41-144-144-144zm64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71v12.58zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32zM320 96H192V64h128v32zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48z"
                      ></path>
                    </svg>
                    <strong>status:</strong>
                  </li>
                  <li>
                    <svg
                      class="svg-inline--fa fa-user-clock fa-w-20"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="user-clock"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="#fdc949"
                        d="M496 224c-79.6 0-144 64.4-144 144s64.4 144 144 144 144-64.4 144-144-64.4-144-144-144zm64 150.3c0 5.3-4.4 9.7-9.7 9.7h-60.6c-5.3 0-9.7-4.4-9.7-9.7v-76.6c0-5.3 4.4-9.7 9.7-9.7h12.6c5.3 0 9.7 4.4 9.7 9.7V352h38.3c5.3 0 9.7 4.4 9.7 9.7v12.6zM320 368c0-27.8 6.7-54.1 18.2-77.5-8-1.5-16.2-2.5-24.6-2.5h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h347.1c-45.3-31.9-75.1-84.5-75.1-144zm-96-112c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128z"
                      ></path>
                    </svg>
                    <strong> page.shop.contact.other_availability:</strong>
                  </li>
                </ul>
              </Col>
              <Col sm={6}>
                <div className="hour-content">
                  <div className="hoursList">
                    <div className="day">Monday</div>
                    <div className="date">10:00 to 18: 00</div>
                  </div>
                  <div className="hoursList">
                    <div className="day">Tuesday</div>
                    <div className="date">10:00 to 18: 00</div>
                  </div>
                  <div className="hoursList">
                    <div className="day">Wednesday</div>
                    <div className="date">10:00 to 18: 00</div>
                  </div>
                  <div className="hoursList">
                    <div className="day">Thursday</div>
                    <div className="date">10:00 to 18: 00</div>
                  </div>
                  <div className="hoursList">
                    <div className="day">Friday</div>
                    <div className="date">10:00 to 18: 00</div>
                  </div>
                  <div className="hoursList">
                    <div className="day">Saturday</div>
                    <div className="date">10:00 to 18: 00</div>
                  </div>
                  <div className="hoursList">
                    <div className="day">Sunday</div>
                    <div className="date">10:00 to 18: 00</div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="subsidry">
            <p className="sub-text">page.shop.contact.our_subsidiary</p>
            <div className="tab-data">
              <ul>
                <li
                  onClick={() => {
                    setActiveStep("Contact");
                  }}
                  className={activeStep == "Contact" ? "active" : ""}
                >
                  contact
                </li>
                <li
                  onClick={() => {
                    setActiveStep("Department");
                  }}
                  className={activeStep == "Department" ? "active" : ""}
                >
                  Département Commercial
                </li>
                <li
                  onClick={() => {
                    setActiveStep("Marketing");
                  }}
                  className={activeStep == "Marketing" ? "active" : ""}
                >
                  Département Marketing
                </li>
                <li
                  onClick={() => {
                    setActiveStep("Member");
                  }}
                  className={activeStep == "Member" ? "active" : ""}
                >
                  Département de vente
                </li>
              </ul>
            </div>
            {setTabContent()}
          </div>
        </Container>
        <ShowcaseFooter />
      </div>
    </>
  );
};
