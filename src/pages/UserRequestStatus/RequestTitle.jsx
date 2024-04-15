import Typography from '@components/ui/Typography/Typography';
import styled from 'styled-components';

const RequestTitle = () => {
  return (
    <TitleWrapper>
      <Typography content="신청 냠냠" size="large" />
    </TitleWrapper>
  );
};

export default RequestTitle;

const TitleWrapper = styled.div`
  width: 100%;
  margin: 5vw 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
