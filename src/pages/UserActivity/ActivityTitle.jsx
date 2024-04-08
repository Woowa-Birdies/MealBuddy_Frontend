import Typography from '@components/ui/Typography/Typography';
import styled from 'styled-components';

const ActivityTitle = () => {
  return (
    <TitleWrapper>
      <Typography content="냠관리" size="large" />
    </TitleWrapper>
  );
};

export default ActivityTitle;

const TitleWrapper = styled.div`
  width: 100%;
  margin: 5vw 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
