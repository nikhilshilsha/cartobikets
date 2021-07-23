import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from '../../../common/global/elements';
import {
  OptionList1,
  OptionList2,
  OptionList3,
  OptionList4,
} from '../../../../utils/common';
function Account() {
  return (
    <>
      <Container className="steps-div">
        <h3 className="equip">Safety equipment</h3>
        <Row>
          <Col sm={3}>
            {OptionList1.map(listul => (
              <ul>
                <li>{listul.listtext}</li>
              </ul>
            ))}
          </Col>
          <Col sm={3}>
            {OptionList2.map(listul => (
              <ul>
                <li>{listul.listtext}</li>
              </ul>
            ))}
          </Col>
          <Col sm={3}>
            {OptionList3.map(listul => (
              <ul>
                <li>{listul.listtext}</li>
              </ul>
            ))}
          </Col>
          <Col sm={3}>
            {OptionList4.map(listul => (
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
