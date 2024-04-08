import Typography from '@components/ui/Typography/Typography';
import styled from 'styled-components';

const RecruitTitle = () => {
  return (
    <Title>
      <Typography content="냠냠 후기 작성하기" size="large" />
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
