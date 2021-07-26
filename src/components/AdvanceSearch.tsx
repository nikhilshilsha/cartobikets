import React, { useState } from 'react';
import { Container, Form, Breadcrumb, Nav, Table } from 'react-bootstrap';
import Select from 'react-select';
import { Row, Col, Button, Lable } from '../components/common/global/elements';
import Navbar from '../components/common/global/CommonComponents/Navbar';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
function Serch() {
  const [selectValue, setSelectValue] = useState('');

  return (
    <>
      <Navbar />
      <Container>
        <div className="advanced-search">
          <div className="detail_search">
            <a href="">back</a>
            <h4 className="text-center mt-3">Detailed Search</h4>
            <div className="right_button">
              <Button
                type="button"
                className="btn btn-primary ml-lg-2 btn_clear"
              >
                Save
              </Button>
              <Button
                type="button"
                className="btn btn-primary ml-lg-2 btn_search"
              >
                Cancel
              </Button>
            </div>
          </div>
          <div className="details_vehicle">
            <h5>Vehicle Details</h5>
            <h6>vehicle state</h6>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">new</label>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">old</label>
          </div>
          <Row className="Form_detail">
            <Col sm={4}>
              <Lable className="d-block block-label" lable="brand" />

              <Select
                options={options}
                handleChange={e => setSelectValue(e)}
                selectedOption={selectValue}
                isMulti={true}
              />
            </Col>
            <Col sm={4}>
              <Lable className="d-block block-label" lable="model" />

              <Select
                options={options}
                handleChange={e => setSelectValue(e)}
                selectedOption={selectValue}
                isMulti={true}
              />
            </Col>
            <Col sm={4}>
              <Lable
                className="d-block block-label"
                lable="320
First Run Date"
              />

              <Select
                options={options}
                handleChange={e => setSelectValue(e)}
                selectedOption={selectValue}
                isMulti={true}
              />
            </Col>
          </Row>
          <Row className="Form_detail">
            <Col sm={4}>
              <Lable className="d-block block-label" lable="body" />

              <Select
                options={options}
                handleChange={e => setSelectValue(e)}
                selectedOption={selectValue}
                isMulti={true}
              />
            </Col>
            <Col sm={4}>
              <Lable className="d-block block-label" lable="Fuel" />

              <Select
                options={options}
                handleChange={e => setSelectValue(e)}
                selectedOption={selectValue}
                isMulti={true}
              />
            </Col>
            <Col sm={4}>
              <Lable className="d-block block-label" lable="Gearbox" />

              <Select
                options={options}
                handleChange={e => setSelectValue(e)}
                selectedOption={selectValue}
                isMulti={true}
              />
            </Col>
          </Row>
          <Row className="Form_detail">
            <Col sm={4}>
              <Lable className="d-block block-label" lable="   fiscal power" />
              <Row>
                <Col sm={4}>
                  <Select
                    options={options}
                    handleChange={e => setSelectValue(e)}
                    selectedOption={selectValue}
                    isMulti={true}
                  />
                </Col>
                <Col sm={4}>
                  {' '}
                  <Select
                    options={options}
                    handleChange={e => setSelectValue(e)}
                    selectedOption={selectValue}
                    isMulti={true}
                  />
                </Col>
                <Col sm={4}>
                  {' '}
                  <Select
                    options={options}
                    handleChange={e => setSelectValue(e)}
                    selectedOption={selectValue}
                    isMulti={true}
                  />
                </Col>
              </Row>
            </Col>
            <Col sm={4}>
              <Lable className="d-block block-label" lable="number of doors" />

              <Select
                options={options}
                handleChange={e => setSelectValue(e)}
                selectedOption={selectValue}
                isMulti={true}
              />
            </Col>
            <Col sm={4}>
              <Lable className="d-block block-label" lable="number of seats" />

              <Select
                options={options}
                handleChange={e => setSelectValue(e)}
                selectedOption={selectValue}
                isMulti={true}
              />
            </Col>
          </Row>
          <Row className="Form_detail">
            <Col sm={4}>
              <Lable className="d-block block-label" lable="   fiscal power" />
              <Row>
                <Col sm={6}>
                  <Select
                    options={options}
                    handleChange={e => setSelectValue(e)}
                    selectedOption={selectValue}
                    isMulti={true}
                  />
                  <div className="mt-2">
                    <input
                      type="radio"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label htmlFor="vehicle1" className="ml-2">
                      Guarntee
                    </label>
                  </div>
                </Col>
                <Col sm={6}>
                  {' '}
                  <Select
                    options={options}
                    handleChange={e => setSelectValue(e)}
                    selectedOption={selectValue}
                    isMulti={true}
                  />
                  <div className="mt-2">
                    <input
                      type="radio"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label htmlFor="vehicle1" className="ml-2">
                      good condition
                    </label>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={4}>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label htmlFor="vehicle1" className="ml-2">
                Damaged vehicle
              </label>
            </Col>
          </Row>
          <div className="border-bottom mt-3"></div>
          <div className="details_vehicle ">
            <h5 className="pt-3">Details of the ad</h5>
            <h6>vendor typer</h6>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">professional vendor</label>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">particular vendor</label>

            <Row className="mt-3">
              <Col sm={3}>
                <Lable className="d-block block-label" lable="country" />

                <Select
                  options={options}
                  handleChange={e => setSelectValue(e)}
                  selectedOption={selectValue}
                  isMulti={true}
                />
              </Col>
              <Col sm={3}>
                <Lable className="d-block block-label" lable="locality" />

                <Select
                  options={options}
                  handleChange={e => setSelectValue(e)}
                  selectedOption={selectValue}
                  isMulti={true}
                />
              </Col>
              <Col sm={3}>
                <Lable
                  className="d-block block-label"
                  lable="fields.rayon (km)"
                />

                <Select
                  options={options}
                  handleChange={e => setSelectValue(e)}
                  selectedOption={selectValue}
                  isMulti={true}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={4}>
                <Lable className="d-block block-label" lable="price" />

                <Row>
                  <Col sm={6}>
                    <Select
                      options={options}
                      handleChange={e => setSelectValue(e)}
                      selectedOption={selectValue}
                      isMulti={true}
                    />
                  </Col>
                  <Col sm={6}>
                    {' '}
                    <Select
                      options={options}
                      handleChange={e => setSelectValue(e)}
                      selectedOption={selectValue}
                      isMulti={true}
                    />
                  </Col>
                </Row>
              </Col>
              <Col sm={4}>
                <Row>
                  <Col sm={6}>
                    <div className="mt-2">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label htmlFor="vehicle1" className="ml-2">
                        Guarntee
                      </label>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="mt-2">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label htmlFor="vehicle1" className="ml-2">
                        Guarntee
                      </label>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="border-bottom mt-3"></div>
          <h5 className="mt-3">Engine & Environment</h5>
          <Row className="Form_detail">
            <Col sm={4}>
              <Lable className="d-block block-label" lable="cylinder cm" />

              <Select
                options={options}
                handleChange={e => setSelectValue(e)}
                selectedOption={selectValue}
                isMulti={true}
              />
            </Col>
            <Col sm={4}>
              <Lable className="d-block block-label" lable="number of speeds" />

              <Select
                options={options}
                handleChange={e => setSelectValue(e)}
                selectedOption={selectValue}
                isMulti={true}
              />
            </Col>
            <Col sm={4}>
              <Lable className="d-block block-label" lable="Drive wheel" />

              <Select
                options={options}
                handleChange={e => setSelectValue(e)}
                selectedOption={selectValue}
                isMulti={true}
              />
            </Col>
          </Row>
          <Row className="Form_detail">
            <Col sm={4}>
              <Lable
                className="d-block block-label"
                lable="CO2 emissions (g/km)"
              />

              <Select
                options={options}
                handleChange={e => setSelectValue(e)}
                selectedOption={selectValue}
                isMulti={true}
              />
            </Col>
            <Col sm={4}>
              <Lable
                className="d-block block-label"
                lable="Pollution standard"
              />

              <Select
                options={options}
                handleChange={e => setSelectValue(e)}
                selectedOption={selectValue}
                isMulti={true}
              />
            </Col>
            <Col sm={4}>
              <Lable
                className="d-block block-label"
                lable="environmental classification"
              />

              <Select
                options={options}
                handleChange={e => setSelectValue(e)}
                selectedOption={selectValue}
                isMulti={true}
              />
            </Col>
          </Row>
          <Row className="Form_detail">
            <Col sm={4}>
              <Lable
                className="d-block block-label"
                lable="combined (l/100km)"
              />

              <Select
                options={options}
                handleChange={e => setSelectValue(e)}
                selectedOption={selectValue}
                isMulti={true}
              />
            </Col>
            <Col sm={4}>
              <Lable
                className="d-block block-label"
                lable="In urban (l/100km)"
              />

              <Select
                options={options}
                handleChange={e => setSelectValue(e)}
                selectedOption={selectValue}
                isMulti={true}
              />
            </Col>
            <Col sm={4}>
              <Lable
                className="d-block block-label"
                lable="In extra-urban (l/100km)"
              />

              <Select
                options={options}
                handleChange={e => setSelectValue(e)}
                selectedOption={selectValue}
                isMulti={true}
              />
            </Col>
          </Row>
          <div className="border-bottom mt-3"></div>
        </div>
      </Container>
    </>
  );
}

export default Serch;
