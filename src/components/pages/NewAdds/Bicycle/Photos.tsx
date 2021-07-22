import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import * as Assets from '../../../common/assets';
function Account() {
  return (
    <>
      <Container>
        <div className="photo-upload">
          <h5>upload pictures</h5>
          <div className="upload-img d-flex">
            <div>
              <img src={Assets.ShwLogo} />
            </div>
            <div className="square">
              <svg width="60" height="60" viewBox="0 0 90.7 90.7">
                <g>
                  <path
                    fill="#929493"
                    d="M81.6,25.1l-21.9-0.2l-5-7H36.8l-4.9,7L9.1,25.1c-3.7,0-6.8,3-6.8,6.7v2.2H12c2.1,0,3.9,1.7,3.9,3.9v25.4
                        c0,2.2-1.8,3.9-3.9,3.9H2.4c0.6,3.1,3.3,5.5,6.6,5.5h72.6c3.7,0,6.8-3,6.8-6.8V31.9C88.4,28.1,85.4,25.1,81.6,25.1z M45.4,67.3
                        c-10,0-18.1-8.1-18.1-18.1c0-10,8.1-18.1,18.1-18.1c10,0,18.1,8.1,18.1,18.1C63.5,59.2,55.3,67.3,45.4,67.3z M51.4,25.8H39.3v-4.5
                        h12.1V25.8z"
                  ></path>
                  <path
                    fill="#929493"
                    d="M14.4,38v25.3c0,1.3-1.1,2.4-2.4,2.4H2.3V35.6h9.6C13.3,35.6,14.4,36.7,14.4,38z"
                  ></path>
                  <path
                    fill="#929493"
                    d="M79,25.6h-5.9v-1.6c0-1.5,1.2-2.6,2.6-2.6h0.6c1.5,0,2.6,1.2,2.6,2.6V25.6z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Account;
