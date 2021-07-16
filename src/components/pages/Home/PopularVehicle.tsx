import React from "react";
import { Button, Container, Card } from "react-bootstrap";
import { Row, Col } from './common/global/elements';
import * as Assets from './common/assets';

function Vehicle() {
  return (
    <>
      <section className="last-product">
        <div className="">
          <h2 className="title-h2">Popular vehicles for sale near you</h2>
          <Row>
            <Col lg={4} className="left-intro">
              <Card>
                <div className="ribbon ribbon_target ribbon-success">
                  <span className="ribbon_inner"></span> Enchère en cours{" "}
                </div>
                <Card.Img variant="top" src={Assets.InProgress} />
                <Card.Body>
                  <h3 className="titre mt-0"> Voiture </h3>
                  <div className="info_auction">
                    <p>
                      <span className="label_infoAuction">Nombre de produit</span> :{" "}
                      <span className="val_infoAuction text-success">1</span>
                    </p>
                    <p className="time_auction">
                      <span className="label_infoAuction">remaining time</span>
                      <span className="val_infoAuction">17-06-2021 12:55</span>
                    </p>
                    <p>
                      <span className="label_infoAuction">Date début</span> :{" "}
                      <span className="val_infoAuction">17-06-2021 12:55</span>
                    </p>
                    <p>
                      <span className="label_infoAuction">Date fin</span> :{" "}
                      <span className="val_infoAuction">27-08-2021 12:00</span>
                    </p>
                    <p>
                      <span className="label_infoAuction">Vente exclusive</span> :{" "}
                      <span className="val_infoAuction">17-06-2021 12:55</span>
                    </p>
                    <div className="option">
                      <div className="d-flex py-2">
                        <div className="flag_country mr-2">
                          <span className="flag ">
                            <i className="iti-flag be"></i>
                          </span>
                        </div>
                        <div className="flag_country">
                          <span className="flag ">
                            <i className="iti-flag fr"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} className="left-intro">
              <Card>
                <div className="ribbon ribbon_target ribbon-warning">
                  <span className="ribbon_inner"></span> Enchère futur{" "}
                </div>
                <Card.Img variant="top" src={Assets.InProgress2} />
                <Card.Body>
                  <h3 className="titre mt-0"> Voiture </h3>
                  <div className="info_auction">
                    <p>
                      <span className="label_infoAuction">Nombre de produit</span> :{" "}
                      <span className="val_infoAuction text-success">1</span>
                    </p>
                    <p className="time_auction">
                      <span className="label_infoAuction">remaining time</span>
                      <span className="val_infoAuction">17-06-2021 12:55</span>
                    </p>
                    <p>
                      <span className="label_infoAuction">Date début</span> :{" "}
                      <span className="val_infoAuction">17-06-2021 12:55</span>
                    </p>
                    <p>
                      <span className="label_infoAuction">Date fin</span> :{" "}
                      <span className="val_infoAuction">27-08-2021 12:00</span>
                    </p>
                    <p>
                      <span className="label_infoAuction">Vente exclusive</span> :{" "}
                      <span className="val_infoAuction">17-06-2021 12:55</span>
                    </p>
                    <div className="option">
                      <div className="d-flex py-2">
                        <div className="flag_country mr-2">
                          <span className="flag ">
                            <i className="iti-flag be"></i>
                          </span>
                        </div>
                        <div className="flag_country">
                          <span className="flag ">
                            <i className="iti-flag fr"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} className="left-intro">
              <Card>
                <div className="ribbon ribbon_target ribbon-danger">
                  <span className="ribbon_inner"></span> Enchère cloturés{" "}
                </div>
                <Card.Img variant="top" src={Assets.InProgress3} />
                <Card.Body>
                  <h3 className="titre mt-0"> Voiture </h3>
                  <div className="info_auction">
                    <p>
                      <span className="label_infoAuction">Nombre de produit</span> :{" "}
                      <span className="val_infoAuction text-success">1</span>
                    </p>
                    <p className="time_auction">
                      <span className="label_infoAuction">remaining time</span>
                      <span className="val_infoAuction">17-06-2021 12:55</span>
                    </p>
                    <p>
                      <span className="label_infoAuction">Date début</span> :{" "}
                      <span className="val_infoAuction">17-06-2021 12:55</span>
                    </p>
                    <p>
                      <span className="label_infoAuction">Date fin</span> :{" "}
                      <span className="val_infoAuction">27-08-2021 12:00</span>
                    </p>
                    <p>
                      <span className="label_infoAuction">Vente exclusive</span> :{" "}
                      <span className="val_infoAuction">17-06-2021 12:55</span>
                    </p>
                    <div className="option">
                      <div className="d-flex py-2">
                        <div className="flag_country mr-2">
                          <span className="flag ">
                            <i className="iti-flag be"></i>
                          </span>
                        </div>
                        <div className="flag_country">
                          <span className="flag ">
                            <i className="iti-flag fr"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="text-center mt-5">
            <Button className="btn btn-brand btn-sm">
              {" "}
              La liste des enchères{" "}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Vehicle;
