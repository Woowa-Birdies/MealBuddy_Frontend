import { Button } from 'antd';
import AlertIcon from '@assets/images/svg/alert-warning.svg?react';
import SvgComponent from '@components/ui/Logo/SvgComponent';
import useModalWarningStore from '@store/useModalWarningStore';
import { ConfirmContent, FooterWrapper, StyledModal } from '@components/ui/Modal/ModalStyle';

const ModalWarning = () => {
  const { content, isWarningOpen, setIsWarningOpen, onOk } = useModalWarningStore();

  const handleOk = () => {
    onOk();
    setIsWarningOpen(false);
  };

  return (
    <StyledModal
      open={isWarningOpen}
      width={337.5}
      closable={false}
      centered
      footer={
        <FooterWrapper>
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

export default ModalWarning;
