import React, { useState } from "react";
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
import LogoImg from "../../images/logo_w.png";
import Boutiqu from "../../images/default-vehicle.png";
import Boutiqu2 from "../../images/default-slider.png";
import FavouriteFilter from "./favouriteFilter";
import ListAuctionFilter from "./listauctionFilter";
import ListAnnounceFilter from "./listannounceFilter";
import ActivityFilter from "./activityFilter";
import CleintOrderFilter from "./cleintorderFilter";
import ReservationFilter from "./reservationFilter";
import InvoiceReceiveFilter from "./invoicereceiveFilter";
import InvoiceSentFilter from "./invoicesentFilter";
import CreditReceiveFilter from "./creditreceiveFilter";
import CreditSendFilter from "./creditsendFilter";
import CustomerFilter from "./customerFilter";
import ProviderFilter from "./providerFilter";

import { useHistory } from "react-router-dom";

function Sidebar({ children }) {
  const [openSide, setOpenSide] = useState(false);
  const history = useHistory();
  console.log(history, "historuryry");
  return (
    <>
      <div className="sidebar">
        <Row>
          <Col lg={1} className="ico-sidebar">
            <div className="leftbar">
              <img src={LogoImg} />
              <ul>
                <li>
                  <i class="fas fa-chart-bar"></i>
                </li>
                <li>
                  <i class="fas fa-search"></i>
                </li>
                <li>
                  <i class="fas fa-plus"></i>
                </li>
                <li>
                  <i class="fas fa-bullhorn"></i>
                </li>
                <li>
                  <svg viewBox="0 0 90.7 90.7" width="34" height="34">
                    <g>
                      <path
                        fill="#28a745"
                        d="M32.1,31.1l-9.8,35c-0.4,1.4-1.9,2.3-3.4,1.9l0,0c-1.4-0.4-2.3-1.9-1.9-3.4l9.8-35L32.1,31.1z"
                      ></path>
                      <rect
                        fill="#28a745"
                        x="22.7"
                        y="8"
                        transform="matrix(0.2686 -0.9633 0.9633 0.2686 2.5547 46.5017)"
                        width="18.3"
                        height="27.1"
                      ></rect>
                      <rect
                        fill="#28a745"
                        x="35.8"
                        y="24.3"
                        transform="matrix(0.2686 -0.9633 0.9633 0.2686 9.1593 63.1573)"
                        width="20.7"
                        height="2.6"
                      ></rect>
                      <rect
                        fill="#28a745"
                        x="7.3"
                        y="16.3"
                        transform="matrix(0.2686 -0.9633 0.9633 0.2686 -4.0498 29.846)"
                        width="20.7"
                        height="2.6"
                      ></rect>
                    </g>
                    <g>
                      <rect
                        fill="#28a745"
                        x="48.8"
                        y="60.6"
                        width="26.6"
                        height="3.1"
                      ></rect>
                      <rect
                        fill="#28a745"
                        x="46.1"
                        y="63.7"
                        width="32"
                        height="4.4"
                      ></rect>
                    </g>
                  </svg>
                </li>
                <li>
                  <i class="fas fa-star"></i>
                </li>
                <li>
                  <i class="fas fa-coins"></i>
                </li>
                <li>
                  <i class="fas fa-envelope"></i>
                </li>
                <li>
                  <i class="fas fa-luggage-cart"></i>
                </li>
                <li>
                  <i class="fas fa-exchange-alt"></i>
                </li>
                <li>
                  <i class="far fa-calendar-alt"></i>
                </li>
                <li>
                  <i class="fas fa-bell"></i>
                </li>
              </ul>
            </div>
            <div className="ico-filter" onClick={() => setOpenSide(!openSide)}>
              <div
                className="round-circle"
                onClick={() => setOpenSide(!openSide)}
              >
                <i class="fas fa-filter"></i>
              </div>
            </div>
          </Col>
          {openSide &&
            (history.location.pathname == "/list-auction" ? (
              <ListAuctionFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : history.location.pathname == "/list-announce" ? (
              <ListAnnounceFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : history.location.pathname == "/favorite" ? (
              <FavouriteFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : history.location.pathname == "/activity" ? (
              <ActivityFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : history.location.pathname == "/order" ? (
              <CleintOrderFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : history.location.pathname == "/reservation" ? (
              <ReservationFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : history.location.pathname == "/invoicereceive" ? (
              <InvoiceReceiveFilter
                setOpenSide={() => setOpenSide(!openSide)}
              />
            ) : history.location.pathname == "/invoicesend" ? (
              <InvoiceSentFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : history.location.pathname == "/creditreceive" ? (
              <CreditReceiveFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : history.location.pathname == "/creditsent" ? (
              <CreditSendFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : history.location.pathname == "/customer" ? (
              <CustomerFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : history.location.pathname == "/provider" ? (
              <ProviderFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : (
              ""
            ))}
          <Col lg={11}>{children}</Col>
          <div className="task-div">
            <div className="task-board">
              <div className="h-list-header">
                <div className="d-flex h-list">
                  <h4> messaging.page.messaging.messaging </h4>
                  <div>
                    {" "}
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className="search"
                    />
                  </div>
                </div>
              </div>
              <div className="h-list-body">
                <div className="border-bottom">
                  <div className="d-flex p-3">
                    <div className="mr-2">
                      <img src={Boutiqu} />
                    </div>

                    <img src={Boutiqu2} />
                  </div>
                </div>
                <div className="media-user-list">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div className="d-flex align-items-center">
                        {" "}
                        <img src={Boutiqu2} />
                        <div className="ml-2">
                          <h6> BMWI i3 | user</h6>
                          <p>il y a 6 mois</p>
                        </div>
                      </div>
                    </div>
                    <div className="live-status">1</div>
                  </div>
                </div>
              </div>
              <div className="chatactionBottom">
                <div className="d-flex justify-content-between p-2">
                  <div>
                    <i class="fas fa-comment"></i>
                    <span className="">Messageing Page</span>
                  </div>
                  <div>
                    <i class="fas fa-comment"></i>
                    <span className="">Messageing Page</span>
                  </div>
                  <div>
                    <i class="fas fa-comment"></i>
                    <span className="">Messageing Page</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
}

export default Sidebar;
