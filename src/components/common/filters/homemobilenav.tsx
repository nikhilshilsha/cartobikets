import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Container,
  Row,
  Col,
  Form,
} from 'react-bootstrap';
import { Logo } from '../assets';
import { Button } from '../global/elements';

export default props => {
  return (
    <>
      <div className="mobiletop-nav">
        <div className="top-brand">
          <img src={Logo} className="screen-img" />
        </div>
        <ul>
          <li>My Ads</li>
          <li>My Favorites</li>
        </ul>
        <div className="">
          <Button
            type="button"
            className="btn btn-primary ml-lg-2 btnModalAds"
            data-toggle="modal"
            data-target="#modalAds"
          >
            <span className="d-flex justify-content-center">
              <i className="icon icon-add-car mr-2"></i>Add an add
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};
