import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button } from '../../common/global/elements';
import * as Assets from '../../common/assets';
import CommonModal from '../../common/global/CommonComponents/commonModal';

function Vehicle() {
  const [open, SetOpen] = useState(false);
  const history = useHistory();
  const closeIcon = (
    <>
      <img src={Assets.Close} className="closeIco" />
    </>
  );
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
                  onClick={() => SetOpen(!open)}
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
        <CommonModal
          openModal={open}
          onCloseModal={() => SetOpen(!open)}
          className={{ modal: 'moterModal', closeButton: 'crossbutton' }}
          closeIcon={closeIcon}
        >
          <h5>Choose your type of vehicle </h5>
          <div className="vehicle-div">
            <Row>
              <Col sm={4}>
                <div
                  className="outer-circle"
                  onClick={() => history.push('/caradd')}
                >
                  <i className="fas fa-car"></i>
                </div>
                <p className="text-center">Car</p>
              </Col>
              <Col sm={4}>
                <div className="outer-circle">
                  <i className="fas fa-motorcycle"></i>
                </div>
                <p className="text-center">Motorcycle</p>
              </Col>
              <Col sm={4}>
                <div className="outer-circle">
                  <i className="fas fa-bicycle"></i>
                </div>
                <p className="text-center">Bike</p>
              </Col>
            </Row>
          </div>
        </CommonModal>
      </section>
    </>
  );
}

export default Vehicle;
