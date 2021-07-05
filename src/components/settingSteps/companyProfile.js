import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Container,
  Dropdown,
  Nav,
  Breadcrumb,
  Form,
  InputGroup,
  FormControl,
  Tabs,
  Tab,
} from "react-bootstrap";
import LogoContact from "../../images/default-user.png";
import CommonModal from "../common/commonModal";

export default () => {
  const [open, SetOpen] = useState(false);
  return (
    <div className="company mt-0">
      <div className="company-header">
        <h4>module-profile.title.branch</h4>
        <Button
          className="btn-brand company-btn"
          onClick={() => SetOpen(!open)}
        >
          {" "}
          Create a subsidiary{" "}
        </Button>
      </div>
      <Dropdown.Divider />
      <CommonModal open={open} onClose={() => SetOpen(!open)}>
        <div className="subsidary">
          <h5>module-profile.subsidiary.title</h5>
        </div>
      </CommonModal>
    </div>
  );
};
