import React, { useState } from 'react';
import {
  Button,
  Container,
  Form,
  Breadcrumb,
  Nav,
  Table,
  ProgressBar,
} from 'react-bootstrap';

// import Sidebar from '../../common/global/CommonComponents/Sidebar';
import { Row, Col } from '../../../common/global/elements';
import * as Assets from '../../../common/assets';

function Order() {
  return (
    <>
      <Container className="vehicl-review">
        <div className="grade-filter">
          <Row>
            <Col sm={6}>
              <h6>announces.announce.average_grade</h6>
              <ul className="filter-list">
                <li>
                  <img src={Assets.SmallLogo} />
                </li>
                <li>
                  {' '}
                  <div>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </li>
                <li>
                  <span className="text-value">3.0</span>
                </li>
              </ul>
            </Col>
            <Col sm={6}>
              <h6>announces.announce.notes_details</h6>
              <div className="progres">
                <p>announces.announce.general_impression</p>
                <ProgressBar now={60} />
                <span className="">25.00%</span>
              </div>
              <div className="progres">
                <p>announces.announce.description_of_offer</p>
                <ProgressBar now={60} />
                <span className="">25.00%</span>
              </div>
              <div className="progres">
                <p>announces.announce.reactivity_of_seller</p>
                <ProgressBar now={60} />
                <span className="">25.00%</span>
              </div>
              <div className="progres">
                <p>25.00% announces.announce.reliability</p>
                <ProgressBar now={60} />
                <span className="">25.00%</span>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={4}>
              <h6>announces.announce.write_your_rating</h6>
              <div className="rate">
                <p>
                  announces.announce.gen
                  <br />
                  eral_impression false
                </p>
                <div className="flex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="">icon</span>
              </div>
              <div className="rate">
                <p>
                  announces.announce.gen
                  <br />
                  eral_impression false
                </p>
                <div className="flex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="">icon</span>
              </div>
              <div className="rate">
                <p>
                  announces.announce.gen
                  <br />
                  eral_impression false
                </p>
                <div className="flex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="">icon</span>
              </div>
              <div className="rate">
                <p>
                  announces.announce.gen
                  <br />
                  eral_impression false
                </p>
                <div className="flex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="">icon</span>
              </div>
            </Col>
            <Col sm={8}>
              <div className="d-flex justify-content-between">
                <h6>announces.announce.comment</h6>
                <svg
                  className="svg-inline--fa fa-cog fa-w-16"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="cog"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="red"
                    d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                  ></path>
                </svg>
              </div>
              <div className="notes-div d-flex">
                <img src={Assets.Contact} />
                <Form.Control as="textarea" rows={3} />
              </div>
              <Button type="button" className="btn btn-primary btn-comment">
                actions.comment
              </Button>
              <div className="border-bottom mt-5 pt-4"></div>
              <div className="comment-section mt-4">
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
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
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit.
                          <br />
                          id :: 2 | key :: 0
                        </p>
                      </li>
                    </li>
                  </ul>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Order;
