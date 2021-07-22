import React from 'react';
import {
  Row,
  Col,
  Button,
  Container,
  Form,
  Breadcrumb,
  Nav,
  Table,
} from 'react-bootstrap';
import { Slider } from '../../common/global/elements';
import * as Assets from '../../common/assets';
// import Sidebar from '../../common/global/CommonComponents/Sidebar';
// import { Row, Col } from '../../common/global/elements';

function Order() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {/* <Sidebar> */}
      <Container>
        <div className="offerdetail">
          <p className="back">
            {' '}
            Back to previous page <a href=""></a>
          </p>
          <Row>
            <Col sm={6}>
              <Slider settings={settings}>
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
            <Col sm={6}>
              <div className="car-data">
                <div className="d-flex justify-content-between ">
                  <h3> Abarth Abarth 124 2019 old</h3>
                  <ul>
                    <li>
                      <i className="fas fa-share-alt"></i>
                    </li>
                    <li>
                      <i className="fas fa-file-pdf"></i>
                    </li>
                    <li>
                      <i className="fas fa-exclamation-triangle"></i>
                    </li>
                  </ul>
                </div>
                <div className="auction_tag">
                  <label>vehicle.fields.quick_bid</label>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <ul className="offer-tag">
                        <li>50 € </li>
                        <li>100 €</li>
                        <li>200 € </li>
                      </ul>
                    </div>
                    <div className="time-zone d-flex justify-content-between">
                      <p>35 : 06 : 33 : 35</p>
                      <p>Total :0</p>
                    </div>
                  </div>
                </div>
                <div className="price">
                  <label>vehicle.fields.bid_directly</label>

                  <div className="d-flex">
                    <input
                      type="text"
                      placeholder=""
                      style={{ width: '30%', marginRight: '.6rem' }}
                    />

                    <Button
                      type="button"
                      className="btn btn-primary btn-vehicle"
                    >
                      vehicle.fields.i_bid
                    </Button>
                  </div>
                  <div className="price mt-3">
                    <label>vehicle.fields.automatic_offer</label>

                    <div className="d-flex">
                      <input
                        type="text"
                        placeholder=""
                        style={{ width: '20%', marginRight: '.6rem' }}
                      />

                      <Button
                        type="button"
                        className="btn btn-primary btn-blue"
                      >
                        vehicle.fields.automatic_bid
                      </Button>
                    </div>
                  </div>
                  <div className="calender-div">
                    <Button type="button" className="btn btn-primary btn-green">
                      <svg
                        className="svg-inline--fa fa-calendar-alt fa-w-14"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="calendar-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                        ></path>
                      </svg>{' '}
                      Add apppointment
                    </Button>
                    <Button type="button" className="btn btn-primary btn-blue">
                      <svg
                        className="svg-inline--fa fa-exchange-alt fa-w-16"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="exchange-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"
                        ></path>
                      </svg>
                      announces.reprise.reprise
                    </Button>
                  </div>
                  <div className="d-flex justify-content-between appoin">
                    <div>
                      <p>2019</p>
                      <p>Auto</p>
                    </div>
                    <div>
                      <p>Old</p>
                      <p>Diesel</p>
                    </div>
                    <div>
                      <p>212km</p>
                      <p>320kw</p>
                    </div>
                  </div>
                  <div className="bottom"></div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      {/* </Sidebar> */}
    </>
  );
}

export default Order;
