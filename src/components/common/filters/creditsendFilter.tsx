import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { Form, Input, Lable } from '../global/elements';

const InputFields = [
  {
    type: 'text',
    name: 'search',
    placeholder: '',
    className: '',
    label: '',
  },
];
export default props => {
  return (
    <div id="aside-searc" className="col-aside aside-search">
      <div className="wrapper_aside-search">
        <div className="ico-filter" onClick={() => props.setOpenSide()}>
          <div className="round-circle2">
            <i className="fas fa-times"></i>
          </div>
          <div className="quick_filter nav-default mb-3">
            <h4>
              <span>
                <i className="fas fa-filter"></i>{' '}
              </span>
              announces.filters.filter
            </h4>
          </div>
        </div>

        <div>
          <div className="mb-3">
            <Lable className="d-block block-label" lable="Vehicle type" />

            <Input type="text" placeholder="Vehicle type" name="" />
          </div>
          <div className="mb-3">
            <Lable className="d-block block-label" lable="Invoice number" />

            <Input type="text" placeholder="Invoice number" name="" />
          </div>

          <div className="mb-3">
            <Lable className="d-block block-label" lable="name of the buyer" />

            <Input type="text" placeholder="name of the buyer" name="" />
          </div>
          <div className="mb-3">
            {' '}
            <Lable className="d-block block-label" lable="brand" />
            <Input type="text" placeholder="brand" name="" />
          </div>
          <div className="mb-3">
            {' '}
            <Lable className="d-block block-label" lable="model" />
            <Input type="text" placeholder="model" name="" />
          </div>

          <div className="item-filter mt-3"></div>
        </div>

        <div className="quick_filter nav-default mt-3">
          <h4>
            <span>
              <i className="fas fa-calendar-alt"></i>
            </span>
            Order date
          </h4>
        </div>
        <div className="mt-3">
          <Input type="text" placeholder="order date" name="" />
        </div>
        <div className="quick_filter nav-default mt-3">
          <h4>
            <span>
              <i className="fas fa-globe-americas"></i>{' '}
            </span>
            rental
          </h4>
        </div>

        <div className="item-filter mt-3"></div>
        <div className="mt-3">
          <Input type="text" placeholder="order date" name="" />
          <Input
            type="text"
            placeholder="order date"
            name=""
            className="mt-2"
          />
        </div>
        <div className="quick_filter nav-default mt-3">
          <h4>
            <span>
              <i className="fas fa-rupee-sign"></i>
            </span>
            price
          </h4>
        </div>
        <div className="mb-3">
          <Lable className="d-block block-label" lable="prize" />

          <div className=" d-flex justify-space-between align-items-center">
            <div className="mr-2">
              <Input type="text" placeholder="from" name="" />
            </div>
            <div>
              <Input type="text" placeholder="to" name="" />
            </div>
          </div>
        </div>
        <div className="tab-nav check">
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">Promotional price</label>
          </div>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">VAT Deductible</label>
          </div>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">Guarantee</label>
          </div>
        </div>
        <div className="item-filter mt-3 mb-2"></div>
        <div className="quick_filter nav-default">
          <h4>
            <span>
              <i className="fas fa-user"></i>
            </span>
            vendor typer
          </h4>
        </div>
        <div className="mt-3 check">
          {' '}
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label htmlFor="vehicle1">professional vendor</label>
        </div>
        <div className=" check">
          {' '}
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label htmlFor="vehicle1">Particular vendor</label>
        </div>
      </div>
    </div>
  );
};
