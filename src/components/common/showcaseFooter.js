import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import ShwLogo from "../../images/default-vehicle.png";
import Car2 from "../../images/default-vehicle.png";
function ShowNav(props) {
  return (
    <>
      <div className="showcase-footer">
        <div className="d-flex justify-content-center align-items-center f-content">
          <img src={Car2} />
          <div className="footer-links">
            <ul>
              <li>home</li>
              <li>products</li>

              <li>contact</li>

              <li>a props</li>
              <li>reaction</li>
            </ul>
          </div>
          <div className="btn-grps">
            <ul>
              <li>page.shop.share_in:</li>
              <li>google</li>
              <li>facebook</li>
              <li>twitter</li>
            </ul>
          </div>
          <p className="font-italic">page.shop.created_by CarToBike © 2021</p>
        </div>
      </div>
    </>
  );
}

export default ShowNav;
