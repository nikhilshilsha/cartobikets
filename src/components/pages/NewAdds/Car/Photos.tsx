import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Button } from '../../../common/global/elements';
import * as Assets from '../../../common/assets';
import CommonModal from '../../../../components/common/global/CommonComponents/commonModal';
import { useHistory } from 'react-router-dom';

function Account() {
  const [open, SetOpen] = useState(false);
  const history = useHistory();
  const closeIcon = (
    <>
      <img src={Assets.Close} className="closeIco" />
    </>
  );
  return (
    <>
      <Container>
        <div className="photo-upload">
          <h5>upload pictures</h5>
          <div className="upload-img d-flex">
            <div>
              <img src={Assets.ShwLogo} />
            </div>
            <div className="square" onClick={() => SetOpen(!open)}>
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
            <CommonModal
              openModal={open}
              onCloseModal={() => SetOpen(!open)}
              className={{ modal: 'uploadmodel', closeButton: 'crossbutton' }}
              closeIcon={closeIcon}
            >
              <h5 className="hg">
                <svg
                  className="svg-inline--fa fa-images fa-w-18"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="images"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z"
                  ></path>
                </svg>
                Image library{' '}
              </h5>
              <div className="upload_file">
                <form action="/action_page.php">
                  <input
                    type="file"
                    id="myfile"
                    name="myfile"
                    className="file_load"
                  />
                  <div className="d-flex justify-content-center drag">
                    <p>Drag or drop your photo or</p>
                    <Button
                      type="button"
                      className="btn btn-primary ml-lg-2 btnModalCancel"
                    >
                      Select
                    </Button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <Button
                  type="button"
                  className="btn btn-primary ml-lg-2 btnModalAdds"
                >
                  Add
                </Button>
                <Button
                  type="button"
                  className="btn btn-primary ml-lg-2 btnModalCancel"
                >
                  Cancel
                </Button>
              </div>
            </CommonModal>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Account;
