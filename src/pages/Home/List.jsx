import styled from 'styled-components';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import filter from '@assets/images/svg/filter.svg';
import PostCard from '@/pages/Home/PostCard';

const List = () => {
  return (
    <Container>
      <FilterContainer>
        <Filter src={filter} />
        <Paragraphy content="필터" size="medium" />
      </FilterContainer>
      <PostCard />
    </Container>
  );
};

export default List;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 66.67vw;
  gap: 1.04vw;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;

const Filter = styled.img``;
