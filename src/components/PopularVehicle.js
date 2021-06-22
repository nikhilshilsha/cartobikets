import React from "react";
import { Row, Col, Button, Container, Card } from "react-bootstrap";
import InProgress from "../images/auction-inprogress.png";
import InProgress2 from "../images/auction-tomorrow.png";
import InProgress3 from "../images/auction-after-tomorrow.png";

function Vehicle() {
  return (
    <>
      <section className="last-product">
        <div className="">
          <h2 class="title-h2">Popular vehicles for sale near you</h2>
          <Row>
            <Col lg={4} className="left-intro">
              <Card>
                <div class="ribbon ribbon_target ribbon-success">
                  <span class="ribbon_inner"></span> Enchère en cours{" "}
                </div>
                <Card.Img variant="top" src={InProgress} />
                <Card.Body>
                  <h3 class="titre mt-0"> Voiture </h3>
                  <div className="info_auction">
                    <p>
                      <span class="label_infoAuction">Nombre de produit</span> :{" "}
                      <span class="val_infoAuction text-success">1</span>
                    </p>
                    <p className="time_auction">
                      <span class="label_infoAuction">remaining time</span>
                      <span class="val_infoAuction">17-06-2021 12:55</span>
                    </p>
                    <p>
                      <span class="label_infoAuction">Date début</span> :{" "}
                      <span class="val_infoAuction">17-06-2021 12:55</span>
                    </p>
                    <p>
                      <span class="label_infoAuction">Date fin</span> :{" "}
                      <span class="val_infoAuction">27-08-2021 12:00</span>
                    </p>
                    <p>
                      <span class="label_infoAuction">Vente exclusive</span> :{" "}
                      <span class="val_infoAuction">17-06-2021 12:55</span>
                    </p>
                    <div class="option">
                      <div class="d-flex py-2">
                        <div class="flag_country mr-2">
                          <span class="flag ">
                            <i class="iti-flag be"></i>
                          </span>
                        </div>
                        <div class="flag_country">
                          <span class="flag ">
                            <i class="iti-flag fr"></i>
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
                <div class="ribbon ribbon_target ribbon-warning">
                  <span class="ribbon_inner"></span> Enchère futur{" "}
                </div>
                <Card.Img variant="top" src={InProgress2} />
                <Card.Body>
                  <h3 class="titre mt-0"> Voiture </h3>
                  <div className="info_auction">
                    <p>
                      <span class="label_infoAuction">Nombre de produit</span> :{" "}
                      <span class="val_infoAuction text-success">1</span>
                    </p>
                    <p className="time_auction">
                      <span class="label_infoAuction">remaining time</span>
                      <span class="val_infoAuction">17-06-2021 12:55</span>
                    </p>
                    <p>
                      <span class="label_infoAuction">Date début</span> :{" "}
                      <span class="val_infoAuction">17-06-2021 12:55</span>
                    </p>
                    <p>
                      <span class="label_infoAuction">Date fin</span> :{" "}
                      <span class="val_infoAuction">27-08-2021 12:00</span>
                    </p>
                    <p>
                      <span class="label_infoAuction">Vente exclusive</span> :{" "}
                      <span class="val_infoAuction">17-06-2021 12:55</span>
                    </p>
                    <div class="option">
                      <div class="d-flex py-2">
                        <div class="flag_country mr-2">
                          <span class="flag ">
                            <i class="iti-flag be"></i>
                          </span>
                        </div>
                        <div class="flag_country">
                          <span class="flag ">
                            <i class="iti-flag fr"></i>
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
                <div class="ribbon ribbon_target ribbon-danger">
                  <span class="ribbon_inner"></span> Enchère cloturés{" "}
                </div>
                <Card.Img variant="top" src={InProgress3} />
                <Card.Body>
                  <h3 class="titre mt-0"> Voiture </h3>
                  <div className="info_auction">
                    <p>
                      <span class="label_infoAuction">Nombre de produit</span> :{" "}
                      <span class="val_infoAuction text-success">1</span>
                    </p>
                    <p className="time_auction">
                      <span class="label_infoAuction">remaining time</span>
                      <span class="val_infoAuction">17-06-2021 12:55</span>
                    </p>
                    <p>
                      <span class="label_infoAuction">Date début</span> :{" "}
                      <span class="val_infoAuction">17-06-2021 12:55</span>
                    </p>
                    <p>
                      <span class="label_infoAuction">Date fin</span> :{" "}
                      <span class="val_infoAuction">27-08-2021 12:00</span>
                    </p>
                    <p>
                      <span class="label_infoAuction">Vente exclusive</span> :{" "}
                      <span class="val_infoAuction">17-06-2021 12:55</span>
                    </p>
                    <div class="option">
                      <div class="d-flex py-2">
                        <div class="flag_country mr-2">
                          <span class="flag ">
                            <i class="iti-flag be"></i>
                          </span>
                        </div>
                        <div class="flag_country">
                          <span class="flag ">
                            <i class="iti-flag fr"></i>
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
