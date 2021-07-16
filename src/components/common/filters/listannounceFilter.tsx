import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";
export default (props) => {
  return (
    <div id="aside-searc" className="col-aside aside-search">
      <div className="wrapper_aside-search">
        <div className="ico-filter" onClick={() => props.setOpenSide()}>
          <div className="round-circle2">
            <i className="fas fa-times"></i>
          </div>
          <div className="quick_filter nav-default">
            <h4>
              <span>
                <i className="fas fa-filter"></i>{" "}
              </span>
              announces.filters.filter
            </h4>
          </div>
        </div>
        <div className="tab-nav ">
          <h4 className="mb-4">Vehicle type</h4>
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
          </ul>
        </div>
        <div className="tab-nav check">
          <h4 className="mb-3 mt-2">Vehicle state</h4>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label htmlFor="vehicle1">New</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label htmlFor="vehicle1">Old</label>
        </div>
        <div>
          <div className="mb-3">
            {" "}
            <Form.Label>Brand</Form.Label>
            <Form.Control type="" placeholder="brand" />
          </div>
          <div className="mb-3">
            {" "}
            <Form.Label>model</Form.Label>
            <Form.Control type="" placeholder="model" />
          </div>
          <div className="mb-3">
            {" "}
            <Form.Label>Registration number</Form.Label>
            <Form.Control type="" placeholder="Registration number" />
          </div>
          <div className="mb-3">
            {" "}
            <Form.Label>References number</Form.Label>
            <Form.Control type="" placeholder="References number" />
          </div>
          <div className="mb-3">
            {" "}
            <Form.Label>body</Form.Label>
            <Form.Control type="" placeholder="body" />
          </div>
          <div className="mb-3">
            <Form.Label className="d-block block-label">Year</Form.Label>
            <div className=" d-flex justify-space-between align-items-center">
              <div className="mr-2">
                <Form.Control type="" placeholder="from" />
              </div>{" "}
              <div>
                {" "}
                <Form.Control type="" placeholder="to" />
              </div>{" "}
            </div>
          </div>
          <div className="mb-3">
            {" "}
            <Form.Label>fuel</Form.Label>
            <Form.Control type="" placeholder="fuel" />
          </div>
          <div className="mb-3">
            {" "}
            <Form.Label>Gearbox</Form.Label>
            <Form.Control type="" placeholder="Gearbox" />
          </div>
          <div className="mb-3">
            {" "}
            <Form.Label>mileage</Form.Label>
            <Form.Control type="" placeholder="mileage" />
          </div>
          <div className="mb-3">
            {" "}
            <Form.Label>fiscal power</Form.Label>
            <Form.Control type="" placeholder="fiscal power" />
          </div>
          <div className=" d-flex justify-space-between align-items-center mb-2">
            <div className="mr-2">
              <Form.Control type="" placeholder="from" />
            </div>{" "}
            <div>
              {" "}
              <Form.Control type="" placeholder="to" />
            </div>{" "}
          </div>
          <div className="item-filter mt-3"></div>
        </div>

        <div className="quick_filter nav-default mt-3">
          <h4>
            <span>
              <i className="fas fa-rupee-sign"></i>
            </span>
            price
          </h4>
        </div>
        <div className="mb-3">
          <Form.Label className="d-block block-label">prize</Form.Label>
          <div className=" d-flex justify-space-between align-items-center">
            <div className="mr-2">
              <Form.Control type="" placeholder="from" />
            </div>{" "}
            <div>
              {" "}
              <Form.Control type="" placeholder="to" />
            </div>{" "}
          </div>
        </div>
        <div className="tab-nav check">
          <div>
            {" "}
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">Promotional price</label>
          </div>
          <div>
            {" "}
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">VAT Deductible</label>
          </div>
          <div>
            {" "}
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">Guarantee</label>
          </div>
        </div>
        <div className="item-filter mt-2 mb-3"></div>
        <div className="quick_filter nav-default">
          <h4>
            <span>
              <i className="fas fa-palette"></i>
            </span>
            color
          </h4>
        </div>
        <div className="mt-3">
          <Form.Label>Exterior color</Form.Label>

          <Form.Control type="" placeholder="Country" />
        </div>
        <div className="mt-3">
          <Form.Label>Color Interior</Form.Label>

          <Form.Control type="" placeholder="Country" />
        </div>
        <div className="item-filter mt-3 mb-3"></div>
        <div className="quick_filter nav-default mt-3">
          <h4>
            <span>
              <i className="fas fa-globe-americas"></i>{" "}
            </span>
            rental
          </h4>
        </div>
        <div className="mt-3">
          {" "}
          <Form.Control type="" placeholder="Country" />
          <Form.Control type="" placeholder="Localty" className="mt-3" />
        </div>
        <div className="item-filter mt-3 mb-3"></div>
        <div className="tab-nav check">
          <div>
            {" "}
            <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">good condition</label>
          </div>
          <div>
            {" "}
            <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">Damaged vehicle</label>
          </div>
        </div>
        <div className="mt-3">
          <Form.Label>no of doors</Form.Label>

          <Form.Control type="" placeholder="" />
        </div>
        <div className="mt-3">
          <Form.Label>number of seats</Form.Label>

          <Form.Control type="" placeholder="" />
        </div>
        <div className="mt-3 check">
          {" "}
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label htmlFor="vehicle1">Damaged vehicle</label>
        </div>
        <div className="item-filter mt-3 mb-3"></div>
        <div className="quick_filter nav-default">
          <h4>
            <span>
              <i className="fas fa-palette"></i>
            </span>
            Vehicle options
          </h4>
        </div>
      </div>
    </div>
  );
};
