import useSampleData from '@/hooks/query/useSampleData';
import useSampleStore from '@/store/useSampleStore';
import { useEffect } from 'react';
import styled from 'styled-components';

const Home = () => {
  useSampleData('userId'); // 5초마다 zustand store의 state를 변경한다.
  const samples = useSampleStore((state) => state.samples); // zustand store의 state를 참조한다.

  useEffect(() => {
    console.log('samples', samples);
  }, [samples]);

  if (!samples.length) return <div>데이터가 없습니다.</div>;

  return (
    <div>
      {samples.map((item) => (
        <StyledHome key={item.id}>{item.title}</StyledHome>
      ))}
    </div>
  );
};

export default Home;

const StyledHome = styled.div`
  height: 60px;
`;
