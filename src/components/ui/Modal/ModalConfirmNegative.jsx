import { Button } from 'antd';
import AlertIcon from '@assets/images/svg/alert-error.svg?react';
import SvgComponent from '@components/ui/Logo/SvgComponent';
import useModalConfirmStore from '@store/useModalConfirmStore';
import {
  CancelButton,
  ConfirmContent,
  FooterWrapper,
  StyledModal,
} from '@components/ui/Modal/ModalStyle';

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
      width={337.5}
      closable={false}
      centered
      footer={
        <FooterWrapper>
          <CancelButton onClick={handleCancel}>
            <span>아니오</span>
          </CancelButton>
          <Button type="primary" onClick={handleOk}>
            <span>예</span>
          </Button>
        </FooterWrapper>
      }
    >
      <ConfirmContent>
        <SvgComponent src={AlertIcon} width={30} height={30} />
        <span>{content}</span>
      </ConfirmContent>
    </StyledModal>
  );
};

export default ModalConfirmNegative;
