import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import Car from "../images/acceuil1.png";

function Hero() {
  return (
    <>
      <div className="hero-section">
        <section className="section intro">
          <div class="bubble bubble-1"></div>
          <div class="bubble bubble-2"></div>

          <div class="bubble bubble-3"></div>

          <div class="bubble bubble-4"></div>

          <div class="bubble bubble-5"></div>

          <div class="bubble bubble-6"></div>
          <div class="bubble bubble-7"></div>

          <div class="bubble bubble-8"></div>

          <Container>
            <Row>
              <Col lg={6} className="left-intro">
                <div class="">
                  <h2 class="title-h2">
                    The car of your dreams is just a click away
                  </h2>
                  <p> for individuals and professionals </p>
                  <button type="button" class="btn btn-primary btn-yellow">
                    Trouvez la bonne affaire
                  </button>
                </div>
              </Col>
              <Col lg={6} className="right-intro">
                <div className="car-image">
                  <img src={Car} className="img-fluid" />
                  <div className="vedio-btn">
                    <a href="" className="overlay-link lightbox-image">
                      <svg
                        class="svg-inline--fa fa-play fa-w-14"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fa"
                        data-icon="play"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Hero;
