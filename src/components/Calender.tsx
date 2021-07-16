import React, { useState } from 'react';
import { Button, Container, Nav, Breadcrumb } from 'react-bootstrap';
import ReactCalendar from 'react-calendar';
import Sidebar from './common/global/CommonComponents/Sidebar';
import Slider from 'react-slick';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-calendar/dist/Calendar.css';

import { Row, Col } from './common/global/elements';
const locales = {
  // eslint-disable-next-line global-require
  'en-US': require('date-fns/locale/en-US'),
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
          <Col sm={3} className="mt-3 borderr">
            <div className="craete-calender">
              <Button variant="primary" type="submit">
                Create
              </Button>
              <div>
                <ReactCalendar
                  onChange={onChange}
                  value={value}
                  className="calenderDiv"
                />
              </div>
            </div>
            <div className="appointment mt-2">
              <h5 className="pl-2">appointment</h5>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label htmlFor="vehicle1">Vehicle Test</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label htmlFor="vehicle1">see the vehicle</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label htmlFor="vehicle1">visit the boutique</label>
                </li>
              </ul>
            </div>
            <div className="border-bottom"></div>
            <input
              type="text"
              className="input-fild"
              placeholder="+ Add Calender Editor"
            />
          </Col>
          <Col sm={8} className="mt-3">
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
