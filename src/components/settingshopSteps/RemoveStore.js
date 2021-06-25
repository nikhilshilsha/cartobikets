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
            <i class="fas fa-delete"></i>
            module-setting-store.setting.delete_shop
          </Tab>
        </TabList>

        <TabPanel>
          {" "}
          <Row>
            <Col  sm={3}>module-setting-store.setting.delete_shop</Col>
            <Col sm={4}>
              <div className="">
                {" "}
                <h6>module-setting-store.setting.if_delete_your_shop</h6>
                <a href="">delete Boutique Media</a>
              </div>
            </Col>
          </Row>
        </TabPanel>
      </Tabs>
    </div>
  );
};
