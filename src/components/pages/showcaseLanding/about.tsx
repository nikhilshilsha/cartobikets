import React from 'react';
import {
  Button,
  Container,
  Nav,
  Breadcrumb,
  Form,
  InputGroup,
  FormControl,
  Table,
  Card,
  Pagination,
} from 'react-bootstrap';
import Select from 'react-select';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ShowcaseFooter from '../../common/global/CommonComponents/Footer/showcaseFooter';
import * as Assets from '../../common/assets';

import { Row, Col } from '../../common/global/elements';

import ShowcaseNav from '../../common/global/CommonComponents/Navs/showcaseNav';

export default () => {
  return (
    <>
      <ShowcaseNav />
      <div className="about mt-4">
        <div className="logo-d">
          {' '}
          <img src={Assets.Logo} className="" />
        </div>
        <Container>
          <Row className="d-felx justify-content-center align-items-center">
            <Col sm={6}>
              <h2>
                page.shop.about.aboutStore <span>Boutique Mda</span>
              </h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </Col>
            <Col sm={6}>
              <div className="aboutImg">
                <img src={Assets.AboutImg1} />
              </div>
            </Col>
          </Row>
          <Row className="d-felx justify-content-center align-items-center mt-4">
            <Col sm={6}>
              <div className="aboutImg">
                <img src={Assets.AboutImg2} />
              </div>
            </Col>
            <Col sm={6}>
              <h2>page.shop.about.who_are_we</h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
          </Row>
          <div className="about-service mt-4">
            <h4>page.shop.about.our_service</h4>
            <Row>
              <Col sm={3}>
                <Card>
                  <Card.Body>
                    <div className="car-image">
                      <i className="fas fa-car"></i>
                    </div>
                    <Card.Title>Free Delivery</Card.Title>
                    <Card.Text>Worldwide from $75</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={3}>
                <Card>
                  <Card.Body>
                    <div className="car-image">
                      <i className="fas fa-car"></i>
                    </div>
                    <Card.Title>easy returns</Card.Title>
                    <Card.Text>365 days for free returns</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={3}>
                <Card>
                  <Card.Body>
                    <div className="car-image">
                      <i className="fas fa-car"></i>
                    </div>
                    <Card.Title>Support 24/7</Card.Title>
                    <Card.Text>Online 24 hour</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={3}>
                <Card>
                  <Card.Body>
                    <div className="car-image">
                      <i className="fas fa-car"></i>
                    </div>
                    <Card.Title>Other</Card.Title>
                    <Card.Text>Other</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <ShowcaseFooter />
    </>
  );
};
