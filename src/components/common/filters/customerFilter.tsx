import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Container,
} from 'react-bootstrap';
import { Row, Col, Form, Lable, Input } from '../global/elements';

export default props => {
  const SearchFields = [
    {
      type: 'text',
      name: 'search',
      placeholder: 'search',
      className: 'search',
    },
  ];
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
            <Lable className="d-block block-label" lable="id customer" />

            <Input type="text" placeholder="id customer" name="" />
          </div>
          <div className="mb-3">
            <Lable
              className="d-block block-label"
              lable="first and last name"
            />

            <Input type="text" placeholder="first and last name" name="" />
          </div>

          <div className="mb-3">
            <Lable className="d-block block-label" lable="email address" />

            <Input type="text" placeholder="email address" name="" />
          </div>
          <div className="mb-3">
            <Lable className="d-block block-label" lable="Telephone number" />

            <Input type="text" placeholder="Telephone number" name="" />
          </div>

          <div className="item-filter mt-3"></div>
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
          {' '}
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
            Document
          </h4>
        </div>
        <div className="mb-3">
          <Lable
            className="d-block block-label"
            lable="Number of purchase orders"
          />

          <div className=" d-flex justify-space-between align-items-center">
            <div className="mr-2">
              <Input type="text" placeholder="from" name="" />
            </div>{' '}
            <div>
              <Input type="text" placeholder="to" name="" />
            </div>{' '}
          </div>
        </div>
        <div className="mb-3">
          <Lable className="d-block block-label" lable="Number of invoices" />

          <div className=" d-flex justify-space-between align-items-center">
            <div className="mr-2">
              <Input type="text" placeholder="from" name="" />
            </div>{' '}
            <div>
              {' '}
              <Input type="text" placeholder="to" name="" />
            </div>{' '}
          </div>
        </div>
        <div className="mb-3">
          <Lable
            className="d-block block-label"
            lable=" Number of credit ratings"
          />

          <div className=" d-flex justify-space-between align-items-center">
            <div className="mr-2">
              <Input type="text" placeholder="from" name="" />
            </div>{' '}
            <div>
              {' '}
              <Input type="text" placeholder="to" name="" />
            </div>{' '}
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
        <div className="check">
          {' '}
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label htmlFor="vehicle1">Particular vendor</label>
        </div>
      </div>
    </div>
  );
};
