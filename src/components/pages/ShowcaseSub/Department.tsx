import React from 'react';
import {
  Button,
  Container,
  Nav,
  Breadcrumb,
  Form,
  InputGroup,
  FormControl,
  Table,
  Card,
  Pagination,
} from 'react-bootstrap';
import Select from 'react-select';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import * as Assets from '../common/assets';

import ShowcaseFooter from '../common/global/CommonComponents/Footer/showcaseFooter';
import Avtar1 from '../../images/avatars/avatar-8.png';
import { Row, Col } from '../common/global/elements';

export default () => {
  return (
    <div className="depertmnt">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <p>page.shop.contact.memeber</p>
        <div>
          {' '}
          <Select value="announces.filters.sort_by" />
        </div>
      </div>
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center">
                <img src={Assets.Avtar1} />
                <div>
                  <p>
                    <i className="fas fa-envelope"></i> user@promaniak.com
                  </p>
                  <p>
                    <i className="fas fa-phone"></i> +32 0470 16 55 32
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center">
                <img src={Assets.Avtar1} />
                <div>
                  <p>
                    <i className="fas fa-envelope"></i> user@promaniak.com
                  </p>
                  <p>
                    <i className="fas fa-phone"></i> +32 0470 16 55 32
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center">
                <img src={Assets.Avtar1} />
                <div>
                  <p>
                    <i className="fas fa-envelope"></i> user@promaniak.com
                  </p>
                  <p>
                    <i className="fas fa-phone"></i> +32 0470 16 55 32
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center">
                <img src={Assets.Avtar1} />
                <div>
                  <p>
                    <i className="fas fa-envelope"></i> user@promaniak.com
                  </p>
                  <p>
                    <i className="fas fa-phone"></i> +32 0470 16 55 32
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center">
                <img src={Assets.Avtar1} />
                <div>
                  <p>
                    <i className="fas fa-envelope"></i> user@promaniak.com
                  </p>
                  <p>
                    <i className="fas fa-phone"></i> +32 0470 16 55 32
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Pagination className="d-flex justify-content-center">
        <Pagination.First />
        <Pagination.Item>{1}</Pagination.Item>

        <Pagination.Item active>{2}</Pagination.Item>

        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Last />
      </Pagination>
    </div>
  );
};
