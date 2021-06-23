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
        <div className="tab-nav ">
          <h4 className="mb-4">Vehicle type</h4>
          <ul className="nav-tabs">
            <li>
              <i class="fas fa-motorcycle"></i>
            </li>
            <li>
              <i class="fas fa-motorcycle"></i>
            </li>

            <li>
              <i class="fas fa-bicycle"></i>
            </li>
          </ul>
        </div>
        <div>
          <Form.Label>Date</Form.Label>
          <Form.Control type="" placeholder="Date" />
          <div className="item-filter mt-3"></div>
        </div>
        <div className="quick_filter nav-default mt-3">
          <h4>
            <span>
              <i class="fas fa-globe-americas"></i>{" "}
            </span>
            rental
          </h4>
        </div>
        <div className="mt-3">
          {" "}
          <Form.Control type="" placeholder="Country" />
          <Form.Control type="" placeholder="Localty" className="mt-3" />
        </div>
      </div>
    </div>
  );
};
