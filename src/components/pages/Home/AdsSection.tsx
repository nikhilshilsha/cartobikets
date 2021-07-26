import React, { useState } from 'react';
import { Container, Nav, Tabs, Tab } from 'react-bootstrap';
import { Row, Col, Button, Form, Select } from '../../common/global/elements';

function Ads() {
  const [selectValue, setSelectValue] = useState('');
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
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
                    <Select
                      options={options}
                      handleChange={e => setSelectValue(e)}
                      selectedOption={selectValue}
                      isMulti={true}
                      className="mb-4"
                    />
                    <Select
                      options={options}
                      handleChange={e => setSelectValue(e)}
                      selectedOption={selectValue}
                      isMulti={true}
                    />
                    {/* <Form fields={InputFields} /> */}
                  </Col>
                  <Col lg={3}>
                    {' '}
                    <Select
                      options={options}
                      handleChange={e => setSelectValue(e)}
                      selectedOption={selectValue}
                      isMulti={true}
                      className="mb-4"
                    />
                    <Select
                      options={options}
                      handleChange={e => setSelectValue(e)}
                      selectedOption={selectValue}
                      isMulti={true}
                    />
                  </Col>
                  <Col lg={3}>
                    <Row>
                      <Col lg={6} className="pr-0">
                        <Select
                          options={options}
                          handleChange={e => setSelectValue(e)}
                          selectedOption={selectValue}
                          isMulti={true}
                          className="mb-4"
                        />
                      </Col>
                      <Col lg={6} className="pl-0">
                        <Select
                          options={options}
                          handleChange={e => setSelectValue(e)}
                          selectedOption={selectValue}
                          isMulti={true}
                          className="mb-4"
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col lg={6} className="pr-0">
                        <Select
                          options={options}
                          handleChange={e => setSelectValue(e)}
                          selectedOption={selectValue}
                          isMulti={true}
                          className="mb-4"
                        />
                      </Col>
                      <Col lg={6} className="pl-0">
                        <Select
                          options={options}
                          handleChange={e => setSelectValue(e)}
                          selectedOption={selectValue}
                          isMulti={true}
                          className="mb-4"
                        />
                      </Col>
                    </Row>
                  </Col>

                  <Col lg={3}>
                    <Select
                      options={options}
                      handleChange={e => setSelectValue(e)}
                      selectedOption={selectValue}
                      isMulti={true}
                      className="mb-4"
                    />
                    <Select
                      options={options}
                      handleChange={e => setSelectValue(e)}
                      selectedOption={selectValue}
                      isMulti={true}
                    />
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
