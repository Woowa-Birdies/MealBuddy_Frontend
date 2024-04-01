import useSampleData from '@/hooks/query/useSampleData';
import useSampleStore from '@/store/useSampleStore';
import { useEffect } from 'react';
import styled from 'styled-components';

const Sample1 = () => {
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

export default Sample1;

const StyledHome = styled.div`
  height: 66px;
`;
