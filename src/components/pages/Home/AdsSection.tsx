import React from 'react';
import { Container, Nav, Tabs, Tab } from 'react-bootstrap';
import { Row, Col, Button, Form } from '../../common/global/elements';

function Ads() {
  const InputFields = [
    {
      type: 'text',
      name: 'search',
      placeholder: 'brand',
      className: '',
    },
    {
      type: 'text',
      name: 'search',
      placeholder: 'brand',
      className: '',
    },
  ];
  const InputFields2 = [
    {
      type: 'text',
      name: 'model',
      placeholder: 'brand',
      className: '',
    },
    {
      type: 'text',
      name: 'brand',
      placeholder: 'brand',
      className: '',
    },
  ];
  return (
    <>
      <section className="section_ads">
        <div className="intro-tab-wrapper animate">
          <div className="tab-content">
            <div className="tab-nav d-flex justify-content-between align-items-center">
              <ul className="nav-tabs">
                <li>
                  <i className="fas fa-motorcycle"></i>
                </li>
                <li>
                  <i className="fas fa-motorcycle"></i>
                </li>

                <li>
                  <i className="fas fa-bicycle"></i>
                </li>
                <li>
                  <i className="fas fa-bicycle"></i>
                </li>
              </ul>
              <div>
                <ul className="right-link">
                  <li>
                    <i className="fas fa-dharmachakra"></i>
                  </li>
                  <li>
                    <i className="fas fa-cog"></i>
                  </li>

                  <li>
                    <i className="fas fa-compress-alt"></i>
                  </li>
                  <li>
                    <i className="fas fa-hat-cowboy-side"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-2 cycle-form">
              <Container>
                <Row>
                  <Col lg={3}>
                    {' '}
                    <Form fields={InputFields} />
                  </Col>
                  <Col lg={3}>
                    {' '}
                    <Form fields={InputFields2} />
                  </Col>
                  <Col lg={3}>
                    {' '}
                    <Form fields={InputFields2} />
                  </Col>
                  <Col lg={3}>
                    {' '}
                    <Form fields={InputFields2} />
                  </Col>
                </Row>
                <div className="advance-search d-flex justify-content-between align-items-center">
                  <a href="">Advanced serach</a>
                  <Button type="button" className="btn btn-primary btn-search">
                    <i className="fas fa-search"></i> Search
                  </Button>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ads;
