import React from "react";
import { Row, Col, Button, Container, Nav, Breadcrumb } from "react-bootstrap";

import Sidebar from "./common/Sidebar";
import InProgress from "../images/auction-inprogress.png";
import Slider from "react-slick";

import InProgress2 from "../images/auction-tomorrow.png";
import Imge from "../images/mercedes-maybach.jpg";

import InProgress3 from "../images/auction-after-tomorrow.png";
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
                  breadcrumb.my-announces-list-page
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              {" "}
              <Button variant="warning">Ad an Add</Button>
            </div>
          </div>

          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home"> announces.filters.all (3)</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1"> announces.filters.auction </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">
                {" "}
                announces.filters.auction (
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">
                {" "}
                announces.filters.auction ({" "}
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div class="mb-3 mt-3">
            <p class="m-0">
              <b class="len_result">3</b> announces.filters.concerning
            </p>
          </div>
          <div className="taf-item">Car</div>
        </div>
        <div className="main-product products">
          <Row>
            <Col sm={3} className="slide-image">
              <Slider {...settings}>
                <div>
                  <img src={Imge} />
                </div>
                <div>
                  <img src={Imge} />
                </div>
                <div>
                  <img src={Imge} />
                </div>
                <div>
                  <img src={Imge} />
                </div>
                <div>
                  <img src={Imge} />
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
            </Col>
            <Col sm={7}>
              <div className="price-data">
                <div className="d-flex justify-content-between align-items-center">
                  <h5> Abarth Abarth 124 </h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <i class="fas fa-share-alt mr-3"></i>
                    <i class="fas fa-file-pdf"></i>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h4> MInimum prize</h4>
                  <div className="d-flex justify-content-between align-items-center">
                    <i class="fas fa-share-alt mr-3"></i>
                    <i class="fas fa-file-pdf"></i>
                  </div>
                </div>
                <div className="real-price">500 €</div>
                <div className="options d-flex justify-content-between">
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
                <div className="event-handel d-flex justify-content-between">
                  <p> announces.announce.time_left: </p>
                  <p> announces.announce.published_on </p>
                </div>
              </div>
            </Col>
            <Col sm={2}>
              <div className="statistics">
                <ul>
                  <li>
                    <div className="circle">
                      <i class="fas fa-search"></i>
                    </div>
                    0
                  </li>
                  <li>
                    <div className="circle">
                      <i class="fas fa-lightbulb"></i>
                    </div>
                    0
                  </li>
                  <li>
                    <div className="circle">
                      <i class="fas fa-star"></i>
                    </div>
                    0
                  </li>
                  <li>
                    <div className="circle">
                      <i class="far fa-envelope"></i>
                    </div>
                    0
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="main-product products mt-3">
          <Row>
            <Col sm={3} className="slide-image">
              <Slider {...settings}>
                <div>
                  <img src={Imge} />
                </div>
                <div>
                  <img src={Imge} />
                </div>
                <div>
                  <img src={Imge} />
                </div>
                <div>
                  <img src={Imge} />
                </div>
                <div>
                  <img src={Imge} />
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
            </Col>
            <Col sm={7}>
              <div className="price-data">
                <div className="d-flex justify-content-between align-items-center">
                  <h5> Abarth Abarth 124 </h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <i class="fas fa-share-alt mr-3"></i>
                    <i class="fas fa-file-pdf"></i>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h4> MInimum prize</h4>
                  <div className="d-flex justify-content-between align-items-center">
                    <i class="fas fa-share-alt mr-3"></i>
                    <i class="fas fa-file-pdf"></i>
                  </div>
                </div>
                <div className="real-price">500 €</div>
                <div className="options d-flex justify-content-between">
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
                <div className="event-handel d-flex justify-content-between">
                  <p> announces.announce.time_left: </p>
                  <p> announces.announce.published_on </p>
                </div>
              </div>
            </Col>
            <Col sm={2}>
              <div className="statistics">
                <ul>
                  <li>
                    <div className="circle">
                      <i class="fas fa-search"></i>
                    </div>
                    0
                  </li>
                  <li>
                    <div className="circle">
                      <i class="fas fa-lightbulb"></i>
                    </div>
                    0
                  </li>
                  <li>
                    <div className="circle">
                      <i class="fas fa-star"></i>
                    </div>
                    0
                  </li>
                  <li>
                    <div className="circle">
                      <i class="far fa-envelope"></i>
                    </div>
                    0
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Sidebar>
    </>
  );
}

export default Auction;
