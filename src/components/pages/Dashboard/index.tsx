import React from "react";
import {
  
  Button,
  Container,
  Nav,
  Breadcrumb,
  Card,
} from "react-bootstrap";

import Sidebar from "../../common/global/CommonComponents/Sidebar";
import Chart from "react-google-charts";
import { Row, Col } from '../../common/global/elements';

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
                  breadcrumb.dashboard-page
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              {" "}
              <Button variant="warning">Ad an Add</Button>
            </div>
          </div>
          <Row>
            <Col sm={6}>
              <Card className="bg-theme-3">
                <div className="card-block">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>products in stock</h5>
                  </div>

                  <Row>
                    <Col sm={5}>
                      <h2 className="mb-2 f-w-300">12</h2>
                      <span>vehicles</span>
                    </Col>
                    <Col sm={7}>
                      <h2 className="mb-2 f-w-300">12300 €</h2>
                      <span>Total price</span>
                    </Col>
                  </Row>
                  <i className="icon icon-mon-stock"></i>
                </div>
              </Card>
              <Card>
                <Card.Header>
                  <h5>How many vehicle data sheets were downloaded?</h5>
                </Card.Header>

                <Chart
                  width={"550px"}
                  height={"400px"}
                  chartType="LineChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["x", "dogs", "cats"],
                    [0, 0, 0],
                    [1, 10, 5],
                    [2, 23, 15],
                    [3, 17, 9],
                    [4, 18, 10],
                    [5, 9, 5],
                    [6, 11, 3],
                    [7, 27, 19],
                  ]}
                  options={{
                    hAxis: {
                      title: "Time",
                    },
                    vAxis: {
                      title: "Popularity",
                    },
                    series: {
                      1: { curveType: "function" },
                    },
                  }}
                  rootProps={{ "data-testid": "2" }}
                />
              </Card>
              <Card>
                <Card.Header>
                  <h5>Number of visitors to my ads</h5>
                </Card.Header>

                <Chart
                  width={"550px"}
                  height={"300px"}
                  chartType="Bar"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Year", "Sales", "Expenses", "Profit"],
                    ["2014", 1000, 400, 200],
                    ["2015", 1170, 460, 250],
                    ["2016", 660, 1120, 300],
                    ["2017", 1030, 540, 350],
                  ]}
                  options={{
                    // Material design options
                    chart: {
                      title: "Company Performance",
                      subtitle: "Sales, Expenses, and Profit: 2014-2017",
                    },
                  }}
                  // For tests
                  rootProps={{ "data-testid": "2" }}
                />
              </Card>
            </Col>
            <Col sm={6}>
              <Card className="bg-theme-4">
                <div className="card-block">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>Total Favourites</h5>
                  </div>

                  <Row>
                    <Col sm={5}>
                      <h2 className="mb-2 f-w-300">12</h2>
                      <span>vehicles</span>
                    </Col>
                    <Col sm={7}>
                      <h2 className="mb-2 f-w-300">12300 €</h2>
                      <span>Total price</span>
                    </Col>
                  </Row>
                  <i className="icon icon-mon-stock"></i>
                </div>
              </Card>
              <Card>
                <Card.Header>
                  <h5>Number of visitors to my showcase page</h5>
                </Card.Header>

                <Chart
                  width={"550px"}
                  height={"400px"}
                  chartType="LineChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["x", "dogs", "cats"],
                    [0, 0, 0],
                    [1, 10, 5],
                    [2, 23, 15],
                    [3, 17, 9],
                    [4, 18, 10],
                    [5, 9, 5],
                    [6, 11, 3],
                    [7, 27, 19],
                  ]}
                  options={{
                    hAxis: {
                      title: "Time",
                    },
                    vAxis: {
                      title: "Popularity",
                    },
                    series: {
                      1: { curveType: "function" },
                    },
                  }}
                  rootProps={{ "data-testid": "2" }}
                />
              </Card>
              <Card>
                <Card.Header>
                  <h5>Sharing on social networks</h5>
                </Card.Header>

                <Chart
                  width={"550px"}
                  height={"300px"}
                  chartType="Bar"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Year", "Sales", "Expenses", "Profit"],
                    ["2014", 1000, 400, 200],
                    ["2015", 1170, 460, 250],
                    ["2016", 660, 1120, 300],
                    ["2017", 1030, 540, 350],
                  ]}
                  options={{
                    // Material design options
                    chart: {
                      title: "Company Performance",
                      subtitle: "Sales, Expenses, and Profit: 2014-2017",
                    },
                  }}
                  // For tests
                  rootProps={{ "data-testid": "2" }}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </Sidebar>
    </>
  );
}

export default Auction;
