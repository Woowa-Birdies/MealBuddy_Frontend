import React from 'react';
import styled from 'styled-components';
import usePostStore from '@store/usePostStore';
import HostButtonContainer from '@/pages/RecruitPost/HostButtonContainer';
import GuestButtonContainer from '@/pages/RecruitPost/GuestButtonContainer';
import useUserInfoStore from '@store/useUserInfoStore';

const ButtonContainer = () => {
  const { post } = usePostStore();
  const { userId } = useUserInfoStore();
  const writer = post.userId;

  // console.log(userId, writer); // 확인용

  if (userId === 0 || writer === 0) {
    return null;
  }

  return (
    <Container>{userId === writer ? <HostButtonContainer /> : <GuestButtonContainer />}</Container>
  );
};

export default ButtonContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;
