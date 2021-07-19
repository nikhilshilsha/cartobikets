import React from 'react';
import { Row, Col, Button, Container, Nav, Breadcrumb } from 'react-bootstrap';

import Sidebar from '../../common/global/CommonComponents/Sidebar';
import * as Assets from '../../common/assets';

function Auction() {
  return (
    <>
      <Sidebar>
        <div className="auction-list">
          <Breadcrumb>
            <Breadcrumb.Item active>Home</Breadcrumb.Item>

            <Breadcrumb.Item href="#">
              breadcrumb.announces-auctions-list-page
            </Breadcrumb.Item>
          </Breadcrumb>
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home"> announces.filters.all (3)</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Enchère en cours </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Enchère futur </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Enchère cloturés </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="mb-3 mt-3">
            <p className="m-0 textP">
              <b className="len_result">3</b> announces.filters.concerning
            </p>
          </div>
          <div className="taf-item">Car</div>
        </div>
        <div className="main-product">
          <div className="product-item">
            <Row className="width100">
              <Col sm={4}>
                <div className="ribbon ribbon_target ribbon-success">
                  <span className="ribbon_inner"></span> Enchère en cours{' '}
                </div>
                <div className="bx-slider">
                  <img src={Assets.InProgress2} alt="fsdf" />
                </div>
              </Col>
              <Col sm={3}>
                <div className="product_desc">
                  <h3>
                    <a href="/list-announces-auctions/1" className="">
                      {' '}
                      Voiture
                    </a>
                  </h3>

                  <div className="content-price">
                    <div className="info_auction">
                      <p>
                        <span className="label_infoAuction">
                          Nombre de produit
                        </span>{' '}
                        <span className="val_infoAuction text-success">1</span>
                      </p>
                      <p className="time_auction">
                        <span className="label_infoAuction">
                          remaining time
                        </span>
                        <span className="val_infoAuction future_date">
                          2142423533
                        </span>
                      </p>
                      <p className="price_auction">
                        <span className="label_infoAuction">
                          Vente exclusive
                        </span>
                        <span className="val_infoAuction text-success">1</span>
                      </p>
                      <div className="d-flex mt-4">
                        <div className="flag_country mr-2">
                          <span className="flag ">
                            <i className="iti-flag be"></i>
                          </span>
                        </div>
                        <div className="flag_country">
                          <span className="flag ">
                            <i className="iti-flag fr"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={5}>
                <div className="bottom-sec mt-3">
                  <p>
                    <span className="label_infoAuction">Date début</span> :{' '}
                    <span className="val_infoAuction">18-06-2021 11:18</span>
                  </p>
                  <p>
                    <span className="label_infoAuction">Date fin</span> :{' '}
                    <span className="val_infoAuction">27-08-2021 12:00</span>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="product-item">
            <Row className="width100">
              <Col sm={4}>
                <div className="ribbon ribbon_target ribbon-warning">
                  <span className="ribbon_inner"></span> Enchère en cours{' '}
                </div>
                <div className="bx-slider">
                  <img src={Assets.InProgress} alt="fsdf" />
                </div>
              </Col>
              <Col sm={3}>
                {' '}
                <div className="product_desc">
                  <h3>
                    <a href="/list-announces-auctions/1" className="">
                      {' '}
                      Voiture{' '}
                    </a>
                  </h3>

                  <div className="content-price">
                    <div className="info_auction">
                      <p>
                        <span className="label_infoAuction">
                          Nombre de produit
                        </span>{' '}
                        <span className="val_infoAuction text-success">1</span>
                      </p>
                      <p className="time_auction">
                        <span className="label_infoAuction">
                          remaining time
                        </span>
                        <span className="val_infoAuction future_date">
                          2142423533
                        </span>
                      </p>
                      <p className="price_auction">
                        <span className="label_infoAuction">
                          Vente exclusive
                        </span>
                        <span className="val_infoAuction text-success">1</span>
                      </p>
                      <div className="d-flex mt-4">
                        <div className="flag_country mr-2">
                          <span className="flag ">
                            <i className="iti-flag be"></i>
                          </span>
                        </div>
                        <div className="flag_country">
                          <span className="flag ">
                            <i className="iti-flag fr"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={5}>
                <div className="bottom-sec mt-3">
                  <p>
                    <span className="label_infoAuction">Date début</span> :{' '}
                    <span className="val_infoAuction">18-06-2021 11:18</span>
                  </p>
                  <p>
                    <span className="label_infoAuction">Date fin</span> :{' '}
                    <span className="val_infoAuction">27-08-2021 12:00</span>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          h7
          <div className="product-item">
            <div className="ribbon ribbon_target ribbon-danger">
              <span className="ribbon_inner"></span> Enchère futur{' '}
            </div>
            <div className="bx-slider">
              <img src={Assets.InProgress2} alt="fsdf" />
            </div>
            <div className="product_desc">
              <h3>
                <a href="/list-announces-auctions/1" className="">
                  {' '}
                  Voiture{' '}
                </a>
              </h3>

              <div className="content-price">
                <div className="info_auction">
                  <p>
                    <span className="label_infoAuction">Nombre de produit</span>{' '}
                    <span className="val_infoAuction text-success">1</span>
                  </p>
                  <p className="time_auction">
                    <span className="label_infoAuction">remaining time</span>
                    <span className="val_infoAuction future_date">
                      2142423533
                    </span>
                  </p>
                  <p className="price_auction">
                    <span className="label_infoAuction">Vente exclusive</span>
                    <span className="val_infoAuction text-success">1</span>
                  </p>
                  <div className="d-flex mt-4">
                    <div className="flag_country mr-2">
                      <span className="flag ">
                        <i className="iti-flag be"></i>
                      </span>
                    </div>
                    <div className="flag_country">
                      <span className="flag ">
                        <i className="iti-flag fr"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>
                <span className="label_infoAuction">Date début</span> :{' '}
                <span className="val_infoAuction">18-06-2021 11:18</span>
              </p>
              <p>
                <span className="label_infoAuction">Date fin</span> :{' '}
                <span className="val_infoAuction">27-08-2021 12:00</span>
              </p>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}

export default Auction;
