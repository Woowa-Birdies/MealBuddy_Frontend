import { useState } from 'react';
import styled from 'styled-components';
import PostCard from '@/pages/Home/PostCard';
import homeApi from '@api/biz/homeApi';
import Typography from '@components/ui/Typography/Typography';

const Deadline = () => {
  const [posts, setPosts] = useState({ ongoing: [] });
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 3;

  const nextPage = () => {
    // Ensure that moving to the next page won't exceed the array length
    if ((currentPage + 1) * pageSize < posts.ongoing.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    // Ensure the current page is not the first page
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const fetchList = async () => {
    try {
      const res = await homeApi.deadline('7');
      setPosts(res.data);
    } catch (error) {
      console.error('Failed to fetch post list:', error);
    }
  };

  // 마운트 시에 실행
  useState(() => {
    fetchList();
  }, []);

  const currentData = posts.ongoing.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  return (
    <Container>
      <Typography content="마감 임박한 냠냠" size="large" />
      <Nav>
        <Button onClick={prevPage} disabled={currentPage === 0}>
          ◀
        </Button>
        <Button onClick={nextPage} disabled={(currentPage + 1) * pageSize >= posts.ongoing.length}>
          ▶
        </Button>
      </Nav>
      <PostGrid>
        {currentData.map((post) => (
          <PostCard key={post.postId} post={post} type="deadline" />
        ))}
      </PostGrid>
    </Container>
  );
};

export default Deadline;

const Container = styled.div`
  width: 66.67vw;
`;

const PostGrid = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 1rem;
`;

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background: none;
  cursor: pointer;

  &:disabled {
    color: #aaa;
    cursor: not-allowed;
  }
`;
