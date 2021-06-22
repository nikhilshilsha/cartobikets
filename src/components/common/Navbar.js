import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import Logo from "../../images/logo.png";
import Contact from "../../images/default-user.png";
import Add from "../../images/drops.gif";

function TopNav() {
  return (
    <>
      <header className="header">
        <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
          <Navbar.Brand href="#home">
            <img src={Logo} />
          </Navbar.Brand>
          <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <div className="d-flex justify-content-between">
                <ul>
                  <li>
                    <svg viewBox="0 0 90.7 90.7" width="34" height="34">
                      <g>
                        <path
                          fill="color ? color  '#28a745'"
                          d="M32.1,31.1l-9.8,35c-0.4,1.4-1.9,2.3-3.4,1.9l0,0c-1.4-0.4-2.3-1.9-1.9-3.4l9.8-35L32.1,31.1z"
                        />
                        <rect
                          fill="color ? color  '#28a745'"
                          x="22.7"
                          y="8"
                          transform="matrix(0.2686 -0.9633 0.9633 0.2686 2.5547 46.5017)"
                          width="18.3"
                          height="27.1"
                        />
                        <rect
                          fill="color ? color  '#28a745'"
                          x="35.8"
                          y="24.3"
                          transform="matrix(0.2686 -0.9633 0.9633 0.2686 9.1593 63.1573)"
                          width="20.7"
                          height="2.6"
                        />
                        <rect
                          fill="color ? color  '#28a745'"
                          x="7.3"
                          y="16.3"
                          transform="matrix(0.2686 -0.9633 0.9633 0.2686 -4.0498 29.846)"
                          width="20.7"
                          height="2.6"
                        />
                      </g>
                      <g>
                        <rect
                          fill="color ? color  '#28a745'"
                          x="48.8"
                          y="60.6"
                          width="26.6"
                          height="3.1"
                        />
                        <rect
                          fill="color ? color  '#28a745'"
                          x="46.1"
                          y="63.7"
                          width="32"
                          height="4.4"
                        />
                      </g>
                    </svg>
                  </li>
                  <li>
                    <svg viewBox="0 0 90.7 90.7" width="34" height="34">
                      <g>
                        <path
                          fill="color ? color  '#28a745'"
                          d="M32.1,31.1l-9.8,35c-0.4,1.4-1.9,2.3-3.4,1.9l0,0c-1.4-0.4-2.3-1.9-1.9-3.4l9.8-35L32.1,31.1z"
                        />
                        <rect
                          fill="color ? color  '#28a745'"
                          x="22.7"
                          y="8"
                          transform="matrix(0.2686 -0.9633 0.9633 0.2686 2.5547 46.5017)"
                          width="18.3"
                          height="27.1"
                        />
                        <rect
                          fill="color ? color  '#28a745'"
                          x="35.8"
                          y="24.3"
                          transform="matrix(0.2686 -0.9633 0.9633 0.2686 9.1593 63.1573)"
                          width="20.7"
                          height="2.6"
                        />
                        <rect
                          fill="color ? color  '#28a745'"
                          x="7.3"
                          y="16.3"
                          transform="matrix(0.2686 -0.9633 0.9633 0.2686 -4.0498 29.846)"
                          width="20.7"
                          height="2.6"
                        />
                      </g>
                      <g>
                        <rect
                          fill="color ? color  '#28a745'"
                          x="48.8"
                          y="60.6"
                          width="26.6"
                          height="3.1"
                        />
                        <rect
                          fill="color ? color  '#28a745'"
                          x="46.1"
                          y="63.7"
                          width="32"
                          height="4.4"
                        />
                      </g>
                    </svg>
                  </li>
                  <li>
                    <svg viewBox="0 0 90.7 90.7" width="34" height="34">
                      <g>
                        <path
                          fill="color ? color  '#28a745'"
                          d="M32.1,31.1l-9.8,35c-0.4,1.4-1.9,2.3-3.4,1.9l0,0c-1.4-0.4-2.3-1.9-1.9-3.4l9.8-35L32.1,31.1z"
                        />
                        <rect
                          fill="color ? color  '#28a745'"
                          x="22.7"
                          y="8"
                          transform="matrix(0.2686 -0.9633 0.9633 0.2686 2.5547 46.5017)"
                          width="18.3"
                          height="27.1"
                        />
                        <rect
                          fill="color ? color  '#28a745'"
                          x="35.8"
                          y="24.3"
                          transform="matrix(0.2686 -0.9633 0.9633 0.2686 9.1593 63.1573)"
                          width="20.7"
                          height="2.6"
                        />
                        <rect
                          fill="color ? color  '#28a745'"
                          x="7.3"
                          y="16.3"
                          transform="matrix(0.2686 -0.9633 0.9633 0.2686 -4.0498 29.846)"
                          width="20.7"
                          height="2.6"
                        />
                      </g>
                      <g>
                        <rect
                          fill="color ? color  '#28a745'"
                          x="48.8"
                          y="60.6"
                          width="26.6"
                          height="3.1"
                        />
                        <rect
                          fill="color ? color  '#28a745'"
                          x="46.1"
                          y="63.7"
                          width="32"
                          height="4.4"
                        />
                      </g>
                    </svg>
                  </li>
                  <li>
                    <svg viewBox="0 0 90.7 90.7" width="34" height="34">
                      <g>
                        <path
                          fill="color ? color  '#28a745'"
                          d="M32.1,31.1l-9.8,35c-0.4,1.4-1.9,2.3-3.4,1.9l0,0c-1.4-0.4-2.3-1.9-1.9-3.4l9.8-35L32.1,31.1z"
                        />
                        <rect
                          fill="color ? color  '#28a745'"
                          x="22.7"
                          y="8"
                          transform="matrix(0.2686 -0.9633 0.9633 0.2686 2.5547 46.5017)"
                          width="18.3"
                          height="27.1"
                        />
                        <rect
                          fill="color ? color  '#28a745'"
                          x="35.8"
                          y="24.3"
                          transform="matrix(0.2686 -0.9633 0.9633 0.2686 9.1593 63.1573)"
                          width="20.7"
                          height="2.6"
                        />
                        <rect
                          fill="color ? color  '#28a745'"
                          x="7.3"
                          y="16.3"
                          transform="matrix(0.2686 -0.9633 0.9633 0.2686 -4.0498 29.846)"
                          width="20.7"
                          height="2.6"
                        />
                      </g>
                      <g>
                        <rect
                          fill="color ? color  '#28a745'"
                          x="48.8"
                          y="60.6"
                          width="26.6"
                          height="3.1"
                        />
                        <rect
                          fill="color ? color  '#28a745'"
                          x="46.1"
                          y="63.7"
                          width="32"
                          height="4.4"
                        />
                      </g>
                    </svg>
                  </li>

                  <li>
                    <svg viewBox="0 0 90.7 90.7" width="34" height="34">
                      <g>
                        <path
                          fill="color ? color  '#28a745'"
                          d="M32.1,31.1l-9.8,35c-0.4,1.4-1.9,2.3-3.4,1.9l0,0c-1.4-0.4-2.3-1.9-1.9-3.4l9.8-35L32.1,31.1z"
                        />
                        <rect
                          fill="color ? color  '#28a745'"
                          x="22.7"
                          y="8"
                          transform="matrix(0.2686 -0.9633 0.9633 0.2686 2.5547 46.5017)"
                          width="18.3"
                          height="27.1"
                        />
                        <rect
                          fill="color ? color  '#28a745'"
                          x="35.8"
                          y="24.3"
                          transform="matrix(0.2686 -0.9633 0.9633 0.2686 9.1593 63.1573)"
                          width="20.7"
                          height="2.6"
                        />
                        <rect
                          fill="color ? color  '#28a745'"
                          x="7.3"
                          y="16.3"
                          transform="matrix(0.2686 -0.9633 0.9633 0.2686 -4.0498 29.846)"
                          width="20.7"
                          height="2.6"
                        />
                      </g>
                      <g>
                        <rect
                          fill="color ? color  '#28a745'"
                          x="48.8"
                          y="60.6"
                          width="26.6"
                          height="3.1"
                        />
                        <rect
                          fill="color ? color  '#28a745'"
                          x="46.1"
                          y="63.7"
                          width="32"
                          height="4.4"
                        />
                      </g>
                    </svg>
                  </li>
                </ul>
              </div>
              <div className="right-content">
                <ul>
                  <li>
                    <div className="d-flex align-items-center">
                      <img src={Contact} />{" "}
                      <NavDropdown
                        title="kors mentenen"
                        id="basic-nav-dropdown"
                      >
                        <NavDropdown.Item href="#action/3.1">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  </li>
                  <li>
                    <div className="ml-lg-2  btnModalAds d-flex align-items-center">
                      <span className="imge">
                        <img src={Add} className="img-fluid" />
                      </span>
                      <span class="txt-btn">Add an add </span>
                    </div>
                  </li>
                </ul>
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    </>
  );
}

export default TopNav;
