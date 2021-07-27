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
  Form,
} from 'react-bootstrap';
export default props => {
  return (
    <div className="notify-div">
      <div className="notify-tabs">
        <div
          className="Back-btn "
          onClick={() => props.setOpenSide(!props.open)}
        >
          <i className="fas fa-arrow-left"></i>
        </div>
        <div className="clearfix"></div>
        <ul className="tabBtn">
          <li> Notification</li>
        </ul>
      </div>
      <ul className="notify-menu2 ">
        <li>
          <div className="d-flex justify-content-between">
            <div className="round-circle">
              <svg
                className="svg-inline--fa fa-comment-dots fa-w-16"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="comment-dots"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"
                ></path>
              </svg>
            </div>
            <div>
              <span className="desc">
                <strong>profile</strong> Comment on your announce Alpina
                B12-Alpina <b></b>
              </span>
              <span className="time ">il y a 8 mois</span>
            </div>
          </div>
        </li>
        <li>
          <div className="d-flex justify-content-between">
            <div className="round-circle">
              <svg
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 90.71 90.71"
              >
                <path
                  fill="#10D100"
                  d="M81.37,27.1L34.5,72.28c-1.84,1.77-4.77,1.72-6.54-0.12L9.19,47.96c-2.22-2.3-2.15-5.97,0.15-8.19l0,0c2.3-2.22,5.97-2.15,8.19,0.15L31.47,59.1l41.85-40.34c2.3-2.22,5.97-2.15,8.19,0.15l0,0C83.74,21.21,83.67,24.88,81.37,27.1z"
                ></path>
              </svg>
            </div>
            <div>
              <span className="desc">
                <strong>profile</strong> Comment on your announce Alpina
                B12-Alpina <b></b>
              </span>
              <span className="time ">il y a 8 mois</span>
            </div>
          </div>
        </li>
        <li>
          <div className="d-flex justify-content-between">
            <div className="round-circle">
              <svg
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 90.71 90.71"
              >
                <g>
                  <path
                    fill="#FF2424"
                    d="M45.35,61.96L45.35,61.96c1.81,0,3.28-1.47,3.28-3.28V15.01c0-1.81-1.47-3.28-3.28-3.28h0c-1.81,0-3.28,1.47-3.28,3.28v43.66C42.07,60.49,43.54,61.96,45.35,61.96z"
                  ></path>
                  <path
                    fill="#FF2424"
                    d="M45.35,75.71L45.35,75.71c-2.52,0-4.56-2.04-4.56-4.56v0c0-2.52,2.04-4.56,4.56-4.56h0c2.52,0,4.56,2.04,4.56,4.56v0C49.91,73.67,47.87,75.71,45.35,75.71z"
                  ></path>
                </g>
              </svg>
            </div>
            <div>
              <span className="desc">
                <strong>profile</strong> Comment on your announce Alpina
                B12-Alpina <b></b>
              </span>
              <span className="time ">il y a 8 mois</span>
            </div>
          </div>
        </li>
        <li>
          <div className="d-flex justify-content-between">
            <div className="round-circle">
              <svg
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 90.71 90.71"
              >
                <g>
                  <g>
                    <path
                      fill="#5A006D"
                      d="M69.78,81.03H3.74c0-25.22,14.78-45.67,33.02-45.67C55,35.35,69.78,55.8,69.78,81.03z"
                    ></path>
                    <ellipse
                      fill="#5A006D"
                      cx="36.75"
                      cy="18.63"
                      rx="14.8"
                      ry="14.25"
                    ></ellipse>
                  </g>
                  <g>
                    <path
                      fill="#F4D600"
                      d="M86.46,65.92l-1.3,15.94c0,0.16-0.13,0.28-0.28,0.28l-35.53,0.27c-0.16,0-0.28-0.13-0.28-0.28l-1.3-16.2c0-0.16,0.13-0.28,0.28-0.28h4.21c0.16,0,0.28,0.13,0.28,0.28v0.99c0,1.51,0.6,2.95,1.67,4l0,0c1.91,1.88,4.88,2.16,7.1,0.66l0.95-0.64c1.55-1.05,2.48-5.24,2.48-7.11v-0.36c0-0.16,0.13-0.28,0.28-0.28h4.21c0.16,0,0.28,0.13,0.28,0.28v0.36c0,1.87,0.93,6.07,2.48,7.11l0.95,0.64c2.22,1.5,5.19,1.22,7.1-0.66l0,0c1.07-1.06,1.67-2.5,1.67-4v-0.99c0-0.16,0.13-0.28,0.28-0.28h4.19C86.33,65.64,86.46,65.77,86.46,65.92z"
                    ></path>
                    <path
                      fill="#F4D600"
                      d="M84.66,86.32H49.56c-0.12,0-0.22-0.1-0.22-0.22v-2.47c0-0.12,0.1-0.22,0.22-0.22h35.09c0.12,0,0.22,0.1,0.22,0.22v2.47C84.88,86.22,84.78,86.32,84.66,86.32z"
                    ></path>
                    <circle
                      fill="#F4D600"
                      cx="67.29"
                      cy="59.11"
                      r="3.83"
                    ></circle>
                    <circle
                      fill="#F4D600"
                      cx="84.13"
                      cy="62.49"
                      r="2.85"
                    ></circle>
                    <circle
                      fill="#F4D600"
                      cx="50.01"
                      cy="62.49"
                      r="2.85"
                    ></circle>
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <span className="desc">
                <strong>profile</strong> Comment on your announce Alpina
                B12-Alpina <b></b>
              </span>
              <span className="time ">il y a 8 mois</span>
            </div>
          </div>
        </li>
        <li>
          <div className="d-flex justify-content-between">
            <div className="round-circle">
              <svg
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 90.71 90.71"
              >
                <g>
                  <g>
                    <path
                      fill="#5A006D"
                      d="M69.78,81.03H3.74c0-25.22,14.78-45.67,33.02-45.67C55,35.35,69.78,55.8,69.78,81.03z"
                    ></path>
                    <ellipse
                      fill="#5A006D"
                      cx="36.75"
                      cy="18.63"
                      rx="14.8"
                      ry="14.25"
                    ></ellipse>
                  </g>
                  <g>
                    <path
                      fill="#F4D600"
                      d="M86.46,65.92l-1.3,15.94c0,0.16-0.13,0.28-0.28,0.28l-35.53,0.27c-0.16,0-0.28-0.13-0.28-0.28l-1.3-16.2c0-0.16,0.13-0.28,0.28-0.28h4.21c0.16,0,0.28,0.13,0.28,0.28v0.99c0,1.51,0.6,2.95,1.67,4l0,0c1.91,1.88,4.88,2.16,7.1,0.66l0.95-0.64c1.55-1.05,2.48-5.24,2.48-7.11v-0.36c0-0.16,0.13-0.28,0.28-0.28h4.21c0.16,0,0.28,0.13,0.28,0.28v0.36c0,1.87,0.93,6.07,2.48,7.11l0.95,0.64c2.22,1.5,5.19,1.22,7.1-0.66l0,0c1.07-1.06,1.67-2.5,1.67-4v-0.99c0-0.16,0.13-0.28,0.28-0.28h4.19C86.33,65.64,86.46,65.77,86.46,65.92z"
                    ></path>
                    <path
                      fill="#F4D600"
                      d="M84.66,86.32H49.56c-0.12,0-0.22-0.1-0.22-0.22v-2.47c0-0.12,0.1-0.22,0.22-0.22h35.09c0.12,0,0.22,0.1,0.22,0.22v2.47C84.88,86.22,84.78,86.32,84.66,86.32z"
                    ></path>
                    <circle
                      fill="#F4D600"
                      cx="67.29"
                      cy="59.11"
                      r="3.83"
                    ></circle>
                    <circle
                      fill="#F4D600"
                      cx="84.13"
                      cy="62.49"
                      r="2.85"
                    ></circle>
                    <circle
                      fill="#F4D600"
                      cx="50.01"
                      cy="62.49"
                      r="2.85"
                    ></circle>
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <span className="desc">
                <strong>profile</strong> Comment on your announce Alpina
                B12-Alpina <b></b>
              </span>
              <span className="time ">il y a 8 mois</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
