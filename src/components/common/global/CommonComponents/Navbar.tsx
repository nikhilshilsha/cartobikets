import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Container,
} from 'react-bootstrap';
import * as Assets from '../../assets';

import OutsideAlerter from '../Hooks/outsideClick';
function TopNav(props) {
  const [openDrop, setOpenDrop] = useState(false);
  const [openDrop1, setOpenDrop1] = useState(false);
  const [openDrop2, setOpenDrop2] = useState(false);

  const [openSub, setOpenSub] = useState(false);
  const [openSub1, setOpenSub1] = useState(false);
  const [openSub2, setOpenSub2] = useState(false);
  const [purchase, setPurchase] = useState(false);
  const [invoice, setinvoice] = useState(false);
  const [credit, setcredit] = useState(false);
  const [openSidebar, setopenSidebar] = useState(false);

  return (
    <OutsideAlerter
      drop={openDrop}
      setDrop={setOpenDrop}
      drop1={openDrop1}
      setDrop1={setOpenDrop1}
    >
      <header className={`header ${props.className}`}>
        <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
          <Navbar.Brand href="/">
            <img src={Assets.Logo} className="screen-img" />
            <img src={Assets.SmallLogo} className="phone-img" />
          </Navbar.Brand>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between">
              <ul>
                <li>
                  <a href="/list-auction">
                    <img src={Assets.Order} />
                  </a>
                </li>
                <li>
                  <i
                    className="fas fa-th"
                    onClick={() => setOpenDrop(!openDrop)}
                  ></i>
                  {openDrop && (
                    <ul className="sub-menu">
                      {openSub ? (
                        <>
                          <li>
                            <a href=""> Finance</a>
                          </li>
                          <li onClick={() => setPurchase(!purchase)}>
                            {/* <a href=""> */}
                            <svg
                              className="svg-inline--fa fa-receipt fa-w-12 icon"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="receipt"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                              data-fa-i2svg=""
                            >
                              <path
                                fill="#f0c53d"
                                d="M358.4 3.2L320 48 265.6 3.2a15.9 15.9 0 0 0-19.2 0L192 48 137.6 3.2a15.9 15.9 0 0 0-19.2 0L64 48 25.6 3.2C15-4.7 0 2.8 0 16v480c0 13.2 15 20.7 25.6 12.8L64 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L192 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L320 464l38.4 44.8c10.5 7.9 25.6.4 25.6-12.8V16c0-13.2-15-20.7-25.6-12.8zM320 360c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16z"
                              ></path>
                            </svg>
                            purchase order
                            {/* </a> */}
                            {purchase && (
                              <ul className="pl-0">
                                <li>
                                  <a href="/order">
                                    <svg
                                      className="svg-inline--fa fa-file-import fa-w-16 icon"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="file-import"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      data-fa-i2svg=""
                                    >
                                      <path
                                        fill="#f0c53d"
                                        d="M16 288c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h112v-64zm489-183L407.1 7c-4.5-4.5-10.6-7-17-7H384v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H152c-13.3 0-24 10.7-24 24v264h128v-65.2c0-14.3 17.3-21.4 27.4-11.3L379 308c6.6 6.7 6.6 17.4 0 24l-95.7 96.4c-10.1 10.1-27.4 3-27.4-11.3V352H128v136c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H376c-13.2 0-24-10.8-24-24z"
                                      ></path>
                                    </svg>
                                    link.customer_order
                                  </a>
                                </li>
                                <li>
                                  <a href="/reservation">
                                    {' '}
                                    <svg
                                      className="svg-inline--fa fa-file-import fa-w-16 icon"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="file-import"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      data-fa-i2svg=""
                                    >
                                      <path
                                        fill="#f0c53d"
                                        d="M16 288c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h112v-64zm489-183L407.1 7c-4.5-4.5-10.6-7-17-7H384v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H152c-13.3 0-24 10.7-24 24v264h128v-65.2c0-14.3 17.3-21.4 27.4-11.3L379 308c6.6 6.7 6.6 17.4 0 24l-95.7 96.4c-10.1 10.1-27.4 3-27.4-11.3V352H128v136c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H376c-13.2 0-24-10.8-24-24z"
                                      ></path>
                                    </svg>
                                    link.my_reservations
                                  </a>
                                </li>
                              </ul>
                            )}
                          </li>
                          <li onClick={() => setinvoice(!invoice)}>
                            <svg
                              className="svg-inline--fa fa-file-invoice fa-w-12 icon"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="file-invoice"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                              data-fa-i2svg=""
                            >
                              <path
                                fill="#f0c53d"
                                d="M288 256H96v64h192v-64zm89-151L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm256 304c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-200v96c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16z"
                              ></path>
                            </svg>{' '}
                            invoice
                            {invoice && (
                              <ul className="pl-0">
                                <li>
                                  <a href="/invoicereceive">
                                    <svg
                                      className="svg-inline--fa fa-file-import fa-w-16 icon"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="file-import"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      data-fa-i2svg=""
                                    >
                                      <path
                                        fill="#f0c53d"
                                        d="M16 288c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h112v-64zm489-183L407.1 7c-4.5-4.5-10.6-7-17-7H384v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H152c-13.3 0-24 10.7-24 24v264h128v-65.2c0-14.3 17.3-21.4 27.4-11.3L379 308c6.6 6.7 6.6 17.4 0 24l-95.7 96.4c-10.1 10.1-27.4 3-27.4-11.3V352H128v136c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H376c-13.2 0-24-10.8-24-24z"
                                      ></path>
                                    </svg>
                                    link.invoice
                                  </a>
                                </li>
                                <li>
                                  <a href="/invoicesend">
                                    <svg
                                      className="svg-inline--fa fa-file-import fa-w-16 icon"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="file-import"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      data-fa-i2svg=""
                                    >
                                      <path
                                        fill="#f0c53d"
                                        d="M16 288c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h112v-64zm489-183L407.1 7c-4.5-4.5-10.6-7-17-7H384v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H152c-13.3 0-24 10.7-24 24v264h128v-65.2c0-14.3 17.3-21.4 27.4-11.3L379 308c6.6 6.7 6.6 17.4 0 24l-95.7 96.4c-10.1 10.1-27.4 3-27.4-11.3V352H128v136c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H376c-13.2 0-24-10.8-24-24z"
                                      ></path>
                                    </svg>
                                    link.sales_receipt
                                  </a>
                                </li>
                              </ul>
                            )}
                          </li>
                          <li onClick={() => setcredit(!credit)}>
                            <svg
                              className="svg-inline--fa fa-file-invoice-dollar fa-w-12 icon"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="file-invoice-dollar"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                              data-fa-i2svg=""
                            >
                              <path
                                fill="#f0c53d"
                                d="M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 80v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8zm144 263.88V440c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-24.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V232c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v24.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07z"
                              ></path>
                            </svg>{' '}
                            credit note
                            {credit && (
                              <ul className="pl-0">
                                <li>
                                  <a href="/creditreceive">
                                    <svg
                                      className="svg-inline--fa fa-file-import fa-w-16 icon"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="file-import"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      data-fa-i2svg=""
                                    >
                                      <path
                                        fill="#f0c53d"
                                        d="M16 288c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h112v-64zm489-183L407.1 7c-4.5-4.5-10.6-7-17-7H384v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H152c-13.3 0-24 10.7-24 24v264h128v-65.2c0-14.3 17.3-21.4 27.4-11.3L379 308c6.6 6.7 6.6 17.4 0 24l-95.7 96.4c-10.1 10.1-27.4 3-27.4-11.3V352H128v136c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H376c-13.2 0-24-10.8-24-24z"
                                      ></path>
                                    </svg>
                                    link.invoice
                                  </a>
                                </li>
                                <li>
                                  <a href="/creditsent">
                                    <svg
                                      className="svg-inline--fa fa-file-import fa-w-16 icon"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="file-import"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      data-fa-i2svg=""
                                    >
                                      <path
                                        fill="#f0c53d"
                                        d="M16 288c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h112v-64zm489-183L407.1 7c-4.5-4.5-10.6-7-17-7H384v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H152c-13.3 0-24 10.7-24 24v264h128v-65.2c0-14.3 17.3-21.4 27.4-11.3L379 308c6.6 6.7 6.6 17.4 0 24l-95.7 96.4c-10.1 10.1-27.4 3-27.4-11.3V352H128v136c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H376c-13.2 0-24-10.8-24-24z"
                                      ></path>
                                    </svg>
                                    link.sales_receipt
                                  </a>
                                </li>
                              </ul>
                            )}
                          </li>
                          <NavDropdown.Divider />
                          <li>
                            <a href="/customer">
                              <svg
                                className="svg-inline--fa fa-user-tie fa-w-14 icon"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="user-tie"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="#f0c53d"
                                  d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"
                                ></path>
                              </svg>{' '}
                              finance.page.my_customers
                            </a>
                          </li>
                          <li>
                            <a href="/provider">
                              {' '}
                              <svg
                                className="svg-inline--fa fa-user-tie fa-w-14 icon"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="user-tie"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="#f0c53d"
                                  d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"
                                ></path>
                              </svg>{' '}
                              finance.page.provider
                            </a>
                          </li>
                          <NavDropdown.Divider />

                          <li>
                            <a href="">
                              <svg
                                className="svg-inline--fa fa-file-upload fa-w-12 icon"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="file-upload"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="#f0c53d"
                                  d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"
                                ></path>
                              </svg>{' '}
                              link.documents_received
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <svg
                                className="svg-inline--fa fa-cog fa-w-16 icon"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="cog"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="#f0c53d "
                                  d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                                ></path>
                              </svg>
                              Settings
                            </a>
                          </li>
                        </>
                      ) : (
                        <>
                          <li onClick={() => setOpenSub(!openSub)}>
                            <svg
                              className="svg-inline--fa fa-receipt fa-w-12 icon"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="receipt"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                              data-fa-i2svg=""
                            >
                              <path
                                fill="#f0c53d"
                                d="M358.4 3.2L320 48 265.6 3.2a15.9 15.9 0 0 0-19.2 0L192 48 137.6 3.2a15.9 15.9 0 0 0-19.2 0L64 48 25.6 3.2C15-4.7 0 2.8 0 16v480c0 13.2 15 20.7 25.6 12.8L64 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L192 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L320 464l38.4 44.8c10.5 7.9 25.6.4 25.6-12.8V16c0-13.2-15-20.7-25.6-12.8zM320 360c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16z"
                              ></path>
                            </svg>{' '}
                            Finance
                          </li>
                          <li>
                            <a href="/list-announce">
                              <svg
                                className="svg-inline--fa fa-copy fa-w-14"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="copy"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="#f0c53d"
                                  d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"
                                ></path>
                              </svg>
                              My ads
                            </a>
                          </li>
                          <li>
                            <a href="/favorite">
                              {' '}
                              <svg
                                className="svg-inline--fa fa-star fa-w-18"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="#f0c53d"
                                  d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                                ></path>
                              </svg>
                              My favorites
                            </a>
                          </li>
                          <li>
                            <a href="/dashboard">
                              {' '}
                              <svg
                                className="svg-inline--fa fa-chart-bar fa-w-16"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fa"
                                data-icon="chart-bar"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="#f0c53d"
                                  d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
                                ></path>
                              </svg>
                              Dashboard
                            </a>
                          </li>
                          <li>
                            <a href="/activity">
                              {' '}
                              <svg
                                className="svg-inline--fa fa-dolly fa-w-18"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="dolly"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="#f0c53d"
                                  d="M294.2 277.7c18 5 34.7 13.4 49.5 24.7l161.5-53.8c8.4-2.8 12.9-11.9 10.1-20.2L454.9 47.2c-2.8-8.4-11.9-12.9-20.2-10.1l-61.1 20.4 33.1 99.4L346 177l-33.1-99.4-61.6 20.5c-8.4 2.8-12.9 11.9-10.1 20.2l53 159.4zm281 48.7L565 296c-2.8-8.4-11.9-12.9-20.2-10.1l-213.5 71.2c-17.2-22-43.6-36.4-73.5-37L158.4 21.9C154 8.8 141.8 0 128 0H16C7.2 0 0 7.2 0 16v32c0 8.8 7.2 16 16 16h88.9l92.2 276.7c-26.1 20.4-41.7 53.6-36 90.5 6.1 39.4 37.9 72.3 77.3 79.2 60.2 10.7 112.3-34.8 113.4-92.6l213.3-71.2c8.3-2.8 12.9-11.8 10.1-20.2zM256 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
                                ></path>
                              </svg>
                              My stock
                            </a>
                          </li>
                          <li>
                            <a href="/trade">
                              {' '}
                              <svg
                                className="svg-inline--fa fa-exchange-alt fa-w-16"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="exchange-alt"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="#f0c53d"
                                  d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"
                                ></path>
                              </svg>
                              Resumption
                            </a>
                          </li>
                          <li>
                            <a href="/calender">
                              <svg
                                className="svg-inline--fa fa-exchange-alt fa-w-16"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="exchange-alt"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="#f0c53d"
                                  d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"
                                ></path>
                              </svg>{' '}
                              link.appointments
                            </a>
                          </li>
                        </>
                      )}
                    </ul>
                  )}{' '}
                </li>
                <li>
                  <a href="/message">
                    <img src={Assets.Message} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={Assets.Notify} />
                  </a>
                </li>
                <li className="mr-4">
                  <img
                    src={Assets.Flag}
                    className="flag-img"
                    onClick={() => setOpenDrop1(!openDrop1)}
                  />
                  {openDrop1 && (
                    <ul className="sub-menu sub-menu1 ">
                      <>
                        <li>
                          <img src={Assets.Eng} />
                          English
                        </li>
                        <li>
                          <img src={Assets.French} />
                          French
                        </li>
                        <li>
                          {' '}
                          <img src={Assets.Dutch} />
                          Dutch
                        </li>
                      </>
                    </ul>
                  )}
                </li>
                {/* <li>
                  <MobileSidebar
                    setopenSidebar={() => setopenSidebar(!openSidebar)}
                    sidebar={openSidebar}
                  />
                </li> */}
              </ul>
            </div>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
            <Navbar.Collapse id="responsive-navbar-nav">
              <div className="right-content">
                <ul>
                  <li>
                    <div
                      className="text-inf"
                      onClick={() => setOpenDrop2(!openDrop2)}
                    >
                      <img src={Assets.Contact} />
                      kors mentenen
                    </div>
                    {openDrop2 && (
                      <ul className="sub-menu sub-menu2 w200">
                        <>
                          <li>
                            <div className="text-inf">
                              <img src={Assets.Contact} />
                              kors mentenen
                            </div>
                          </li>
                          <li>
                            <i className="fas fa-landmark mr-2"></i>
                            Automoto
                            <div className="seting">
                              {' '}
                              <i className="fas fa-cogs"></i>
                            </div>
                          </li>
                          <NavDropdown.Divider />
                          <li>
                            <a href="/setting">
                              <svg
                                className="svg-inline--fa fa-cog fa-w-16 icon"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="cog"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="#f0c53d "
                                  d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                                ></path>
                              </svg>
                              Settings
                            </a>
                          </li>
                          <li>
                            <i className="fas fa-power-off text-danger"></i>
                            logout
                          </li>
                        </>
                      </ul>
                    )}
                  </li>
                  <li>
                    <div className="ml-lg-2  btnModalAds d-flex align-items-center">
                      <span className="imge">
                        <img src={Assets.Add} className="img-fluid" />
                      </span>
                      <span className="txt-btn">Add an add </span>
                    </div>
                  </li>
                </ul>
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    </OutsideAlerter>
  );
}

export default TopNav;
