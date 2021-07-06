import React from "react";
import {
  Row,
  Col,
  Button,
  Container,
  Nav,
  Breadcrumb,
  Card,
  Form,
  Table,
} from "react-bootstrap";

import Sidebar from "./common/Sidebar";
import Chart from "react-google-charts";
// import Avtar1 from  "../images/avatars/"

function Auction() {
  return (
    <>
      <Sidebar>
        <div className="auction-list p-2">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Breadcrumb>
                <Breadcrumb.Item active>Home</Breadcrumb.Item>

                <Breadcrumb.Item href="#">
                  breadcrumb.activity-page
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              {" "}
              <Button variant="warning">Ad an Add</Button>
            </div>
          </div>
          <Row>
            <Col sm={3}>
              <div className="d-flex align-items-center activity">
                <div className="avatar-sm mr-3">
                  <span className="avatar-title bg-warning rounded-circle ">
                    <i class="fas fa-shopping-cart"></i>
                  </span>
                </div>
                <div className="">
                  <h5 class="text-muted font-weight-normal m-0 text-truncate">
                    Vente
                  </h5>
                  <h2 class=" font-weight-bolder my-1">
                    <span>250 600</span>
                  </h2>
                  <p className="mb-0 text-muted">
                    <span className="text-danger"></span>
                    <span class="text-sm text-muted font-weight-normal m-0 text-truncate text-nowrap">
                      viesse de coissance
                    </span>
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={3}>
              <div className="d-flex align-items-center activity">
                <div className="avatar-sm mr-3">
                  <span className="avatar-title bg-danger rounded-circle ">
                    <i class="fas fa-percentage"></i>
                  </span>
                </div>
                <div className="">
                  <h5 class="text-muted font-weight-normal m-0 text-truncate">
                    Achat
                  </h5>
                  <h2 class=" font-weight-bolder my-1">
                    <span>250 600</span>
                  </h2>
                  <p className="mb-0 text-muted">
                    <span className="text-danger"></span>
                    <span class="text-sm text-muted font-weight-normal m-0 text-truncate text-nowrap">
                      viesse de coissance
                    </span>
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={3}>
              <div className="d-flex align-items-center activity">
                <div className="avatar-sm mr-3">
                  <span className="avatar-title bg-success rounded-circle ">
                    <i class="fas fa-random"></i>
                  </span>
                </div>
                <div className="">
                  <h5 class="text-muted font-weight-normal m-0 text-truncate">
                    Achat
                  </h5>
                  <h2 class=" font-weight-bolder my-1">
                    <span>250 600</span>
                  </h2>
                  <p className="mb-0 text-muted">
                    <span className="text-danger"></span>
                    <span class="text-sm text-muted font-weight-normal m-0 text-truncate text-nowrap">
                      viesse de coissance
                    </span>
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={3}>
              <Chart
                width={"300px"}
                height={"150px"}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  [
                    { type: "number", label: "x" },
                    { type: "number", label: "values" },
                    { id: "i0", type: "number", role: "interval" },
                    { id: "i1", type: "number", role: "interval" },
                    { id: "i2", type: "number", role: "interval" },
                    { id: "i2", type: "number", role: "interval" },
                    { id: "i2", type: "number", role: "interval" },
                    { id: "i2", type: "number", role: "interval" },
                  ],
                  [1, 100, 90, 110, 85, 96, 104, 120],
                  [2, 120, 95, 130, 90, 113, 124, 140],
                  [3, 130, 105, 140, 100, 117, 133, 139],
                  [4, 90, 85, 95, 85, 88, 92, 95],
                  [5, 70, 74, 63, 67, 69, 70, 72],
                  [6, 30, 39, 22, 21, 28, 34, 40],
                  [7, 80, 77, 83, 70, 77, 85, 90],
                  [8, 100, 90, 110, 85, 95, 102, 110],
                ]}
                options={{
                  title: "Line intervals, default",
                  curveType: "function",
                  lineWidth: 4,
                  intervals: { style: "line" },
                  legend: "none",
                  // Difference here only with line intervals
                  interval: {
                    i0: { style: "line", color: "#D3362D", lineWidth: 0.5 },
                    i1: { style: "line", color: "#F1CA3A", lineWidth: 1 },
                    i2: { style: "line", color: "#5F9654", lineWidth: 2 },
                  },
                }}
                rootProps={{ "data-testid": "2" }}
              />
            </Col>
          </Row>
          <div className="d-flex justify-content-between align-items-center car-field">
            <div className="taf-item">Car</div>
            <div className="d-flex justify-content-between align-items-center">
              <Form.Control type="" placeholder="Search" className="search" />
              <Form.Control
                type=""
                placeholder="Date of discussion"
                className="datepick"
              />

              <Button variant="success">announces.announce.new_vehicle</Button>
            </div>
          </div>
          <div className="sort-box">
            <div className="d-flex justify-content-around ">
              <h5>announces.activity.purchase</h5>
              <h5>announces.activity.sale</h5>
            </div>
          </div>
          <Row>
            <Col sm={5} className="pr-0">
              {" "}
              <div className="table-wrapper table-responsive border-right">
                <Table hover>
                  <thead>
                    <tr>
                      <th>Stock</th>
                      <th>Date </th>
                      <th>invoice number </th>
                      <th>model</th>
                      <th>finance.page.vehicle_registration_number</th>
                      <th>chassis number</th>
                      <th>TVA</th>
                      <th>price excluding VAT</th>
                      <th>TVA(%) </th>
                      <th>finance.page.price_including_tax</th>
                      <th>deadline</th>
                      <th>Solde</th>
                      <th>attachment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="text-danger">342j</div>
                      </td>
                      <td>15/01/2021</td>
                      <td>INV-123</td>
                      <td>@BMW</td>
                      <td>1 ZAA 4321</td>
                      <td>265652...</td>
                      <td>
                        <span className="btn btn-label rounded-circle btn-label-danger has-tooltip">
                          M
                        </span>
                      </td>
                      <td>1858.33</td>
                      <td>20</td>
                      <td>2230</td>
                      <td>15/01/2021</td>
                      <td>tool</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-danger">342j</div>
                      </td>
                      <td>15/01/2021</td>
                      <td>INV-123</td>
                      <td>@BMW</td>
                      <td>1 ZAA 4321</td>
                      <td>265652...</td>
                      <td>
                        <span className="btn btn-label rounded-circle btn-label-danger has-tooltip">
                          M
                        </span>
                      </td>
                      <td>1858.33</td>
                      <td>20</td>
                      <td>2230</td>
                      <td>15/01/2021</td>
                      <td>tool</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-danger">342j</div>
                      </td>
                      <td>15/01/2021</td>
                      <td>INV-123</td>
                      <td>@BMW</td>
                      <td>1 ZAA 4321</td>
                      <td>265652...</td>
                      <td>
                        <span className="btn btn-label rounded-circle btn-label-danger has-tooltip">
                          M
                        </span>
                      </td>
                      <td>1858.33</td>
                      <td>20</td>
                      <td>2230</td>
                      <td>15/01/2021</td>
                      <td>tool</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col sm={7} className="pl-0">
              <div className="table-wrapper table-responsive ">
                <Table hover>
                  <thead>
                    <tr>
                      <th>Stock</th>
                      <th>Date </th>
                      <th>invoic enumber </th>
                      <th>model</th>
                      <th>finance.page.vehicle_registration_number</th>
                      <th>chassis number</th>
                      <th>TVA</th>
                      <th>price excluding VAT</th>
                      <th>TVA(%) </th>
                      <th>finance.page.price_including_tax</th>
                      <th>deadline</th>
                      <th>Solde</th>
                      <th>attachment</th>
                      <th>Stock</th>
                      <th>Date </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="text-danger">342j</div>
                      </td>
                      <td>15/01/2021</td>
                      <td>INV-123</td>
                      <td>@BMW</td>
                      <td>1 ZAA 4321</td>
                      <td>265652...</td>
                      <td>
                        <span className="btn btn-label rounded-circle btn-label-danger has-tooltip">
                          M
                        </span>
                      </td>
                      <td>1858.33</td>
                      <td>20</td>
                      <td>2230</td>
                      <td>15/01/2021</td>
                      <td>tool</td>
                      <td></td>
                      <td>
                        <div className="text-danger">342j</div>
                      </td>
                      <td>15/01/2021</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-danger">342j</div>
                      </td>
                      <td>15/01/2021</td>
                      <td>INV-123</td>
                      <td>@BMW</td>
                      <td>1 ZAA 4321</td>
                      <td>265652...</td>
                      <td>
                        <span className="btn btn-label rounded-circle btn-label-danger has-tooltip">
                          M
                        </span>
                      </td>
                      <td>1858.33</td>
                      <td>20</td>
                      <td>2230</td>
                      <td>15/01/2021</td>
                      <td>tool</td>
                      <td></td>
                      <td>
                        <div className="text-danger">342j</div>
                      </td>
                      <td>15/01/2021</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-danger">342j</div>
                      </td>
                      <td>15/01/2021</td>
                      <td>INV-123</td>
                      <td>@BMW</td>
                      <td>1 ZAA 4321</td>
                      <td>265652...</td>
                      <td>
                        <span className="btn btn-label rounded-circle btn-label-danger has-tooltip">
                          M
                        </span>
                      </td>
                      <td>1858.33</td>
                      <td>20</td>
                      <td>2230</td>
                      <td>15/01/2021</td>
                      <td>tool</td>
                      <td></td>
                      <td>
                        <div className="text-danger">342j</div>
                      </td>
                      <td>15/01/2021</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          
          </Row>
        </div>
      </Sidebar>
    </>
  );
}

export default Auction;
