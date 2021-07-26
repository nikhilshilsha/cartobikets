import React, { useState } from 'react';
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
import 'react-tabs/style/react-tabs.css';
import Vehicledetail from './DetailTabs/Vehicledetail';
import Options from './DetailTabs/Options';
import Contact from './DetailTabs/Contact';
import ReactCalendar from 'react-calendar';

import Reviews from './DetailTabs/Reviews';
import { useHistory } from 'react-router-dom';
import CommonModal from '../../common/global/CommonComponents/commonModal';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-calendar/dist/Calendar.css';
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
  const locales = {
    // eslint-disable-next-line global-require
    'en-US': require('date-fns/locale/en-US'),
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });
  const [value, onChange] = useState(new Date());

  const [open, SetOpen] = useState(false);
  const history = useHistory();
  const closeIcon = (
    <>
      <img src={Assets.Close} className="closeIco" />
    </>
  );
  const [activeStep, setActiveStep] = useState('Vehicledetail');
  const setTabContent = () => {
    switch (activeStep) {
      case 'Vehicledetail':
        return <Vehicledetail />;
      case 'Options':
        return <Options />;
      case 'Contact':
        return <Contact />;
      case 'Reviews':
        return <Reviews />;

      default:
        break;
    }
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
                    <Button
                      type="button"
                      className="btn btn-primary btn-green"
                      onClick={() => SetOpen(!open)}
                    >
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
                  <div className="car-rating p-2">
                    <Row>
                      <Col sm={2}>
                        <div>
                          <img src={Assets.Boutiqu} />
                        </div>
                      </Col>
                      <Col sm={10}>
                        <div className="d-flex justify-content-between">
                          <div className="car-info">
                            <p>CAR particular vendor MALINES Belgium</p>
                            <Button
                              type="button"
                              className="btn btn-primary btn-vehicle"
                            >
                              +32 0470 12 36 54
                            </Button>
                          </div>
                          <div className="flex">
                            <div>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                            <Button
                              type="button"
                              className="btn btn-primary btn-blue mt-3"
                            >
                              announce.contact_seller
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="vehicle_announcetab ">
          <ul>
            <li
              onClick={() => {
                setActiveStep('Vehicledetail');
              }}
              className={activeStep == 'Vehicledetail' ? 'active' : ''}
            >
              announces.announce.vehicle_details
            </li>
            <li
              onClick={() => {
                setActiveStep('Options');
              }}
              className={activeStep == 'Options' ? 'active' : ''}
            >
              announces.announce.vehicle_options
            </li>
            <li
              onClick={() => {
                setActiveStep('Contact');
              }}
              className={activeStep == 'Contact' ? 'active' : ''}
            >
              announces.announce.contact
            </li>
            <li
              onClick={() => {
                setActiveStep('Reviews');
              }}
              className={activeStep == 'Reviews' ? 'active' : ''}
            >
              announces.announce.ratings_reviews
            </li>
          </ul>
        </div>
        {setTabContent()}
      </Container>
      <CommonModal
        openModal={open}
        onCloseModal={() => SetOpen(!open)}
        className={{ modal: 'moterModal', closeButton: 'crossbutton' }}
        closeIcon={closeIcon}
      >
        <div className="modal-body calender-info">
          <Row>
            <Col sm={4}>
              <ReactCalendar
                onChange={onChange}
                value={value}
                className="calenderDiv"
              />
            </Col>
            <Col sm={8}>
              <div className="date-format">
                <p>vendredi 23 juillet</p>

                <div className="availableListTime">
                  <svg
                    className="svg-inline--fa fa-sun fa-w-16"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="sun"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="#f6cd469"
                      d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
                    ></path>
                  </svg>
                  <span className="btn btn-link mr-3 mb-3 active">
                    {' '}
                    08:00 - 08:30{' '}
                  </span>
                  <span className="btn btn-link mr-3 mb-3 active">
                    {' '}
                    08:30 - 09:00{' '}
                  </span>
                  <span className="btn btn-link mr-3 mb-3 active">
                    {' '}
                    09:00 - 09:30{' '}
                  </span>
                </div>
                <div className="availableListTime">
                  <svg
                    className="svg-inline--fa fa-sun fa-w-16"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="sun"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="#f6cd469"
                      d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
                    ></path>
                  </svg>
                  <span className="btn btn-link mr-3 mb-3 active">
                    {' '}
                    08:00 - 08:30{' '}
                  </span>
                  <span className="btn btn-link mr-3 mb-3 active">
                    {' '}
                    08:30 - 09:00{' '}
                  </span>
                  <span className="btn btn-link mr-3 mb-3 active">
                    {' '}
                    09:00 - 09:30{' '}
                  </span>
                </div>
              </div>
              <div>
                <input
                  type="radio"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label htmlFor="vehicle1">calendar.trial_request</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label htmlFor="vehicle1">calendar.request_see_vehicle</label>
              </div>

              <Form.Check
                type="switch"
                id="custom-switch"
                label="calendar.remind_me_jus_before"
              />
              <Button type="button" className="btn btn-primary mt-2 btn-blue w100">
                calender make an appointment
              </Button>
            </Col>
          </Row>
        </div>
      </CommonModal>
    </>
  );
}

export default Order;
