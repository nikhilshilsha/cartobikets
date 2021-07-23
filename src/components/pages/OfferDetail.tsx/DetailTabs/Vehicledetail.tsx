import React, { useState } from 'react';
import {
 
  Button,
  Container,
  Form,
  Breadcrumb,
  Nav,
  Table,
} from 'react-bootstrap';


// import Sidebar from '../../common/global/CommonComponents/Sidebar';
import { Row, Col } from '../../../common/global/elements';

function Order() {
  
 
  return (
    <>
      <Container>
        <div className="details">
          <Row>
            <Col sm={6}>
              <div className="brand-status">
                <label>brand</label>
                <span>Abarth</span>
              </div>
              <div className="brand-status">
                <label>model</label>
                <span>Abarth 124</span>
              </div>
              <div className="brand-status">
                <label>year</label>
                <span>2019</span>
              </div>
              <div className="brand-status">
                <label>body</label>
                <span>convertible</span>
              </div>
              <div className="brand-status">
                <label>mileage (Kg)</label>
                <span>212 Km</span>
              </div>
              <div className="brand-status">
                <label>fiscal power</label>
                <span>320 kw</span>
              </div>
            </Col>
            <Col sm={6}>
              <div className="brand-status">
                <label>vehicle state</label>
                <span>old</span>
              </div>
              <div className="brand-status">
                <label>condition of the vehicle</label>
                <span>bonee</span>
              </div>
              <div className="brand-status">
                <label>Gearbox</label>
                <span>auto</span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Order;
