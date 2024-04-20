import { Button, Modal } from 'antd';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
  height: 150px;

  //content
  .ant-modal-content {
    border-radius: 20px;
    padding: 24px;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
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
`;

export const ConfirmContent = styled.span`
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

export const CancelButton = styled(Button)`
  background-color: #a6a6a6;
  color: #ffffff;
  border: none;

  &:hover {
    background-color: #b3b3b3 !important;
    color: #ffffff !important;
    border: none !important;
  }

  span {
    font-size: 12px;
    line-height: 18px;
  }
`;
