import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from '../../../../common/global/elements';
import { List1, List2, List3, List4} from '../../../../../utils/common';
function Account() {
  return (
    <>
      <Container className="steps-div">
        <Row>
          <Col sm={3}>
            {List1.map(listul => (
              <ul>
                <li>{listul.listtext}</li>
              </ul>
            ))}
          </Col>
          <Col sm={3}>
            {List2.map(listul => (
              <ul>
                <li>{listul.listtext}</li>
              </ul>
            ))}
          </Col>
          <Col sm={3}>
            {List3.map(listul => (
              <ul>
                <li>{listul.listtext}</li>
              </ul>
            ))}
          </Col>
          <Col sm={3}>
            {List4.map(listul => (
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
