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

export default props => {
  const InputFields = [
    {
      type: 'text',
      name: 'search',
      placeholder: '',
      className: '',
      label: '',
    },
  ];
  return (
    <div id="aside-searc" className="col-aside aside-search">
      <div className="wrapper_aside-search">
        <div className="ico-filter" onClick={() => props.setOpenSide()}>
          <div className="round-circle2">
            <i className="fas fa-times"></i>
          </div>
          <div className="quick_filter nav-default">
            <h4>
              <span>
                <i className="fas fa-filter"></i>{' '}
              </span>
              announces.filters.filter
            </h4>
          </div>
        </div>
        <div className="tab-nav ">
          <h4 className="mb-4">Vehicle type</h4>
          <ul className="nav-tabs">
            <li>
              <i className="fas fa-motorcycle"></i>
            </li>
            <li>
              <i className="fas fa-motorcycle"></i>
            </li>

            <li>
              <i className="fas fa-bicycle"></i>
            </li>
          </ul>
        </div>
        <div className="tab-nav check">
          <h4 className="mb-3 mt-2">Vehicle state</h4>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label htmlFor="vehicle1">New</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label htmlFor="vehicle1">Old</label>
        </div>
        <div>
          <div className="mb-3">
            <Lable className="d-block block-label" lable="Brand" />
            <Input type="text" placeholder="Brand" name="" />
          </div>
          <div className="mb-3">
            <Lable className="d-block block-label" lable="model" />
            <Input type="text" placeholder="model" name="" />
          </div>

          <div className="mb-3">
            {' '}
            <Lable className="d-block block-label" lable="body" />
            <Input type="text" placeholder="body" name="" />
          </div>
          <div className="mb-3">
            <Lable className="d-block block-label" lable="Year" />

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
            <Lable className="d-block block-label" lable="fuel" />

            <Input type="text" placeholder="fuel" name="" />
          </div>
          <div className="mb-3">
            <Lable className="d-block block-label" lable="Gearbox" />

            <Input type="text" placeholder="Gearbox" name="" />
          </div>
          <div className="mb-3">
            <Lable className="d-block block-label" lable="mileage" />

            <Input type="text" placeholder="mileage" name="" />
          </div>
          <div className="mb-3">
            <Lable className="d-block block-label" lable="fiscal power" />

            <Input type="text" placeholder="fiscal power" name="" />
          </div>
          <div className=" d-flex justify-space-between align-items-center mb-2">
            <div className="mr-2">
              <Input type="text" placeholder="from" name="" />
            </div>{' '}
            <div>
              {' '}
              <Input type="text" placeholder="to" name="" />
            </div>{' '}
          </div>
          <div className="item-filter mt-3"></div>
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
            </div>{' '}
            <div>
              {' '}
              <Input type="text" placeholder="to" name="" />
            </div>{' '}
          </div>
        </div>
        <div className="tab-nav check">
          <div>
            {' '}
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">Promotional price</label>
          </div>
          <div>
            {' '}
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">VAT Deductible</label>
          </div>
          <div>
            {' '}
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">Guarantee</label>
          </div>
        </div>
        <div className="item-filter mt-2 mb-3"></div>
        <div className="quick_filter nav-default">
          <h4>
            <span>
              <i className="fas fa-palette"></i>
            </span>
            color
          </h4>
        </div>
        <div className="mt-3">
          <Lable className="d-block block-label" lable="Exterior color" />

          <Input type="text" placeholder="Country" name="" />
        </div>
        <div className="mt-3">
          <Lable className="d-block block-label" lable="Color Interior" />
          <Input type="text" placeholder="" name="" />
        </div>
        <div className="item-filter mt-3 mb-3"></div>
        <div className="quick_filter nav-default mt-3">
          <h4>
            <span>
              <i className="fas fa-globe-americas"></i>{' '}
            </span>
            rental
          </h4>
        </div>
        <div className="mt-3">
          {' '}
          <Input type="text" placeholder="country" name="" />
          <Input type="" placeholder="Localty" className="mt-3" name="" />
        </div>
        <div className="item-filter mt-3 mb-3"></div>
        <div className="tab-nav check">
          <div>
            {' '}
            <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">good condition</label>
          </div>
          <div>
            {' '}
            <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">Damaged vehicle</label>
          </div>
        </div>
        <div className="mt-3">
          <Lable className="d-block block-label" lable="no of doors" />

          <Input type="text" placeholder="" name="" />
        </div>
        <div className="mt-3">
          <Lable className="d-block block-label" lable="number of seats" />

          <Input type="text" placeholder="" name="" />
        </div>
        <div className="mt-3 check">
          {' '}
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label htmlFor="vehicle1">Distribution chain</label>
        </div>
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
        <div className="mt-3 check">
          {' '}
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label htmlFor="vehicle1">Distribution chain</label>
        </div>
        <div className="item-filter mt-3 mb-3"></div>
        <div className="quick_filter nav-default">
          <h4>
            <span>
              <i className="fas fa-palette"></i>
            </span>
            Vehicle options
          </h4>
        </div>
      </div>
    </div>
  );
};
