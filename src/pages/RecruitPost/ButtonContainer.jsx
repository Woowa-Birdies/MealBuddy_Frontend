import React from 'react';
import styled from 'styled-components';

import ApplicantListButton from '@components/ui/Button/ApplicantListButton';
import YumTalkButton from '@components/ui/Button/YumTalkButton';
import GoReviewButton from '@components/ui/Button/GoReviewButton';
import CompletedButton from '@components/ui/Button/CompletedButton';
import TagButton from '@components/ui/Button/TagButton';

const ButtonContainer = () => {
  const role = 'GUEST';
  const postType = '모임완료';
  const guestStatus = '';

  const renderHostButtons = () => {
    if (postType === '모임완료') {
      return <GoReviewButton title="후기 작성" />;
    }
    return (
      <>
        <ApplicantListButton title="신청자 보기" />
        <YumTalkButton title="냠냠 토크 입장하기" />
      </>
    );
  };

  const renderGuestButtons = () => {
    switch (postType) {
      case '모임완료':
        return guestStatus === '참여' ? (
          <GoReviewButton title="후기 작성" type="post" />
        ) : (
          <TagButton title="모임 완료" type="post" />
        );
      case '모집마감':
        if (guestStatus === '참여' || guestStatus === '수락') {
          return <YumTalkButton title="냠냠 토크 입장하기" type="post" />;
        }
        if (guestStatus === '대기') {
          return <TagButton title="신청 완료" type="post" />;
        }
        if (guestStatus === '' || guestStatus === '거절') {
          return <TagButton title="모집 마감" type="post" />;
        }
        return null;
      case '모집중':
        if (guestStatus === '참여' || guestStatus === '수락') {
          return <YumTalkButton title="냠냠 토크 입장하기" type="post" />;
        }
        if (guestStatus === '대기') {
          return <TagButton title="신청 완료" type="post" />;
        }
        if (guestStatus === '' || guestStatus === '거절') {
          return <CompletedButton title="신청하기" onClick={() => {}} />;
        }
        return null;
      default:
        return null;
    }
  };

  return <Container>{role === 'HOST' ? renderHostButtons() : renderGuestButtons()}</Container>;
};

export default ButtonContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;
