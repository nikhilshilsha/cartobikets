import React, { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import * as Assets from '../../../common/assets';
import { Select, Lable, Row, Col } from '../../../common/global/elements';
import { CKEditor } from 'ckeditor4-react';
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
        <div className="add-details">
          <h5>Details of the ad</h5>
          <div className="dataAdd">
            <label className="vehicle-type">type of sale *</label>
            <input type="radio" id="html" name="fav_language" value="HTML" />
              <label htmlFor="html">Immediate sale</label>
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
              className="ml-3"
            />
              <label htmlFor="html">auction</label>
            <div className="prize-div">
              <p className="titlePrice">particular price</p>
              <Row>
                <Col sm={3}>
                  <Lable
                    className="d-block block-label"
                    lable="Price incl.VAT (Particulars) :"
                  />
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
                    lable="discount rate:"
                  />
                  <Select
                    options={options}
                    handleChange={e => setSelectValue(e)}
                    selectedOption={selectValue}
                    isMulti={true}
                  />
                </Col>
              </Row>
            </div>
            <div className="prize-div">
              <p className="titlePrice">Professional Award</p>
              <Row>
                <Col sm={3}>
                  <Lable
                    className="d-block block-label"
                    lable="Price incl.VAT (Professionals) :"
                  />
                  <Select
                    options={options}
                    handleChange={e => setSelectValue(e)}
                    selectedOption={selectValue}
                    isMulti={true}
                  />
                </Col>
              </Row>
              <div className="vatDiv">
                <Lable className="d-block block-label" lable="VAT Deductible" />
                <Form.Check type="switch" id="custom-switch" />
              </div>
            </div>
            <div className="prize-div">
              <p className="titlePrice">Professional Award</p>
              <Row>
                <Col sm={3}>
                  <Lable
                    className="d-block block-label"
                    lable="Guarantee (Duration months):"
                  />
                  <Select
                    options={options}
                    handleChange={e => setSelectValue(e)}
                    selectedOption={selectValue}
                    isMulti={true}
                  />
                </Col>
              </Row>
              <Lable
                className="d-block block-label mt-3"
                lable="vehicle.fields.description :"
              />
              <CKEditor
                initData="Hello from CKEditor 4!"
                //   onInstanceReady={handleInstanceReady}
              />
              <div className="">
                <Lable
                  className="d-block block-label mt-3"
                  lable="announcement title :"
                />
                <Form.Control type="" placeholder="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Account;
