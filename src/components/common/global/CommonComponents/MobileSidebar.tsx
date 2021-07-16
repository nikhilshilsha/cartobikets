import React from "react";
import Sidebar from "react-sidebar";
import Logo from "../../images/logo.png";
import { Button } from '../elements';

export default (props) => {
  return (
    <Sidebar
      sidebar={
        <b>
          {" "}
          <div className="mobiletop-nav">
            <div className="top-brand d-flex justify-content-between">
              {" "}
              <img src={Logo} className="" />
              <i
                className="fas fa-times"
                onClick={() => props.setopenSidebar()}
              ></i>
            </div>
            <ul>
              <li>My Ads</li>
              <li>My Favorites</li>
            </ul>
            <div className="d-flex justify-content-center align-items-center">
              <Button
                type="button"
                className="btn btn-primary ml-lg-2 btnModalAds"
                data-toggle="modal"
                data-target="#modalAds"
              >
                <span className="d-flex justify-content-center">
                  <i className="icon icon-add-car mr-2"></i>Add an add
                </span>  
              </Button>
            </div>
          </div>
        </b>
      }
      open={props.sidebar}
      onSetOpen={() => props.setopenSidebar()}
      rootClassName="sideb"
      // contentClassName={
      //   props.sidebar ? "sideboverlay open" : "sideboverlay closeb"
      // }
      styles={{
        sidebar: { background: "white", width: "312px", height: "100vh" },
      }}
    >
      <i onClick={() => props.setopenSidebar()} className="fas fa-bars"></i>
    </Sidebar>
  );
};
