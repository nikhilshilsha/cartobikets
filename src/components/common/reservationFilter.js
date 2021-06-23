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
    <div id="aside-searc" class="col-aside aside-search">
      <div className="wrapper_aside-search">
        <div className="ico-filter" onClick={() => props.setOpenSide()}>
          <div className="round-circle2">
            <i class="fas fa-times"></i>
          </div>
          <div className="quick_filter nav-default">
            <h4>
              <span>
                <i class="fas fa-filter"></i>{" "}
              </span>
              announces.filters.filter
            </h4>
          </div>
        </div>

        <div>
          <div className="mb-3">
            {" "}
            <Form.Label>Vehicle type</Form.Label>
            <Form.Control type="" placeholder="Vehicle type" />
          </div>
          <div className="mb-3">
            {" "}
            <Form.Label>Order number</Form.Label>
            <Form.Control type="" placeholder="Order number" />
          </div>

          <div className="mb-3">
            {" "}
            <Form.Label>name of the buyer</Form.Label>
            <Form.Control type="" placeholder="name of the buyer" />
          </div>
          <div className="mb-3">
            {" "}
            <Form.Label>brand</Form.Label>
            <Form.Control type="" placeholder="brand" />
          </div>
          <div className="mb-3">
            {" "}
            <Form.Label>model</Form.Label>
            <Form.Control type="" placeholder="model" />
          </div>
          {/* <div className="mb-3">
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
          </div> */}

          <div className="item-filter mt-3"></div>
        </div>

        <div className="quick_filter nav-default mt-3">
          <h4>
            <span>
              <i class="fas fa-calendar-alt"></i>
            </span>
            Order date
          </h4>
        </div>
        <div className="mt-3">
          {" "}
          <Form.Control type="" placeholder="order date" />
        </div>
        <div className="quick_filter nav-default mt-3">
          <h4>
            <span>
              <i class="fas fa-globe-americas"></i>{" "}
            </span>
            rental
          </h4>
        </div>

        <div className="item-filter mt-3"></div>
        <div className="mt-3">
          {" "}
          <Form.Control type="" placeholder="order date" />
          <Form.Control type="" placeholder="order date" className="mt-2" />
        </div>
        <div className="quick_filter nav-default mt-3">
          <h4>
            <span>
              <i class="fas fa-rupee-sign"></i>
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
            <label for="vehicle1">Promotional price</label>
          </div>
          <div>
            {" "}
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1">VAT Deductible</label>
          </div>
          <div>
            {" "}
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1">Guarantee</label>
          </div>
        </div>
        <div className="item-filter mt-3 mb-2"></div>
        <div className="quick_filter nav-default">
          <h4>
            <span>
              <i class="fas fa-user"></i>
            </span>
            vendor typer
          </h4>
        </div>
        <div className="mt-3 check">
          {" "}
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1">professional vendor</label>
        </div>
        <div className=" check">
          {" "}
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1">Particular vendor</label>
        </div>
      </div>
    </div>
  );
};
