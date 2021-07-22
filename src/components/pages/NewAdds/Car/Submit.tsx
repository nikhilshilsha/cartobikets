import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import { Row, Col, Button } from '../../../common/global/elements';
import * as Assets from '../../../common/assets';
import CommonModal from '../../../common/global/CommonComponents/commonModal';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';

function Account() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Container>
        <div className="main-product">
          <Row>
            <Col sm={3} className="slide-image">
              <Slider {...settings}>
                <div>
                  <img src={Assets.Imge} />
                </div>
                <div>
                  <img src={Assets.Imge} />
                </div>
                <div>
                  <img src={Assets.Imge} />
                </div>
                <div>
                  <img src={Assets.Imge} />
                </div>
                <div>
                  <img src={Assets.Imge} />
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
            </Col>
            <Col sm={3}>
              <div className="price-data">
                <div className="d-flex ">
                  <h5> Abarth Abarth 124 </h5>
                </div>
                <div className="">
                  <h4> MInimum prize</h4>
                </div>
              </div>
              <div className="real-price">500 €</div>
            </Col>
            <Col sm={6}>
              <div className="price-data">
                <div className="options d-flex justify-content-between ">
                  <div>
                    <ul>
                      <li>2019</li>
                      <li>212 km</li>
                      <li>diesel</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>old</li>
                      <li>Auto</li>
                      <li>320kh</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="border-bottom mt-4 mb-3"></div>
          <div className="d-flex justify-content-between bottom-btn mt-2">
            <div>
              <Button
                type="button"
                className="btn btn-primary ml-lg-2 btn-blue"
              >
                Atticher Raper
              </Button>
            </div>
            <div>
              <Button
                type="button"
                className="btn btn-primary ml-lg-2 btn-yellow"
              >
                Atticher Raper
              </Button>
              <Button
                type="button"
                className="btn btn-primary ml-lg-2 btn-blue"
              >
                Atticher Raper
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Account;
