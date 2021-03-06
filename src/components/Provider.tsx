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
                  breadcrumb.provider-list-page
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              {' '}
              <Button variant="warning">Ad an Add</Button>
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-center mb-4 ">
            <div>
              <Button variant="primary" className="btn-invoice">
                + finance.page.providers.new_provider
              </Button>
            </div>
          </div>
          <div className=" table-customer">
            <div className="table-wrapper table-responsive  mb-3">
              <Table hover>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>first and last name</th>
                    <th>locality</th>
                    <th>country</th>
                    <th>email address</th>
                    <th>Telephone number</th>
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
