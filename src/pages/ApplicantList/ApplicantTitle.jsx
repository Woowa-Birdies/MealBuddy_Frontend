import Typography from '@components/ui/Typography/Typography';
import styled from 'styled-components';

const ApplicantTitle = () => {
  return (
    <TitleWrapper>
      <Typography content="메이트 신청 내역" size="large" />
    </TitleWrapper>
  );
};

export default ApplicantTitle;

const TitleWrapper = styled.div`
  width: 100%;
  margin: 5vw 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
