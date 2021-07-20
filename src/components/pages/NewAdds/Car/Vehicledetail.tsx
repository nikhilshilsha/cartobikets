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
function Account() {
  return (
    <>
      <Container>
        {/* <div className="vehicleDetail">
          <div className="d-flex">
            <h5>choose the vehicle options</h5>
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
          </div>
        </div> */}
        <div className="details">
          <h4>vehicle details</h4>
          <label className="vehicle-type">Type de véhicle *</label>
          <input type="radio" id="html" name="fav_language" value="HTML" />
            <label htmlFor="html">New</label>
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
            className="ml-3"
          />
            <label htmlFor="html">old</label>
          <div className="brand">brand *</div>
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
