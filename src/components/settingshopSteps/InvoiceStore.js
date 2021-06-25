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
  const [formType, setformType] = useState("signin");
  return (
    <div className="account mt-0">
      <div className="invoiceStore">
        <h5 className="text-center">Mes factures</h5>
        <Card>
          <Row>
            <Col sm={5}>
              <h5 class="mt-0 mb-2 pricing-header text-uppercase">
                module-setting-store.invoice.monthly_offer
              </h5>
            </Col>
            <Col sm={4}>
              <p class="font-weight-bold num_facture mb-4">
                module-setting-store.invoice.number_order: Cartobike123456
              </p>
              <p class="text-price mb-4">
                module-setting-store.invoice.total: <b>30 €</b>
              </p>
              <p class="text-date">01/08/2020</p>
            </Col>
            <Col sm={3}>
              <div className="d-flex justify-content-center align-items-center">
                <Button variant="primary">
                  <i class="far fa-eye"></i>
                  module-setting-store.invoice.see_invoice
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
        <Card>
          <Row>
            <Col sm={5}>
              <h5 class="mt-0 mb-2 pricing-header text-uppercase">
                module-setting-store.invoice.monthly_offer
              </h5>
            </Col>
            <Col sm={4}>
              <p class="font-weight-bold num_facture mb-4">
                module-setting-store.invoice.number_order: Cartobike123456
              </p>
              <p class="text-price mb-4">
                module-setting-store.invoice.total: <b>30 €</b>
              </p>
              <p class="text-date">01/08/2020</p>
            </Col>
            <Col sm={3}>
              <div className="d-flex justify-content-center align-items-center">
                <Button variant="primary">
                  <i class="far fa-eye"></i>
                  module-setting-store.invoice.see_invoice
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
      <h5></h5>
    </div>
  );
};
