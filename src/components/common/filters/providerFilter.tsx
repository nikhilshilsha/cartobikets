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
          <div className="quick_filter nav-default mb-3">
            <h4>
              <span>
                <i className="fas fa-filter"></i>{" "}
              </span>
              announces.filters.filter
            </h4>
          </div>
        </div>

        <div>
          <div className="mb-3">
            {" "}
            <Form.Label>id</Form.Label>
            <Form.Control type="" placeholder="id" />
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
              <i className="fas fa-globe-americas"></i>{" "}
            </span>
            rental
          </h4>
        </div>

        <div className="mt-3">
          {" "}
          <Form.Control type="" placeholder="country" />
          <Form.Control type="" placeholder="country" className="mt-2" />
        </div>
      </div>
    </div>
  );
};
