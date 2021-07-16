import React from 'react';
import { Button, Container, Card } from 'react-bootstrap';

import * as Assets from '../../common/assets';

import { Row, Col } from '../../common/global/elements';

function Vehicle() {
  return (
    <>
      <section className="w_blog text-center">
        <h2 className="title-h2 mb-4"> Our latest blog posts </h2>
        <div className="">
          <Row>
            <Col lg={4}>
              <div className="blog-thumb">
                <div className="blog-image">
                  <img src={Assets.Blog} />
                </div>
                <div className="blog-description">
                  <div className="blog-background"></div>
                  <div className="blog-tag text-uppercase">
                    <a href="#" title="">
                      Mercedes-Maybach
                    </a>
                  </div>
                  <div className="blog-title text-uppercase">
                    <a href="#">
                      Mercedes-Mybach classe S 2021 reprend sa place
                    </a>
                  </div>
                  <p>
                    {' '}
                    After the failed attempt to revive the now defunct Maybach
                    brand, Mercedes changed its stance by transforming it into a
                    super-luxury «claw» while giving it the name of Mercedes...{' '}
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="blog-thumb">
                <div className="blog-image">
                  <img src={Assets.Blog2} />
                </div>
                <div className="blog-description">
                  <div className="blog-background"></div>
                  <div className="blog-tag text-uppercase">
                    <a href="#" title="">
                      ACCIDENT
                    </a>
                  </div>
                  <div className="blog-title text-uppercase">
                    <a href="#">
                      What to do in the event of a traffic accident
                    </a>
                  </div>
                  <p>
                    {' '}
                    If you have an accident at the wheel of a vehicle or at the
                    handlebars of a two-wheeler, you must stop immediately and
                    secure the accident site. If you don’t and leave...
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="blog-thumb">
                <div className="blog-image">
                  <img src={Assets.Blog3} />
                </div>
                <div className="blog-description">
                  <div className="blog-background"></div>
                  <div className="blog-tag text-uppercase">
                    <a href="#" title="">
                      Mercedes-Maybach
                    </a>
                  </div>
                  <div className="blog-title text-uppercase">
                    <a href="#">
                      Mercedes-Mybach classe S 2021 reprend sa place
                    </a>
                  </div>
                  <p>
                    {' '}
                    After the failed attempt to revive the now defunct Maybach
                    brand, Mercedes changed its stance by transforming it into a
                    super-luxury «claw» while giving it the name of Mercedes...{' '}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default Vehicle;
