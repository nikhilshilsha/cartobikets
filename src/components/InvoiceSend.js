import React from "react";
import {
  Row,
  Col,
  Button,
  Container,
  Form,
  Breadcrumb,
  Nav,
  Table,
} from "react-bootstrap";

import Sidebar from "./common/Sidebar";
import Boutiqu from "../images/default-vehicle.png";
import Boutiqu2 from "../images/default-slider.png";
import Message from "../images/illu-9.png";

function Order() {
  return (
    <>
      <Sidebar>
        <div className="auction-list p-2">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Breadcrumb>
                <Breadcrumb.Item active>Home</Breadcrumb.Item>

                <Breadcrumb.Item href="#">
                  breadcrumb.invoice-sent-page
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              {" "}
              <Button variant="warning">Ad an Add</Button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link href="/home"> all (10)</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1"> paid (4)</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2"> not paid (6)</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2"> late (6)</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2"> archived (6)</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>{" "}
            <div>
              <Button variant="primary" className="btn-invoice">+new Invoice</Button>
            </div>
          </div>
          <div className="card_invoice">
            <div className="table-wrapper table-responsive  mb-3">
              <Table hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>invoice date</th>
                    <th>name of the buyer</th>
                    <th>invoice number</th>
                    <th>model</th>
                    <th>chassis number</th>
                    <th>VAT regime</th>
                    <th>Basic price excluding VAT</th>
                    <th>TVA</th>
                    <th>Price incl.VAT</th>
                    <th>deadline</th>
                    <th>Payment Status</th>
                    <th>balance due</th>
                    <th>Document</th>
                    <th>VAT Bond</th>
                    <th>state</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <i class="fas fa-eye"></i>
                    </td>

                    <td>
                      <div class="product-card">
                        <div class="product-details">
                          <a
                            href="/"
                            target="_blank"
                            class="product-name w-s-nowrap"
                          >
                            BMW, i3
                          </a>
                          <span class="product-txt w-s-nowrap">
                            Diesel, 2015
                          </span>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td>client SARL</td>
                    <td>@15/01/2021</td>
                    <td>
                      <span class="w-s-nowrap">
                        <span class="badge badge-primary badge-dot"></span>{" "}
                        <span class="font-bold font-primary">In progress</span>
                      </span>
                    </td>
                    <td> Marge </td>
                    <td>Not billed</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>9000 €</td>
                    <td>20%</td>
                    <td>90180 €</td>
                    <td>See</td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fas fa-eye"></i>
                    </td>

                    <td>
                      <div class="product-card">
                        <div class="product-details">
                          <a
                            href="/"
                            target="_blank"
                            class="product-name w-s-nowrap"
                          >
                            BMW, i3
                          </a>
                          <span class="product-txt w-s-nowrap">
                            Diesel, 2015
                          </span>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td>client SARL</td>
                    <td>@15/01/2021</td>
                    <td>
                      <span class="w-s-nowrap">
                        <span class="badge badge-primary badge-dot"></span>{" "}
                        <span class="font-bold font-primary">In progress</span>
                      </span>
                    </td>
                    <td> Marge </td>
                    <td>Not billed</td>
                    <td></td>
                    <td></td>

                    <td>15/01/2021</td>
                    <td>9000 €</td>
                    <td>20%</td>
                    <td>90180 €</td>
                    <td>See</td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fas fa-eye"></i>
                    </td>

                    <td>
                      <div class="product-card">
                        <div class="product-details">
                          <a
                            href="/"
                            target="_blank"
                            class="product-name w-s-nowrap"
                          >
                            BMW, i3
                          </a>
                          <span class="product-txt w-s-nowrap">
                            Diesel, 2015
                          </span>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td>client SARL</td>
                    <td>@15/01/2021</td>
                    <td>
                      <span class="w-s-nowrap">
                        <span class="badge badge-primary badge-dot"></span>{" "}
                        <span class="font-bold font-primary">In progress</span>
                      </span>
                    </td>
                    <td> Marge </td>
                    <td>Not billed</td>
                    <td></td>
                    <td></td>

                    <td>15/01/2021</td>
                    <td>9000 €</td>
                    <td>20%</td>
                    <td>90180 €</td>
                    <td>See</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}

export default Order;
