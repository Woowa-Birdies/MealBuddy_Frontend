import React, { useEffect } from 'react';
import styled from 'styled-components';
import RecruitTitle from '@/pages/Recruit/RecruitTitle';
import RecruitForm from '@/pages/Recruit/RecruitForm';
import RecruitCompletedButton from '@/pages/Recruit/RecruitCompletedButton';
import useRecruitStore, { initialRecruitPost } from '@store/useRecruitStore';

const Recruit = () => {
  const { setRecruitPost } = useRecruitStore();

  useEffect(() => {
    // /recruit 페이지가 마운트될 때 recruitPost 상태를 초기화
    setRecruitPost(initialRecruitPost);
  }, [setRecruitPost]);

  return (
    <RecruitPage>
      <RecruitTitle />
      <RecruitForm />
      <RecruitCompletedButton />
    </RecruitPage>
  );
};

export default Recruit;

const RecruitPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 150px;
  padding: 30px;
  gap: 100px;
`;
