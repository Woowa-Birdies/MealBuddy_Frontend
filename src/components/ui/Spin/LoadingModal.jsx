import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import useLoadingStore from '@store/useLoadingStore';
import { Modal, Spin } from 'antd';
import styled from 'styled-components';

const LoadingModal = () => {
  const isLoading = useLoadingStore((state) => state.isLoading);

  return (
    <StyledModal open={isLoading} footer={null} closable={false} centered width={320}>
      <StyledSpin tip="Loading">
        <StyledDiv>
          <Paragraphy content="냠냠 가는 중! 잠시만 기다려주세요." size="medium" />
        </StyledDiv>
      </StyledSpin>
    </StyledModal>
  );
};

export default LoadingModal;

const StyledModal = styled(Modal)`
  height: 230px;
  & div {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  & .ant-modal-content {
    border-radius: 20px;
  }

  & .ant-modal-body {
    top: 0;
    left: 0;
  }

  & .ant-spin-blur {
    opacity: unset;
  }

  & .ant-spin-blur::after {
    border-radius: 20px;
    opacity: 0;
  }
`;

const StyledDiv = styled.div`
  text-align: center;
  top: 141px;
`;

const StyledSpin = styled(Spin)`
  & .ant-spin-dot-spin {
    margin-top: 63px !important;
    top: 0 !important;
  }

  & .ant-spin-dot .ant-spin-dot-item {
    background-color: ${({ theme }) => theme.color.secondary};
  }

  & .ant-spin-text {
    top: 96px !important;
    font-size: ${({ theme }) => theme.paragraphy.medium.fontSize};
    font-weight: ${({ theme }) => theme.paragraphy.medium.fontWeight};
    line-height: ${({ theme }) => theme.paragraphy.medium.lineHeight};
    color: ${({ theme }) => theme.color.secondary};
  }
`;
