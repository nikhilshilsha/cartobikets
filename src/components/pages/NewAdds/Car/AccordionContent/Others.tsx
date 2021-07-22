import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from '../../../../common/global/elements';
import {
  OtherList1,
  OtherList2,
  OtherList3,
  OtherList4,
} from '../../../../../utils/common';
function Account() {
  return (
    <>
      <Container className="steps-div">
        <Row>
          <Col sm={3}>
            {OtherList1.map(listul => (
              <ul>
                <li>{listul.listtext}</li>
              </ul>
            ))}
          </Col>
          <Col sm={3}>
            {OtherList2.map(listul => (
              <ul>
                <li>{listul.listtext}</li>
              </ul>
            ))}
          </Col>
          <Col sm={3}>
            {OtherList3.map(listul => (
              <ul>
                <li>{listul.listtext}</li>
              </ul>
            ))}
          </Col>
          <Col sm={3}>
            {OtherList4.map(listul => (
              <ul>
                <li>{listul.listtext}</li>
              </ul>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Account;
