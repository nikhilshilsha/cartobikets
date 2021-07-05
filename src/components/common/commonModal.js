import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default (props) => {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.onClose}
        classNames={props.className}
        closeIcon={props.closeIcon}
      >
        {props.children}
      </Modal>
    </div>
  );
};
