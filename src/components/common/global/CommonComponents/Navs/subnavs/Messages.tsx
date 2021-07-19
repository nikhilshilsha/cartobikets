import React from 'react';
import { Row, Col, Button, Container, Breadcrumb } from 'react-bootstrap';

import Sidebar from '../../Sidebar';

import * as Assets from '../../../../assets';
import { Form } from '../../../elements';
function Auction() {
  const SearchFields = [
    {
      type: ' ',
      name: 'search',
      placeholder: 'search',
      className: 'search',
    },
  ];
  return (
    <>
      <Sidebar>
        <div className="auction-list p-2">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Breadcrumb>
                <Breadcrumb.Item active>Home</Breadcrumb.Item>

                <Breadcrumb.Item href="#">
                  breadcrumb.message-page
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              {' '}
              <Button variant="warning">Ad an Add</Button>
            </div>
          </div>
          <Row className="border">
            <Col sm={4}>
              <div className="message-div">
                <div className="task-board">
                  <div className="h-list-header bg-white">
                    <div className="d-flex h-list">
                      <div className="d-flex justify-content-between">
                        {' '}
                        <h4> messaging.page.messaging.messaging </h4>
                        <i className="fas fa-ellipsis-v"></i>
                      </div>

                      <div>
                        {' '}
                        <Form fields={SearchFields} />
                      </div>
                    </div>
                  </div>
                  <div className="h-list-body">
                    <div className="border-bottom">
                      <div className="d-flex p-3">
                        <div className="mr-2">
                          <img src={Assets.Boutiqu} />
                        </div>

                        <img src={Assets.Boutiqu2} />
                      </div>
                    </div>
                    <div className="media-user-list">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <div className="d-flex align-items-center">
                            {' '}
                            <img src={Assets.Boutiqu2} />
                            <div className="ml-2">
                              <h6> BMWI i3 | user</h6>
                              <p>il y a 6 mois</p>
                            </div>
                          </div>
                        </div>
                        <div className="live-status">1</div>
                      </div>
                    </div>
                  </div>
                  <div className="chatactionBottom">
                    <div className="d-flex justify-content-between p-2 w-100">
                      <div>
                        <i className="fas fa-comment"></i>
                        <span className="">Messageing Page</span>
                      </div>
                      <div>
                        <i className="fas fa-comment"></i>
                        <span className="">Messageing Page</span>
                      </div>
                      <div>
                        <i className="fas fa-comment"></i>
                        <span className="">Messageing Page</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={7}>
              <div className="d-flex justify-content-center meassge-img">
                <img src={Assets.Message} />
                <h5>messaging.page.messaging.title_empty</h5>
                <p>messaging.page.messaging.text_empty</p>
              </div>
            </Col>
          </Row>
        </div>
      </Sidebar>
    </>
  );
}

export default Auction;
