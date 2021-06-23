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
          <div className="quick_filter nav-default mb-3">
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
            <Form.Label>id customer</Form.Label>
            <Form.Control type="" placeholder="id customer" />
          </div>
          <div className="mb-3">
            {" "}
            <Form.Label>first and last name</Form.Label>
            <Form.Control type="" placeholder="first and last name" />
          </div>

          <div className="mb-3">
            {" "}
            <Form.Label>email address</Form.Label>
            <Form.Control type="" placeholder="email address" />
          </div>
          <div className="mb-3">
            {" "}
            <Form.Label>Telephone number</Form.Label>
            <Form.Control type="" placeholder="Telephone number" />
          </div>

          <div className="item-filter mt-3"></div>
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
            Document
          </h4>
        </div>
        <div className="mb-3">
          <Form.Label className="d-block block-label">
            Number of purchase orders
          </Form.Label>
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
          <Form.Label className="d-block block-label">
            Number of invoices
          </Form.Label>
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
          <Form.Label className="d-block block-label">
            Number of credit ratings
          </Form.Label>
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
