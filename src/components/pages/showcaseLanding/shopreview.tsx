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
  ProgressBar,
} from 'react-bootstrap';
import Select from 'react-select';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import * as Assets from '../common/assets';

import ShowcaseFooter from '../common/global/CommonComponents/Footer/showcaseFooter';
import ShowcaseNav from '../common/global/CommonComponents/Navs/showcaseNav';
import { Row, Col } from '../common/global/elements';

export default () => {
  return (
    <>
      <ShowcaseNav />
      <div className="comments mt-4">
        <div className="logo-d">
          {' '}
          <img src={Assets.Logo} className="" />
        </div>
        <Container>
          <div className="comment-rating">
            <h4>Notes et avis</h4>
            <Row>
              <Col sm={6}>
                <div className="d-flex justify-content-center align-items-center star">
                  <div className="value">5</div>
                  <div>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p>1256</p>
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="mr-2">5</div>
                  <ProgressBar now={20} />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="mr-2">5</div>
                  <ProgressBar now={40} />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="mr-2">5</div>
                  <ProgressBar now={7} />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="mr-2">5</div>
                  <ProgressBar now={40} />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="mr-2">5</div>
                  <ProgressBar now={20} />
                </div>
              </Col>
            </Row>
          </div>
          <div className="comment-section">
            <ul className="message mt-3">
              <li>
                {' '}
                <div className="d-flex">
                  <img src={Assets.Avtar} />
                  <div className="user">
                    <p>user name</p>
                    <p>
                      il y a 2 heures <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </p>
                  </div>
                </div>
                <p className="media-text">
                  Impedit laborum ullam molestias autem nobis quam, quisquam
                  deserunt alias corporis doloribus in iste veniam sit
                  temporibus. Neque fugit numquam dolorem expedita!
                  <br />
                  id :: 2 | key :: 0
                </p>
              </li>
              <li>
                {' '}
                <div className="d-flex">
                  <img src={Assets.Avtar} />
                  <div className="user">
                    <p>user name</p>
                    <p>
                      il y a 2 heures <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </p>
                  </div>
                </div>
                <p className="media-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  id :: 2 | key :: 0
                </p>
              </li>
              <ul>
                <li>
                  {' '}
                  <div className="d-flex">
                    <img src={Assets.Avtar} />
                    <div className="user">
                      <p>user name</p>
                      <p>
                        il y a 2 heures <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </p>
                    </div>
                  </div>
                  <p className="media-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    id :: 2 | key :: 0
                  </p>
                </li>
                <li>
                  {' '}
                  <div className="d-flex">
                    <img src={Assets.Avtar} />
                    <div className="user">
                      <p>user name</p>
                      <p>
                        il y a 2 heures <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </p>
                    </div>
                  </div>
                  <p className="media-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    id :: 2 | key :: 0
                  </p>
                </li>
                <li>
                  {' '}
                  <li>
                    {' '}
                    <div className="d-flex">
                      <img src={Assets.Avtar} />
                      <div className="user">
                        <p>user name</p>
                        <p>
                          il y a 2 heures <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </p>
                      </div>
                    </div>
                    <p className="media-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      <br />
                      id :: 2 | key :: 0
                    </p>
                  </li>
                </li>
              </ul>
            </ul>
          </div>
        </Container>
      </div>
      <ShowcaseFooter />
    </>
  );
};
