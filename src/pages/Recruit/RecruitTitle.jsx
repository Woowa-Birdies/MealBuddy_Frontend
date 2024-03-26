import Typography from '@components/ui/Typography/Typography';
import styled from 'styled-components';

const RecruitTitle = () => {
  return (
    <Title>
      <Typography content="냠냠할 친구를 만들어요!" color="primary" />
      <Typography content="냠메이트 모집하기" size="xl" />
    </Title>
  );
};

export default RecruitTitle;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
