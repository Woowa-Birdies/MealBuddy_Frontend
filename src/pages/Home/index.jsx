import { useState } from 'react';
import styled from 'styled-components';
import SearchContainer from '@/pages/Home/SearchContainer';
import Deadline from '@/pages/Home/Deadline';
import List from '@/pages/Home/List';

const Home = () => {
  const [posts, setPosts] = useState({ ongoing: [] });
  const [searching, setSearching] = useState(false);

  return (
    <Container>
      <SearchContainer posts={posts} setPosts={setPosts} setSearching={setSearching} />
      {searching === false && <Deadline searching={searching} />}
      <List posts={posts} setPosts={setPosts} />
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
