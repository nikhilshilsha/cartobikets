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
} from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LogoContact from "../../images/default-user.png";

export default () => {
  return (
    <div className="account mt-0">
      <Tabs>
        <TabList>
          <Tab>
            <i class="fas fa-portrait"></i> My store
          </Tab>
          <Tab>
            <i class="far fa-clock"></i> module-setting-store.link.working_hours{" "}
          </Tab>
          <Tab> module-setting-store.link.content_text </Tab>
          <Tab> module-managers.department </Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};
