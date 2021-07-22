import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from '../../../../common/global/elements';
import {
  AccordionList,
  AccordionList2,
  AccordionList3,
  AccordionList4,
} from '../../../../../utils/common';
function Account() {
  return (
    <>
      <Container className="steps-div">
        <Row>
          <Col sm={3}>
            {AccordionList.map(listul => (
              <ul>
                <li>{listul.listtext}</li>
              </ul>
            ))}
          </Col>
          <Col sm={3}>
            {AccordionList2.map(listul => (
              <ul>
                <li>{listul.listtext}</li>
              </ul>
            ))}
          </Col>
          <Col sm={3}>
            {AccordionList3.map(listul => (
              <ul>
                <li>{listul.listtext}</li>
              </ul>
            ))}
          </Col>
          <Col sm={3}>
            {AccordionList4.map(listul => (
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
