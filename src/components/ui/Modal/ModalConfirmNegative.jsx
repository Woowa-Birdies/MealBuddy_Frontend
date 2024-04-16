import { Modal } from 'antd';
import AlertIcon from '@assets/images/svg/alert-octagon.svg?react';
import SvgComponent from '@components/ui/Logo/SvgComponent';
import styled from 'styled-components';
import useModalConfirmStore from '@store/useModalConfirmStore';

const ModalConfirmNegative = () => {
  const { content, isConfirmOpen, setIsConfirmOpen, onOk, onCancel } = useModalConfirmStore();

  const handleOk = () => {
    onOk();
    setIsConfirmOpen(false);
  };

  const handleCancel = () => {
    onCancel();
    setIsConfirmOpen(false);
  };

  return (
    <StyledModal
      open={isConfirmOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="예"
      okType="danger"
      cancelText="아니오"
      width={337.5}
      closable={false}
    >
      <ConfirmContent>
        <SvgComponent src={AlertIcon} width={30} height={30} />
        <span>{content}</span>
      </ConfirmContent>
    </StyledModal>
  );
};

export default ModalConfirmNegative;

const StyledModal = styled(Modal)`
  height: 150px;

  //content
  .ant-modal-content {
    border-radius: 20px;
    padding: 24px;
  }

  //footer
  .ant-modal-footer {
    display: flex;
    justify-content: center;

    .ant-btn-default {
      background-color: #a6a6a6;
      color: #ffffff;
      border: none;

      &:hover {
        background-color: #b3b3b3;
        color: #ffffff;
        border: none;
      }

      span {
        font-size: 12px;
        line-height: 18px;
      }
    }

    .ant-btn-default.ant-btn-dangerous {
      background-color: #ff544a;
      color: #ffffff;
      border: none;

      &:hover {
        background-color: #ff7e73;
        color: #ffffff;
      }

      span {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
`;

const ConfirmContent = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin-top: 10px;
    font-weight: 500;
    font-size: 1.111vw;
    line-height: 1.777vw;
  }
`;
