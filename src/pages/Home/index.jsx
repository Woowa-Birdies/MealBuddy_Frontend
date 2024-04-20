import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchContainer from '@/pages/Home/SearchContainer';
import Deadline from '@/pages/Home/Deadline';
import List from '@/pages/Home/List';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState({ ongoing: [] });
  const [searching, setSearching] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    // 쿠키 확인
    const accessCookie = Cookies.get('__Secure-access');
    const refreshCookie = Cookies.get('__Secure-refresh');

    if (accessCookie && refreshCookie) {
      console.log('__Secure-access 쿠키가 있습니다:', accessCookie);
      console.log('__Secure-refresh 쿠키가 있습니다:', refreshCookie);
    } else {
      console.log('필요한 쿠키가 존재하지 않습니다.');
    }
  }, [nav]);

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
