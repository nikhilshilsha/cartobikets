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
  Card,
} from "react-bootstrap";
import Select from "react-select";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LogoContact from "../../images/default-user.png";
import ShowcaseFooter from "../common/showcaseFooter";
import Avtar1 from "../../images/avatars/avatar-8.png";
export default () => {
  return (
    <div className="depertmnt">
      <p>page.shop.contact.memeber</p>
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center">
                <img src={Avtar1} />
                <div>
                  <p>
                    <i class="fas fa-envelope"></i> user@promaniak.com
                  </p>
                  <p>
                    <i class="fas fa-phone"></i> +32 0470 16 55 32
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center">
                <img src={Avtar1} />
                <div>
                  <p>
                    <i class="fas fa-envelope"></i> user@promaniak.com
                  </p>
                  <p>
                    <i class="fas fa-phone"></i> +32 0470 16 55 32
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
