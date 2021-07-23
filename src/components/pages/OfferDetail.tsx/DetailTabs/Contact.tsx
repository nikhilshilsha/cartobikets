import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from '../../../common/global/elements';
import * as Assets from '../../../common/assets';

function Account() {
  return (
    <>
      <Container className="options">
        <Row>
          <Col sm={4}>
            <div className="card">
              <div className="d-flex border-bottom">
                <img src={Assets.Boutiqu} />
                <div className="ml-3">
                  <h6>Car</h6>
                  <span>particular vendor</span>
                </div>
              </div>
              <div className="d-flex mt-2">
                <i className="fas fa-map-marked-alt"></i>
                <div>
                  <p>announces.announce.headquarters: </p>
                  <span>
                    Malines
                    <br /> Belgium
                  </span>
                </div>
              </div>
              <div className="d-flex mt-2">
                <i className="fas fa-phone"></i>
                <div>
                  <p>announces.announce.main_phone</p>
                  <span className="text-success">+32 0470 12 36 54</span>{' '}
                  <p className="mt-2">
                    announces.announce.other_
                    <br />
                    telephone_number:
                  </p>
                  <span className="text-success">+32 0470 12 36 54</span>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={8}>
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109740.86119302458!2d76.69331657473545!3d30.73521010737007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1625829914386!5m2!1sen!2sin"
                width="600"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Account;
