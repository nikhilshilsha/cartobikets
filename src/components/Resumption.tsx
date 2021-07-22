import React from 'react';
import { Button, Container, Nav, Breadcrumb } from 'react-bootstrap';
import { Row, Col } from './common/global/elements';

import Sidebar from './common/global/CommonComponents/Sidebar';
import { Slider } from './common/global/elements';
import * as Assets from './common/assets';

function Auction() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Sidebar>
        <div className="auction-list p-2">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Breadcrumb>
                <Breadcrumb.Item active>Home</Breadcrumb.Item>

                <Breadcrumb.Item href="#">
                  breadcrumb.trade-in-page
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              {' '}
              <Button variant="warning">Ad an Add</Button>
            </div>
          </div>

          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home"> announces.filters.all (3)</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">
                {' '}
                announces.reprise.reprise_offers
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">
                {' '}
                announces.reprise.reprise_requests
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="mb-3 mt-3">
            <p className="m-0">
              <b className="len_result">3</b> announces.filters.concerning
            </p>
          </div>
          <div className="event-reprise pr-3">
            <span>Mes offres</span>
            <span>offre reçu</span>
            <span>offre différence</span>
          </div>
        </div>
        <div className="main-product products">
          <Row>
            <Col sm={3} className="slide-image">
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
            <Col sm={4}>
              <div className="price-data border-right pl-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5> Abarth Abarth 124 </h5>
                </div>
                <div className="content d-flex justify-content-between mr-2">
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
                <div className="user-car mt-0">
                  <img src={Assets.Contact} />
                  <div className="">
                    <a href="">Car</a>
                    <p>
                      particular vendor
                      <br /> Malines Belgium{' '}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={5}>
              <div className="d-flex justify-content-between align-items-center mb-2 ">
                <div>
                  <input
                    type="text"
                    placeholder="Mountant"
                    style={{ width: '34%' }}
                  />
                </div>
                <div>
                  {' '}
                  <i className="fas fa-share-alt mr-3"></i>
                  <i className="fas fa-file-pdf"></i>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Sidebar>
    </>
  );
}

export default Auction;
