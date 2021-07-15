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
    <>
      <div className="mobiletop-nav">
        <div className="top-brand">
          {" "}
          <img src={Logo} className="screen-img" />
        </div>
        <ul>
          <li>My Ads</li>
          <li>My Favorites</li>
        </ul>
        <div className="">
          <button
            type="button"
            class="btn btn-primary ml-lg-2 btnModalAds"
            data-toggle="modal"
            data-target="#modalAds"
          >
            <span class="d-flex justify-content-center">
              <i class="icon icon-add-car mr-2"></i>Add an add
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
