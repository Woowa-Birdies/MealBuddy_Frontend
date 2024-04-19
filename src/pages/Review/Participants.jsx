import styled from 'styled-components';
import Typography from '@components/ui/Typography/Typography';
import ReviewUser from '@/pages/Review/ReviewUser';
import reviewApi from '@api/biz/reviewApi';
import usePostStore from '@store/usePostStore';
import { useState } from 'react';

const Participants = () => {
  const { post } = usePostStore();
  const { postId } = post;

  const fetchParticipants = async () => {
    try {
      const res = await reviewApi.participantsInfo(postId);
      console.log(res.data);
    } catch (error) {
      console.error('Failed to get Participants Info');
    }
  };

  // 마운트 시에 실행
  useState(() => {
    fetchParticipants();
  }, []);

  return (
    <Container>
      <Typography content="참여한 냠냠메이트" size="large" />
      <UserList>
        <ReviewUser type="participants" />
        <ReviewUser type="participants" />
        <ReviewUser type="participants" />
      </UserList>
    </Container>
  );
};

export default Participants;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const UserList = styled.div``;
