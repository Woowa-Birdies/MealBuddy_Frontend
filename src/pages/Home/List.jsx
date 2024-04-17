import styled from 'styled-components';
import PostCard from '@/pages/Home/PostCard';

const List = () => {
  return (
    <Container>
      <PostCard />
    </Container>
  );
};

export default List;

const Container = styled.div`
  display: flex;
  width: 66.67vw;
  gap: 1.04vw;
`;
