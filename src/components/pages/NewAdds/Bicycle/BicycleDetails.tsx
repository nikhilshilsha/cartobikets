import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Button,
  Container,
  Nav,
  Breadcrumb,
  Form,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import { Select } from '../../../common/global/elements';

function Account() {
  const [selectValue, setSelectValue] = useState('');
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  return (
    <>
      <Container>
        <div className="details">
          <h4>vehicle details</h4>
          <label className="vehicle-type">Type de véhicle *</label>
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          />  <label htmlFor="html">New</label>
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
            className="ml-3"
          />
            <label htmlFor="html">old</label>
          <Row>
            <Col sm={4}>
              <div className="brand">
                <label className="vehicle-type"> Type moto *</label>

                <Select
                  options={options}
                  handleChange={e => setSelectValue(e)}
                  selectedOption={selectValue}
                  isMulti={true}
                />
              </div>
            </Col>
            <Col sm={4}>
              <div className="brand">
                <label className="vehicle-type"> brand *</label>
              </div>
            </Col>
            <Col sm={4}>
              <div className="brand">
                <label className="vehicle-type"> first run date *</label>
              </div>
              <Row>
                <Col sm={6}>
                  <div className="">
                    <Select
                      options={options}
                      handleChange={e => setSelectValue(e)}
                      selectedOption={selectValue}
                      isMulti={true}
                    />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="">
                    <Select
                      options={options}
                      handleChange={e => setSelectValue(e)}
                      selectedOption={selectValue}
                      isMulti={true}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <div className="brand">
                <label className="vehicle-type"> Freinage *</label>

                <Select
                  options={options}
                  handleChange={e => setSelectValue(e)}
                  selectedOption={selectValue}
                  isMulti={true}
                />
              </div>
            </Col>
            <Col sm={4}>
              <div className="brand">
                <label className="vehicle-type"> Taille cadre *</label>

                <Select
                  options={options}
                  handleChange={e => setSelectValue(e)}
                  selectedOption={selectValue}
                  isMulti={true}
                />
              </div>
            </Col>
            <Col sm={4}>
              <div className="brand">
                <label className="vehicle-type"> vehicle.fields.weight</label>

                <Select
                  options={options}
                  handleChange={e => setSelectValue(e)}
                  selectedOption={selectValue}
                  isMulti={true}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <div className="brand">
                <label className="vehicle-type">
                  {' '}
                  vehicle.fields.wheel_diameter
                </label>

                <Select
                  options={options}
                  handleChange={e => setSelectValue(e)}
                  selectedOption={selectValue}
                  isMulti={true}
                />
              </div>
            </Col>
            <Col sm={4}>
              <div className="brand">
                <label className="vehicle-type"> color</label>

                <div className="color-platlete">
                  <div className="green btn"></div>
                  <div className="blue btn"></div>
                  <div className="white btn"></div>
                  <div className="orange btn"></div>
                  <div className="red btn"></div>
                  <div className="beige btn"></div>
                  <div className="brown btn"></div>
                  <div className="grey btn"></div>
                  <div className="black btn"></div>
                  <div className="yellow btn"></div>

                  <div className="gray-lite btn"></div>

                  <div className="other btn"></div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="btn-continue">
          <Button type="button" className="btn btn-primary btn-search">
            Continue
            <svg
              className="svg-inline--fa fa-angle-right fa-w-8"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              data-fa-i2svg=""
            >
              <path
                fill="#fff"
                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
              ></path>
            </svg>
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Account;