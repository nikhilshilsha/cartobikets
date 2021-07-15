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

import Sidebar from "./common/Sidebar";
import Profile from "../images/default-user.png";
import Vecle from "../images/default-img.png";
import ProfileView from "./settingSteps/Profile";
import MyStore from "./settingshopSteps/MyStore";
import StoreLinks from "./settingSteps/StoreLinks";
import ManageRole from "./settingshopSteps/ManageRole";
import RemoveStore from "./settingshopSteps/RemoveStore";
import Appointment from "./settingshopSteps/Appointment";
import AccountValidate from "./User/AccountValidate";
import SubscribePlan from "./settingshopSteps/SubscribePlan";
import InvoiceStore from "./settingshopSteps/InvoiceStore";
import Showcase from "./settingshopSteps/Showcase";

function Seting() {
  const [activeStep, setActiveStep] = useState("MyProfile");
  const setTabContent = () => {
    switch (activeStep) {
      case "MyStore":
        return <MyStore />;
      case "StoreLinks":
        return <StoreLinks />;
      case "ManageRole":
        return <ManageRole />;
      case "RemoveStore":
        return <RemoveStore />;
      case "Appointment":
        return <Appointment />;
      case "AccountValidate":
        return <AccountValidate />;
      case "SubscribePlan":
        return <SubscribePlan />;
      case "InvoiceStore":
        return <InvoiceStore />;
      case "Showcase":
        return <Showcase />;

      default:
        break;
    }
  };
  return (
    <>
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
                <div className="module">
                  <ul>
                    <li onClick={() => setActiveStep("MyStore")}>
                      <i class="fas fa-store"></i>My Store
                    </li>
                    <li>
                      <a href="/showcase">
                        <i class="far fa-comment-dots"></i>
                        module-setting-store.link.showcase
                      </a>
                    </li>
                    <li onClick={() => setActiveStep("StoreLinks")}>
                      <i class="far fa-comment-dots"></i>
                      module-setting-store.link.setting>
                    </li>
                    <li onClick={() => setActiveStep("ManageRole")}>
                      <i class="fas fa-user-shield"></i>
                      module-setting-store.link.manager_role
                    </li>
                    <li onClick={() => setActiveStep("RemoveStore")}>
                      <i class="fas fa-user-shield"></i>
                      module-setting-store.link.setting_store
                    </li>
                    <li onClick={() => setActiveStep("Appointment")}>
                      <i class="fas fa-calendar-plus"></i>Paramétres de
                      rendez-vous
                    </li>
                    <div className="border-bottom mb-2"></div>
                    <li onClick={() => setActiveStep("AccountValidate")}>
                      <i class="fas fa-hotel"></i>{" "}
                      module-setting-store.link.pricing
                    </li>

                    <li onClick={() => setActiveStep("SubscribePlan")}>
                      <i class="fas fa-hotel"></i>{" "}
                      module-setting-store.link.subscription-plan
                    </li>
                    <li onClick={() => setActiveStep("InvoiceStore")}>
                      <i class="fas fa-hotel"></i>{" "}
                      module-setting-store.link.invoice_store
                    </li>
                  </ul>
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
