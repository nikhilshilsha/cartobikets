import React from 'react';
import {
  Button,
  Container,
  Form,
  Breadcrumb,
  Nav,
  Table,
} from 'react-bootstrap';

import Sidebar from './common/global/CommonComponents/Sidebar';

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
                  breadcrumb.invoice-received-page
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              {' '}
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
            </div>{' '}
          </div>
          <div className="card_invoice">
            <div className="table-wrapper table-responsive  mb-3">
              <Table hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>Description</th>
                    <th>reference</th>
                    <th>chassis number</th>
                    <th>finance.page.sellerName</th>
                    <th>creates the</th>
                    <th>deadline</th>
                    <th>status</th>
                    <th>linked to</th>
                    <th>Document</th>
                    <th>amount exclusive of tax</th>
                    <th>TVA</th>
                    <th>Total (TTC)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <i className="fas fa-eye"></i>
                    </td>

                    <td>
                      <div className="product-card">
                        <div className="product-details">
                          <a
                            href="/"
                            target="_blank"
                            className="product-name w-s-nowrap"
                          >
                            BMW, i3
                          </a>
                          <span className="product-txt w-s-nowrap">
                            Diesel, 2015
                          </span>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td>client SARL</td>
                    <td>@15/01/2021</td>
                    <td>
                      <span className="w-s-nowrap">
                        <span className="badge badge-primary badge-dot"></span>{' '}
                        <span className="font-bold font-primary">
                          In progress
                        </span>
                      </span>
                    </td>
                    <td> Marge </td>
                    <td>Not billed</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>9000 ???</td>
                    <td>20%</td>
                    <td>90180 ???</td>
                    <td>See</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fas fa-eye"></i>
                    </td>

                    <td>
                      <div className="product-card">
                        <div className="product-details">
                          <a
                            href="/"
                            target="_blank"
                            className="product-name w-s-nowrap"
                          >
                            BMW, i3
                          </a>
                          <span className="product-txt w-s-nowrap">
                            Diesel, 2015
                          </span>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td>client SARL</td>
                    <td>@15/01/2021</td>
                    <td>
                      <span className="w-s-nowrap">
                        <span className="badge badge-primary badge-dot"></span>{' '}
                        <span className="font-bold font-primary">
                          In progress
                        </span>
                      </span>
                    </td>
                    <td> Marge </td>
                    <td>Not billed</td>
                    <td></td>
                    <td></td>

                    <td>15/01/2021</td>
                    <td>9000 ???</td>
                    <td>20%</td>
                    <td>90180 ???</td>
                    <td>See</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fas fa-eye"></i>
                    </td>

                    <td>
                      <div className="product-card">
                        <div className="product-details">
                          <a
                            href="/"
                            target="_blank"
                            className="product-name w-s-nowrap"
                          >
                            BMW, i3
                          </a>
                          <span className="product-txt w-s-nowrap">
                            Diesel, 2015
                          </span>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td>client SARL</td>
                    <td>@15/01/2021</td>
                    <td>
                      <span className="w-s-nowrap">
                        <span className="badge badge-primary badge-dot"></span>{' '}
                        <span className="font-bold font-primary">
                          In progress
                        </span>
                      </span>
                    </td>
                    <td> Marge </td>
                    <td>Not billed</td>
                    <td></td>
                    <td></td>

                    <td>15/01/2021</td>
                    <td>9000 ???</td>
                    <td>20%</td>
                    <td>90180 ???</td>
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
