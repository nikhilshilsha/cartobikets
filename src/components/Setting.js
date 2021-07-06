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
} from "react-bootstrap";

import LogoContact from "../images/default-user.png";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";
import Profile from "../images/default-user.png";
import Vecle from "../images/default-img.png";
import ProfileView from "./settingSteps/Profile";
import Settings from "./settingSteps/Settings";
import StoreLinks from "./settingSteps/StoreLinks";
import CompanyProfile from "./settingSteps/companyProfile";

function Seting(props) {
  const [activeStep, setActiveStep] = useState("MyProfile");
  const setTabContent = () => {
    switch (activeStep) {
      case "MyProfile":
        return <ProfileView />;
      case "Settings":
        return <Settings />;
      case "StoreLinks":
        return <StoreLinks />;
      case "Store":
        return <CompanyProfile />;
      default:
        break;
    }
  };
  const [setting, setsetting] = useState(false);
  const [store, setstore] = useState(false);

  return (
    <>
      <Navbar className="mobile-nav" />
      <Sidebar>
        <div className="auction-list p-2">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Breadcrumb>
                <Breadcrumb.Item active>Home</Breadcrumb.Item>

                <Breadcrumb.Item href="#">breadcrumb.account</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              {" "}
              <Button variant="warning">Ad an Add</Button>
            </div>
          </div>
          <Row className="accoutSet">
            <Col sm={4}>
              <div className="left-aside">
                <div className="medi-object d-flex">
                  <img src={Profile} />
                  <div className="">
                    <p>Kors Mentenen </p>
                    <p>professional vendor</p>
                  </div>
                </div>
                <div className="module">
                  <ul className="screen-module">
                    <li onClick={() => setActiveStep("MyProfile")}>
                      <i class="fas fa-user"></i> module-profile.link.MyProfile
                    </li>
                    <li onClick={() => setActiveStep("Settings")}>
                      <i class="fas fa-wrench"></i> module-profile.link.setting
                    </li>
                    <li onClick={() => setActiveStep("StoreLinks")}>
                      <i class="far fa-comment-dots"></i>
                      module-setting-store.link.setting
                    </li>
                    <li>
                      <i class="fas fa-store"></i> My Store
                      <ul>
                        <li
                          className="text-warning mt-2"
                          onClick={() => setActiveStep("Store")}
                        >
                          <img src={Vecle} /> Boutique Mda{" "}
                          <Button
                            type="submit"
                            className="mb-2 d-flex justify-content-center align-items-center create-btn btn-brand-light "
                          >
                            + Create a shop
                          </Button>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="mobile-module ">
                  <ul className="">
                    <li onClick={() => setActiveStep("MyProfile")}>
                      <i class="fas fa-user"></i>
                    </li>
                    <li
                      onClick={() => {
                        setActiveStep("Settings");
                        setstore(false);
                      }}
                    >
                      <i class="fas fa-wrench"></i>
                    </li>
                    <li
                      onClick={() => {
                        setActiveStep("StoreLinks");
                        setstore(false);
                      }}
                    >
                      <i class="far fa-comment-dots"></i>
                    </li>
                    <li>
                      <i
                        class="fas fa-store"
                        onClick={() => setstore(!store)}
                      ></i>
                    </li>
                  </ul>
                  {store && (
                    <ul className="mb-3">
                      <li
                        className="text-warning mt-2"
                        onClick={() => setActiveStep("Store")}
                      >
                        <img src={Vecle} /> Boutique Mda{" "}
                        <Button
                          type="submit"
                          className="mb-2 d-flex justify-content-center align-items-center create-btn btn-brand-light "
                        >
                          + Create a shop
                        </Button>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </Col>
            <Col sm={8}>{setTabContent()}</Col>
          </Row>
        </div>
      </Sidebar>
    </>
  );
}

export default Seting;
