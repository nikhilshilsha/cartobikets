import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Row, Col, Button } from '../../common/global/elements';
import * as Assets from '../../common/assets';

function Vehicle() {
  return (
    <>
      <section className="why-cartobike d-block">
        <div className="">
          <Row>
            <Col lg={6}>
              <img src={Assets.CarImage} alt="" className="img-fluid" />
            </Col>
            <Col lg={6}>
              <div className="banner-ads_txt ">
                <span className="txt-info">
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
              <div className="banner-ads_txt ">
                <span className="txt-info">
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
              <img src={Assets.CarImage1} alt="" className="img-fluid" />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default Vehicle;
