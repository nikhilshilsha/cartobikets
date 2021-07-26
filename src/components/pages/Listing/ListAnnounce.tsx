import React, { useState } from 'react';
import { Button, Container, Nav, Breadcrumb, Form } from 'react-bootstrap';

import Sidebar from '../../common/global/CommonComponents/Sidebar';
import Slider from 'react-slick';
import { useHistory } from 'react-router-dom';

import * as Assets from '../../common/assets';

import { Row, Col } from '../../common/global/elements';
import CommonModal from '../../common/global/CommonComponents/commonModal';

function Auction() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [open, SetOpen] = useState(false);
  const [open1, SetOpen1] = useState(false);
  const [open3, SetOpen3] = useState(false);

  const history = useHistory();
  const closeIcon = (
    <>
      <img src={Assets.Close} className="closeIco" />
    </>
  );
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
              {' '}
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
                {' '}
                announces.filters.auction (
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">
                {' '}
                announces.filters.auction (
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="mb-3 mt-3">
            <p className="m-0">
              <b className="len_result">3</b> announces.filters.concerning
            </p>
          </div>
          <div className="taf-item">Car</div>
        </div>
        <div className="main-product products">
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
            <Col sm={7}>
              <div className="price-data">
                <div className="d-flex justify-content-between align-items-center">
                  <h5> Abarth Abarth 124 </h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <i className="fas fa-share-alt mr-3"></i>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h4> MInimum prize</h4>
                  <div className="d-flex justify-content-between align-items-center">
                    <i className="fas fa-share-alt mr-3"></i>
                    <i
                      className="fas fa-volume-down"
                      onClick={() => SetOpen3(!open3)}
                    ></i>
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
                      <i className="fas fa-search"></i>
                    </div>
                    0
                  </li>
                  <li>
                    <div className="circle">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    0
                  </li>
                  <li>
                    <div className="circle">
                      <i className="fas fa-star"></i>
                    </div>
                    0
                  </li>
                  <li>
                    <div className="circle">
                      <i className="far fa-envelope"></i>
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
            <Col sm={7}>
              <div className="price-data">
                <div className="d-flex justify-content-between align-items-center">
                  <h5> Abarth Abarth 124 </h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <i className="fas fa-pencil-alt mr-3"></i>
                    <i
                      className="fas fa-trash-alt mr-3"
                      onClick={() => SetOpen1(!open1)}
                    ></i>
                    <i className="fas fa-share-alt mr-3"></i>
                    <i className="fas fa-file-pdf mr-3"></i>
                    <i
                      className="fas fa-toggle-on"
                      onClick={() => SetOpen(!open)}
                    ></i>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h4> MInimum prize</h4>
                  <div className="d-flex justify-content-between align-items-center">
                    <i className="fas fa-share-alt mr-3"></i>
                    <i className="fas fa-file-pdf"></i>
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
                      <i className="fas fa-search"></i>
                    </div>
                    0
                  </li>
                  <li>
                    <div className="circle">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    0
                  </li>
                  <li>
                    <div className="circle">
                      <i className="fas fa-star"></i>
                    </div>
                    0
                  </li>
                  <li>
                    <div className="circle">
                      <i className="far fa-envelope"></i>
                    </div>
                    0
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <CommonModal
          openModal={open}
          onCloseModal={() => SetOpen(!open)}
          className={{ modal: 'togglemodal', closeButton: 'crossbutton' }}
          closeIcon={closeIcon}
        >
          <div className="modal-body">
            <div className="center-content">
              <div className="boxIcon bg-danger">
                <i className="fas fa-ban"></i>
              </div>
              <h3>announces.announce.title_unpublis</h3>
              <p>announces.announce.text_unpublished : Bmw BMW M3.</p>
              <div>
                <Button
                  type="button"
                  className="btn btn-primary ml-lg-2 btn-yes"
                >
                  Yes
                </Button>
                <Button
                  type="button"
                  className="btn btn-primary ml-lg-2 btn-no"
                >
                  No
                </Button>
              </div>
            </div>
          </div>
        </CommonModal>
        <CommonModal
          openModal={open1}
          onCloseModal={() => SetOpen1(!open1)}
          className={{ modal: 'togglemodal', closeButton: 'crossbutton' }}
          closeIcon={closeIcon}
        >
          <div className="modal-body">
            <div className="center-content">
              <div className="boxIcon bg-danger">
                <i className="fas fa-trash-alt"></i>
              </div>
              <h3>Delete</h3>
              <p>announces.announce.removeAds</p>
              <div>
                <Button
                  type="button"
                  className="btn btn-primary ml-lg-2 btn-yes"
                >
                  Yes
                </Button>
                <Button
                  type="button"
                  className="btn btn-primary ml-lg-2 btn-no"
                >
                  No
                </Button>
              </div>
            </div>
          </div>
        </CommonModal>
        <CommonModal
          openModal={open3}
          onCloseModal={() => SetOpen3(!open3)}
          className={{
            modal: 'togglemodal modalDiv',
            closeButton: 'crossbutton',
          }}
          closeIcon={closeIcon}
        >
          <div className="modal-body modalDiv">
            <div className="aanounce-content">
              <p>announces.announce.title_update_price</p>
              <div className="d-flex ml-5">
                <h6>Annonce enhère:</h6>

                <Form.Check type="switch" id="custom-switch" label="" />
              </div>
              <div className="d-flex ml-5">
                <h6>Annonce enhère:</h6>

                <Form.Check type="switch" id="custom-switch" label="" />
              </div>
              <div className="d-flex justify-content-center align-items-center p-2">
                <Button
                  type="button"
                  className="btn btn-primary ml-lg-2 btn-yes"
                >
                  Clear all
                </Button>
                <Button
                  type="button"
                  className="btn btn-primary ml-lg-2 btn-no"
                >
                  search
                </Button>
              </div>
            </div>
          
          </div>
        </CommonModal>
      </Sidebar>
    </>
  );
}

export default Auction;
