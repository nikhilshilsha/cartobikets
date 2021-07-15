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

function ShowNav(props) {
  return (
    <header className="showcase-nav">
      <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
        <Navbar.Brand href="/">
          <img src={ShwLogo} className="" />
        </Navbar.Brand>
        <div className="d-flex justify-content-between">
          <ul className="right-links mob-view">
            <li>
              <a href="/showcase">home</a>
            </li>
            <li>
              <a href="/product">products</a>
            </li>
            <li>
              <a href="/contact">contact</a>
            </li>
            <li>
              <a href="/about">apropos</a>
            </li>
            <li>
              <a href="/review">reaction</a>
            </li>
            <li>
              <a href="/">
                <i class="fas fa-share-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </Navbar>
    </header>
  );
}

export default ShowNav;
