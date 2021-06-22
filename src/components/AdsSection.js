import React from "react";
import {
  Row,
  Col,
  Button,
  Container,
  Nav,
  Tabs,
  Tab,
  Form,
} from "react-bootstrap";
import Car from "../images/acceuil1.png";

function Ads() {
  return (
    <>
      <section className="section_ads">
        <div className="intro-tab-wrapper animate">
          <div className="tab-content">
            <div className="tab-nav d-flex justify-content-between align-items-center">
              <ul className="nav-tabs">
                <li>
                  <i class="fas fa-motorcycle"></i>
                </li>
                <li>
                  <i class="fas fa-motorcycle"></i>
                </li>

                <li>
                  <i class="fas fa-bicycle"></i>
                </li>
                <li>
                  <i class="fas fa-bicycle"></i>
                </li>
              </ul>
              <div>
                <ul className="right-link">
                  <li>
                    <i class="fas fa-dharmachakra"></i>
                  </li>
                  <li>
                    <i class="fas fa-cog"></i>
                  </li>

                  <li>
                    <i class="fas fa-compress-alt"></i>
                  </li>
                  <li>
                    <i class="fas fa-hat-cowboy-side"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-2 cycle-form">
              <Container>
                <Row>
                  <Col lg={3}>
                    {" "}
                    <Form.Control type="email" placeholder="Brand" />
                    <Form.Control type="email" placeholder="Brand" />
                  </Col>
                  <Col lg={3}>
                    {" "}
                    <Form.Control type="email" placeholder="MOdel" />
                    <Form.Control type="email" placeholder="Brand" />
                  </Col>
                  <Col lg={3}>
                    {" "}
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Control type="email" placeholder="Brand" />
                  </Col>
                  <Col lg={3}>
                    {" "}
                    <Form.Control type="email" placeholder="Fuel" />
                    <Form.Control type="email" placeholder="Brand" />
                  </Col>
                </Row>
                <div className="advance-search d-flex justify-content-between align-items-center">
                  <a href="">Advanced serach</a>
                  <button type="button" class="btn btn-primary btn-search">
                    <i class="fas fa-search"></i>  Search
                  </button>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ads;
