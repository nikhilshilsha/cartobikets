import React, { useState } from 'react';
import {
  Container,
  Nav,
  Breadcrumb,
  Form,
  InputGroup,
  FormControl,
  Table,
  Card,
} from 'react-bootstrap';

import Select from 'react-select';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Row, Col, Button } from '../../common/global/elements';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default () => {
  const [formType, setformType] = useState('signin');
  return (
    <div className="account mt-0">
      <div className="invoiceStore">
        <h5 className="text-center">Mes factures</h5>
        <Card>
          <Row>
            <Col sm={5}>
              <h5 className="mt-0 mb-2 pricing-header text-uppercase">
                module-setting-store.invoice.monthly_offer
              </h5>
            </Col>
            <Col sm={4}>
              <p className="font-weight-bold num_facture mb-4">
                module-setting-store.invoice.number_order: Cartobike123456
              </p>
              <p className="text-price mb-4">
                module-setting-store.invoice.total: <b>30 €</b>
              </p>
              <p className="text-date">01/08/2020</p>
            </Col>
            <Col sm={3}>
              <div className="d-flex justify-content-center align-items-center">
                <Button type="button">
                  <i className="far fa-eye"></i>
                  module-setting-store.invoice.see_invoice
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
        <Card>
          <Row>
            <Col sm={5}>
              <h5 className="mt-0 mb-2 pricing-header text-uppercase">
                module-setting-store.invoice.monthly_offer
              </h5>
            </Col>
            <Col sm={4}>
              <p className="font-weight-bold num_facture mb-4">
                module-setting-store.invoice.number_order: Cartobike123456
              </p>
              <p className="text-price mb-4">
                module-setting-store.invoice.total: <b>30 €</b>
              </p>
              <p className="text-date">01/08/2020</p>
            </Col>
            <Col sm={3}>
              <div className="d-flex justify-content-center align-items-center">
                <Button type="button">
                  <i className="far fa-eye"></i>
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
