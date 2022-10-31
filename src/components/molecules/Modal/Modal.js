import React from "react";
import { Modal } from 'antd';
import { CloseCircleTwoTone, InfoCircleTwoTone } from '@ant-design/icons';

const ModalComponent = (props) => {
    const { type,
        title,
        message,
        isOpen,
        okHandler,
        cancelHandler
    } = props
    return (
        <>
            <Modal
                title={title}
                open={isOpen}
                onOk={okHandler}
                onCancel={cancelHandler}
                bodyStyle={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                className='text-base'>
                {
                    type === 'error'
                        ? <CloseCircleTwoTone twoToneColor="#f54242" className='text-3xl my-2' />
                        : <InfoCircleTwoTone twoToneColor="#3386de" className="text-3xl my-2" />
                }
                {message}
            </Modal>
        </>)
}

export default ModalComponent