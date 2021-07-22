import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from '../../../../common/global/elements';
import {
  Equiomentlist1,
  Equiomentlist2,
  Equiomentlist3,
  Equiomentlist4,
} from '../../../../../utils/common';
function Account() {
  return (
    <>
      <Container className="steps-div">
        <Row>
          <Col sm={3}>
            {Equiomentlist1.map(listul => (
              <ul>
                <li>{listul.listtext}</li>
              </ul>
            ))}
          </Col>
          <Col sm={3}>
            {Equiomentlist2.map(listul => (
              <ul>
                <li>{listul.listtext}</li>
              </ul>
            ))}
          </Col>
          <Col sm={3}>
            {Equiomentlist3.map(listul => (
              <ul>
                <li>{listul.listtext}</li>
              </ul>
            ))}
          </Col>
          <Col sm={3}>
            {Equiomentlist4.map(listul => (
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
