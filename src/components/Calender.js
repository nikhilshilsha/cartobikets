import React, { useState } from "react";
import { Row, Col, Button, Container, Nav, Breadcrumb } from "react-bootstrap";
import ReactCalendar from "react-calendar";
import Sidebar from "./common/Sidebar";
import InProgress from "../images/auction-inprogress.png";
import Slider from "react-slick";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-calendar/dist/Calendar.css";
const locales = {
  // eslint-disable-next-line global-require
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
function Auction() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <Sidebar>
        <Row className="calender-div">
          <Col sm={4} className="mt-3">
            <div className="craete-calender">
              <Button variant="primary" type="submit">
                Create
              </Button>
              <div>
                <ReactCalendar onChange={onChange} value={value} />
              </div>
            </div>
          </Col>
          <Col sm={7} className="mt-3">
            <Breadcrumb>
              <Breadcrumb.Item active>Home</Breadcrumb.Item>

              <Breadcrumb.Item href="#">Calender</Breadcrumb.Item>
            </Breadcrumb>
            <Calendar
              localizer={localizer}
              events={[]}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            />
          </Col>
        </Row>
      </Sidebar>
    </>
  );
}

export default Auction;
