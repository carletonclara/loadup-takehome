import React from "react"
import { Modal } from 'antd';

const SubmitModal = ({isModalOpen, handleOk, handleCancel}) => {
    return(
      <>
        <Modal title="Confirm your request" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>Press Ok to confirm your booking</p>
        </Modal>
      </>
    )
}

export default SubmitModal