import React from "react";
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
  Table,
  Card,
} from "react-bootstrap";
import ShowcaseNav from "../common/showcaseNav";
import "react-tabs/style/react-tabs.css";
import Car1 from "../../images/slider/05.jpg";
import Car2 from "../../images/default-vehicle.png";
import Default from "../../images/default-slider.png";

import ShowcaseFooter from "../common/showcaseFooter";
import Banner from "../common/banner";

export default () => {
  return (
    <>
      <ShowcaseNav />
      <div className="showcase">
        <div style={{ width: "100", height: "100vh" }} className="banner-mobile">
          <Banner image={Default} />
        </div>
        <div className="banner-content">
          <h3>Nouveau</h3>
          <h2>Audi</h2>
          <Button variant="primary" className="baner-btn">Je découvre</Button>
        </div>
        <div>
          <Container className="w-search">
            <div className="d-flex justify-content-between align-items-center mb-2 mob-home">
              <h3 class="mt-0">
                <span>0</span> page.shop.home.availability_vehicle
              </h3>
              <h6>
                <a href="">page.shop.home.see_all_vehicle›</a>
              </h6>
            </div>
            <Form className="d-flex formAction">
              <Form.Control type="" placeholder="brand" className="mr-4" />
              <Form.Control type="" placeholder="Model" className="mr-4" />
              <Form.Control
                type=""
                placeholder="from"
                className="from-div"
              />{" "}
              <Form.Control type="" placeholder="to" className="from-div" />
              <div>
                <button type="button" class="btn btn-primary btn-search">
                  <i class="fas fa-search"></i> Search
                </button>
              </div>
            </Form>
          </Container>
          <Container className="mt-5">
            <div class="block-title d-flex justify-content-between align-items-center">
              <div>
                <h2 class="">page.shop.home.product_title</h2>
              </div>

              <div>
                <h6>
                  <a href="/">see more</a>
                </h6>
              </div>
            </div>
            <div className="car-detail mt-4">
              <Row>
                <Col sm={6}>
                  <Card>
                    <Card.Img variant="top" src={Car1} />
                    <Card.Body>
                      <Card.Title>Abarth Abarth 124</Card.Title>
                      <Card.Text>2019 old</Card.Text>
                      <div className="box-price">
                        <p className="price text-success"> 500 €</p>
                      </div>
                    </Card.Body>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                      <div>diesel</div>
                      <div>diesel</div>
                      <div>diesel</div>
                    </div>
                  </Card>
                </Col>
                <Col sm={6}>
                  <Card>
                    <Card.Img variant="top" src={Car2} />
                    <Card.Body>
                      <Card.Title>Bmw BMW M3</Card.Title>
                      <Card.Text>2019 old</Card.Text>
                      <div className="box-price">
                        <p className="price text-success"> 500 €</p>
                      </div>
                    </Card.Body>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                      <div>diesel</div>
                      <div>diesel</div>
                      <div>diesel</div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
          <ShowcaseFooter />
        </div>
      </div>
    </>
  );
};
