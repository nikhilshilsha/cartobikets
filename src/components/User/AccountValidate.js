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
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import Navbar from "../common/Navbar";
import Arrow from "../../images/arrow.png";
function Account() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="account-div">
          <div className="box-center">
            <div class="pricing-header text-center">
              <h3>Pricing plan</h3>
            </div>
            <div className="pricing-tab-wrap d-flex justify-content-between">
              <div class="">
                {" "}
                <a>Become particular</a>
              </div>
              <div class="btn-groupmb-5 d-flex justify-content-between">
                <div> Monthly offer </div>
                <div class="custom-control custom-switch mx-2 mb-0">
                  <input
                    type="checkbox"
                    id="offer"
                    name="offer"
                    class="custom-control-input"
                  />
                  <label for="offer" class="custom-control-label"></label>
                </div>{" "}
                <div>
                  Annual offer{" "}
                  <p class="yr-save-box text-danger">
                    <img src={Arrow} />
                    pricing save 20 %
                  </p>
                </div>
              </div>

              <div></div>
            </div>
            <div className="panel pricing-table">
              <Row>
                <Col sm={6}>
                  <Card style={{ width: "18rem" }}>
                    <div class="w-pricing-header">
                      <h2 class="pricing-header">personal</h2>
                      <span class="pricing-price">30 €</span>
                    </div>

                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        <div className="d-flex justify-content-between">
                          <div>CREATE SINGLE PAGE</div>

                          <svg
                            class="svg-inline--fa fa-info-circle fa-w-16 link-popover"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="info-circle"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="#394797"
                              d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                            ></path>
                          </svg>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="d-flex justify-content-between">
                          <div>6 MONTHS SUPPORT</div>

                          <svg
                            class="svg-inline--fa fa-info-circle fa-w-16 link-popover"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="info-circle"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="#394797"
                              d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                            ></path>
                          </svg>
                        </div>
                      </ListGroupItem>

                      <ListGroupItem>
                        <div className="d-flex justify-content-between">
                          <div>6 MONTHS SUPPORT</div>

                          <svg
                            class="svg-inline--fa fa-info-circle fa-w-16 link-popover"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="info-circle"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="#394797"
                              d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                            ></path>
                          </svg>
                        </div>
                      </ListGroupItem>
                    </ListGroup>
                    <div className="btn-div">
                      {" "}
                      <Button variant="primary" className="pricing-button">
                        shoose offer
                      </Button>
                    </div>
                  </Card>
                </Col>
                <Col sm={6}>
                  <Card style={{ width: "18rem" }}>
                    <div class="w-pricing-header">
                      <h2 class="pricing-header">ultimate</h2>
                      <span class="pricing-price">30 €</span>
                      <span class="btn btn-outline-success rounded-pill btn-sm text-capitalize mw-100 text-truncate">
                        {" "}
                        The most requested{" "}
                      </span>
                    </div>

                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        <div className="d-flex justify-content-between">
                          <div>CREATE SINGLE PAGE</div>

                          <svg
                            class="svg-inline--fa fa-info-circle fa-w-16 link-popover"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="info-circle"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="#394797"
                              d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                            ></path>
                          </svg>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="d-flex justify-content-between">
                          <div>6 MONTHS SUPPORT</div>

                          <svg
                            class="svg-inline--fa fa-info-circle fa-w-16 link-popover"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="info-circle"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="#394797"
                              d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                            ></path>
                          </svg>
                        </div>
                      </ListGroupItem>

                     
                    </ListGroup>
                    <div className="btn-div">
                      {" "}
                      <Button variant="primary" className="pricing-button">
                        shoose offer
                      </Button>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Account;
