import React from 'react';
import { Row, Col, Button, Container, Nav, Breadcrumb } from 'react-bootstrap';

import Sidebar from './common/global/CommonComponents/Sidebar';
import * as Assets from '../components/common/assets';

function Auction() {
  return (
    <>
      <Sidebar>
        <div className="auction-list">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Breadcrumb>
                <Breadcrumb.Item active>Home</Breadcrumb.Item>

                <Breadcrumb.Item href="#">
                  breadcrumb.allNotifications
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              {' '}
              <Button variant="warning">Ad an Add</Button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link href="/home"> All notifications </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">link.announces </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Finance </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-3">Resumption</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-3">link.appointments</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-3">link.chat</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-3">Role</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>

            <div>
              {' '}
              <Button variant="">Action.delete all</Button>
            </div>
          </div>
          <div className="w_listEvent">
            <div className="card">
              <p className="card-date">il y a 8 mois</p>
              <div className="w_notification">
                <a href="/offers/2" className="link-notification"></a>
                <div className="avtar-info">
                  <div>
                    <img src={Assets.Contact} />
                  </div>
                  <div>
                    <h6>
                      {' '}
                      <strong>Profile</strong>
                    </h6>
                    <p> Comment on your announce Alpina B12-Alpina </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <p className="card-date">il y a 8 mois</p>
              <div className="w_notification">
                <a href="/offers/2" className="link-notification"></a>
                <div className="avtar-info">
                  <div>
                    <img src={Assets.Contact} />
                  </div>
                  <div>
                    <h6>
                      {' '}
                      <strong>Profile</strong>
                    </h6>
                    <p> Comment on your announce Alpina B12-Alpina </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <p className="card-date">il y a 8 mois</p>
              <div className="w_notification">
                <a href="/offers/2" className="link-notification"></a>
                <div className="avtar-info">
                  <div>
                    <img src={Assets.Contact} />
                  </div>
                  <div>
                    <h6>
                      {' '}
                      <strong>Profile</strong>
                    </h6>
                    <p> Comment on your announce Alpina B12-Alpina </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <p className="card-date">il y a 8 mois</p>
              <div className="w_notification">
                <a href="/offers/2" className="link-notification"></a>
                <div className="avtar-info">
                  <div>
                    <img src={Assets.Contact} />
                  </div>
                  <div>
                    <h6>
                      {' '}
                      <strong>Profile</strong>
                    </h6>
                    <p> Comment on your announce Alpina B12-Alpina </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}

export default Auction;
