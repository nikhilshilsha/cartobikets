import React from "react";
import { Row, Col, Button, Container, Card } from "react-bootstrap";
import CarImage from "../images/illu-1.png";
import CarImage1 from "../images/acceuil2.png";


function Vehicle() {
  return (
    <>
      <section className="why-cartobike d-block">
        <div className="">
          <Row>
            <Col lg={6}>
              <img src={CarImage} alt="" class="img-fluid" />
            </Col>
            <Col lg={6}>
              <div class="banner-ads_txt ">
                <span class="txt-info">
                  SELL YOUR VEHICLE FOR FREE AND QUICKLY!
                </span>
                <p>
                  Sell your vehicle yourself by simply creating your ad on
                  CarToBike.com to reach thousands of serious buyers.
                </p>
                <Button
                  type="button"
                  className="btn btn-primary AddBtn"
                  data-toggle="modal"
                  data-target="#modalAds"
                >
                  <span>Add an add</span>
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg={6}>
              <div class="banner-ads_txt ">
                <span class="txt-info">
                  BOOST YOUR SALES WITH A SHOWROOM VISIBLE TO 10,000 POTENTIAL
                  BUYERS PER DAY
                </span>
                <p>
                  Selling your vehicle is now easier and faster via
                  CarToBike.com; thanks to several features that allow you to
                  expose your vehicles for sale, concuct with your prospects,
                  prepare your documents, generate sales and analyze your sales.
                </p>
                <Button
                  type="button"
                  className="btn btn-primary AddBtn"
                  data-toggle="modal"
                  data-target="#modalAds"
                >
                  <span>Create my showroom</span>
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <img src={CarImage1} alt="" class="img-fluid" />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default Vehicle;
