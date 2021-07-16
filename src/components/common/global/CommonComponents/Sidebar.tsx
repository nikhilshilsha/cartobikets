import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import * as Assets from '../../assets';

import FavouriteFilter from '../../filters/favouriteFilter';
import ListAuctionFilter from '../../filters/listauctionFilter';
import ListAnnounceFilter from '../../filters/listannounceFilter';
import ActivityFilter from '../../filters/activityFilter';
import CleintOrderFilter from '../../filters/cleintorderFilter';
import ReservationFilter from '../../filters/reservationFilter';
import InvoiceReceiveFilter from '../../filters/invoicereceiveFilter';
import InvoiceSentFilter from '../../filters/invoicesentFilter';
import CreditReceiveFilter from '../../filters/creditreceiveFilter';
import CreditSendFilter from '../../filters/creditsendFilter';
import CustomerFilter from '../../filters/customerFilter';
import ProviderFilter from '../../filters/providerFilter';
import { Row, Col } from '../elements';

import { useHistory, Link } from 'react-router-dom';

function Sidebar({ children }) {
  const [openSide, setOpenSide] = useState(false);
  const history = useHistory();
  console.log(history, 'historuryry');
  return (
    <>
      <div className="sidebar">
        <Row>
          <Col lg={1} className="ico-sidebar">
            <div className="leftbar">
              <Link to="/">
                <img src={Assets.LogoImg} />
              </Link>
              <ul>
                <li>
                  <i className="fas fa-chart-bar"></i>
                </li>
                <li>
                  <i className="fas fa-search"></i>
                </li>
                <li>
                  <i className="fas fa-plus"></i>
                </li>
                <li>
                  <i className="fas fa-bullhorn"></i>
                </li>
                <li>
                  <svg viewBox="0 0 90.7 90.7" width="22" height="22">
                    <g>
                      <path
                        fill="#fff"
                        d="M32.1,31.1l-9.8,35c-0.4,1.4-1.9,2.3-3.4,1.9l0,0c-1.4-0.4-2.3-1.9-1.9-3.4l9.8-35L32.1,31.1z"
                      ></path>
                      <rect
                        fill="#fff"
                        x="22.7"
                        y="8"
                        transform="matrix(0.2686 -0.9633 0.9633 0.2686 2.5547 46.5017)"
                        width="18.3"
                        height="27.1"
                      ></rect>
                      <rect
                        fill="#fff"
                        x="35.8"
                        y="24.3"
                        transform="matrix(0.2686 -0.9633 0.9633 0.2686 9.1593 63.1573)"
                        width="20.7"
                        height="2.6"
                      ></rect>
                      <rect
                        fill="#fff"
                        x="7.3"
                        y="16.3"
                        transform="matrix(0.2686 -0.9633 0.9633 0.2686 -4.0498 29.846)"
                        width="20.7"
                        height="2.6"
                      ></rect>
                    </g>
                    <g>
                      <rect
                        fill="#fff"
                        x="48.8"
                        y="60.6"
                        width="26.6"
                        height="3.1"
                      ></rect>
                      <rect
                        fill="#fff"
                        x="46.1"
                        y="63.7"
                        width="32"
                        height="4.4"
                      ></rect>
                    </g>
                  </svg>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-coins"></i>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                </li>
                <li>
                  <i className="fas fa-luggage-cart"></i>
                </li>
                <li>
                  <i className="fas fa-exchange-alt"></i>
                </li>
                <li>
                  <i className="far fa-calendar-alt"></i>
                </li>
                <li>
                  <i className="fas fa-bell"></i>
                </li>
              </ul>
            </div>
            <div className="ico-filter" onClick={() => setOpenSide(!openSide)}>
              <div
                className="round-circle"
                onClick={() => setOpenSide(!openSide)}
              >
                <i className="fas fa-filter"></i>
              </div>
            </div>
          </Col>
          {openSide &&
            (history.location.pathname == '/list-auction' ? (
              <ListAuctionFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : history.location.pathname == '/list-announce' ? (
              <ListAnnounceFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : history.location.pathname == '/favorite' ? (
              <FavouriteFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : history.location.pathname == '/activity' ? (
              <ActivityFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : history.location.pathname == '/order' ? (
              <CleintOrderFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : history.location.pathname == '/reservation' ? (
              <ReservationFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : history.location.pathname == '/invoicereceive' ? (
              <InvoiceReceiveFilter
                setOpenSide={() => setOpenSide(!openSide)}
              />
            ) : history.location.pathname == '/invoicesend' ? (
              <InvoiceSentFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : history.location.pathname == '/creditreceive' ? (
              <CreditReceiveFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : history.location.pathname == '/creditsent' ? (
              <CreditSendFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : history.location.pathname == '/customer' ? (
              <CustomerFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : history.location.pathname == '/provider' ? (
              <ProviderFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : history.location.pathname == '/message' ? (
              <ProviderFilter setOpenSide={() => setOpenSide(!openSide)} />
            ) : (
              ''
            ))}
          <Col lg={11}>{children}</Col>
          {history.location.pathname == '/message' ? (
            ''
          ) : (
            <div className="task-div">
              <div className="task-board">
                <div className="h-list-header">
                  <div className="d-flex h-list">
                    <h4> messaging.page.messaging.messaging </h4>
                    <div>
                      {' '}
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
                        <img src={Assets.Boutiqu} />
                      </div>

                      <img src={Assets.Boutiqu2} />
                    </div>
                  </div>
                  <div className="media-user-list">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="d-flex align-items-center">
                          {' '}
                          <img src={Assets.Boutiqu2} />
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
                      <i className="fas fa-comment"></i>
                      <span className="">Messageing Page</span>
                    </div>
                    <div>
                      <i className="fas fa-comment"></i>
                      <span className="">Messageing Page</span>
                    </div>
                    <div>
                      <i className="fas fa-comment"></i>
                      <span className="">Messageing Page</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Row>
      </div>
    </>
  );
}

export default Sidebar;
