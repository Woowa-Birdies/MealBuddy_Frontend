import React from 'react';
import styled from 'styled-components';
import usePostStore from '@store/usePostStore';
import HostButtonContainer from '@/pages/RecruitPost/HostButtonContainer';
import GuestButtonContainer from '@/pages/RecruitPost/GuestButtonContainer';

const ButtonContainer = () => {
  const now = 3;
  const { post } = usePostStore();
  const writer = post.userId;

  // console.log(now, writer);     // 확인용
  return (
    <Container>
      {now === writer ? <HostButtonContainer /> : <GuestButtonContainer userId={now} />}
    </Container>
  );
};

export default ButtonContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;
