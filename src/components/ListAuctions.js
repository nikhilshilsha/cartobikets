import React from "react";
import { Row, Col, Button, Container, Nav, Breadcrumb } from "react-bootstrap";

import Sidebar from "./common/Sidebar";
import InProgress from "../images/auction-inprogress.png";

import InProgress2 from "../images/auction-tomorrow.png";
import InProgress3 from "../images/auction-after-tomorrow.png";
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
          <div class="mb-3 mt-3">
            <p class="m-0 textP">
              <b class="len_result">3</b> announces.filters.concerning
            </p>
          </div>
          <div className="taf-item">Car</div>
        </div>
        <div className="main-product">
          <div className="product-item">
            <Row className="width100">
              <Col sm={4}>
                <div className="ribbon ribbon_target ribbon-success">
                  <span className="ribbon_inner"></span> Enchère en cours{" "}
                </div>
                <div className="bx-slider">
                  <img src={InProgress2} alt="fsdf" />
                </div>
              </Col>
              <Col sm={5}>
                <div className="product_desc">
                  <h3>
                    <a href="/list-announces-auctions/1" class="">
                      {" "}
                      Voiture{" "}
                    </a>
                  </h3>

                  <div className="content-price">
                    <div className="info_auction">
                      <p>
                        <span class="label_infoAuction">Nombre de produit</span>{" "}
                        <span class="val_infoAuction text-success">1</span>
                      </p>
                      <p class="time_auction">
                        <span class="label_infoAuction">remaining time</span>
                        <span className="val_infoAuction future_date">
                          2142423533
                        </span>
                      </p>
                      <p className="price_auction">
                        <span class="label_infoAuction">Vente exclusive</span>
                        <span class="val_infoAuction text-success">1</span>
                      </p>
                      <div class="d-flex mt-4">
                        <div class="flag_country mr-2">
                          <span class="flag ">
                            <i class="iti-flag be"></i>
                          </span>
                        </div>
                        <div class="flag_country">
                          <span class="flag ">
                            <i class="iti-flag fr"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={3}>
                <div className="bottom-sec">
                  <p>
                    <span class="label_infoAuction">Date début</span> :{" "}
                    <span class="val_infoAuction">18-06-2021 11:18</span>
                  </p>
                  <p>
                    <span class="label_infoAuction">Date fin</span> :{" "}
                    <span class="val_infoAuction">27-08-2021 12:00</span>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="product-item">
            <div className="ribbon ribbon_target ribbon-warning">
              <span className="ribbon_inner"></span> Enchère en cours{" "}
            </div>
            <div className="bx-slider">
              <img src={InProgress} alt="fsdf" />
            </div>
            <div className="product_desc">
              <h3>
                <a href="/list-announces-auctions/1" class="">
                  {" "}
                  Voiture{" "}
                </a>
              </h3>

              <div className="content-price">
                <div className="info_auction">
                  <p>
                    <span class="label_infoAuction">Nombre de produit</span>{" "}
                    <span class="val_infoAuction text-success">1</span>
                  </p>
                  <p class="time_auction">
                    <span class="label_infoAuction">remaining time</span>
                    <span className="val_infoAuction future_date">
                      2142423533
                    </span>
                  </p>
                  <p className="price_auction">
                    <span class="label_infoAuction">Vente exclusive</span>
                    <span class="val_infoAuction text-success">1</span>
                  </p>
                  <div class="d-flex mt-4">
                    <div class="flag_country mr-2">
                      <span class="flag ">
                        <i class="iti-flag be"></i>
                      </span>
                    </div>
                    <div class="flag_country">
                      <span class="flag ">
                        <i class="iti-flag fr"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>
                <span class="label_infoAuction">Date début</span> :{" "}
                <span class="val_infoAuction">18-06-2021 11:18</span>
              </p>
              <p>
                <span class="label_infoAuction">Date fin</span> :{" "}
                <span class="val_infoAuction">27-08-2021 12:00</span>
              </p>
            </div>
          </div>
          <div className="product-item">
            <div className="ribbon ribbon_target ribbon-danger">
              <span className="ribbon_inner"></span> Enchère futur{" "}
            </div>
            <div className="bx-slider">
              <img src={InProgress2} alt="fsdf" />
            </div>
            <div className="product_desc">
              <h3>
                <a href="/list-announces-auctions/1" class="">
                  {" "}
                  Voiture{" "}
                </a>
              </h3>

              <div className="content-price">
                <div className="info_auction">
                  <p>
                    <span class="label_infoAuction">Nombre de produit</span>{" "}
                    <span class="val_infoAuction text-success">1</span>
                  </p>
                  <p class="time_auction">
                    <span class="label_infoAuction">remaining time</span>
                    <span className="val_infoAuction future_date">
                      2142423533
                    </span>
                  </p>
                  <p className="price_auction">
                    <span class="label_infoAuction">Vente exclusive</span>
                    <span class="val_infoAuction text-success">1</span>
                  </p>
                  <div class="d-flex mt-4">
                    <div class="flag_country mr-2">
                      <span class="flag ">
                        <i class="iti-flag be"></i>
                      </span>
                    </div>
                    <div class="flag_country">
                      <span class="flag ">
                        <i class="iti-flag fr"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>
                <span class="label_infoAuction">Date début</span> :{" "}
                <span class="val_infoAuction">18-06-2021 11:18</span>
              </p>
              <p>
                <span class="label_infoAuction">Date fin</span> :{" "}
                <span class="val_infoAuction">27-08-2021 12:00</span>
              </p>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}

export default Auction;
