import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

type Props = {
  openModal: boolean;
  onCloseModal: () => any;
  className: object;
  closeIcon: any;
  children: any;
};

export default ({
  openModal,
  onCloseModal,
  className,
  closeIcon,
  children,
}: Props) => {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={onCloseModal}
        classNames={className}
        closeIcon={closeIcon}
      >
        {children}
      </Modal>
    </div>
  );
};
