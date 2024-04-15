import styled from 'styled-components';
import FilterContainer from '@/pages/Home/FilterContainer';
import Deadline from '@/pages/Home/Deadline';
import List from '@/pages/Home/List';

const Home = () => {
  return (
    <Container>
      <FilterContainer />
      <Deadline />
      <List />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 150px;
  gap: 100px;
`;
