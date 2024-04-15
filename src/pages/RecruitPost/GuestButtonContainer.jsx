import React from 'react';
import usePostStore from '@store/usePostStore';
import askApi from '@api/biz/askApi';
import CompletedButton from '@components/ui/Button/CompletedButton';
import TagButton from '@components/ui/Button/TagButton';
import YumTalkButton from '@components/ui/Button/YumTalkButton';
import GoReviewButton from '@components/ui/Button/GoReviewButton';

const GuestButtonContainer = ({ userId }) => {
  // userId = 2
  const { post } = usePostStore();
  const { postId } = post;

  const handleAskButtonClick = async () => {
    try {
      const askData = {
        userId,
        postId,
      };
      // console.log(askData);

      // 데이터 생성 요청
      await askApi.ask(askData);
    } catch (error) {
      console.error('Error in processing:', error);
    }
  };

  switch (post.postStatus) {
    case '모임 종료':
      return post.askStatus === '참여' ? (
        <GoReviewButton title="후기 작성" type="post" />
      ) : (
        <TagButton title="모임 종료" type="post" />
      );
    case '모집 마감':
      if (post.askStatus === '참여' || post.askStatus === '수락') {
        return <YumTalkButton title="냠냠 토크 입장하기" type="post" />;
      }
      if (post.askStatus === '대기') {
        return <TagButton title="신청 완료" type="post" />;
      }
      if (post.askStatus === null || post.askStatus === '거절') {
        return <TagButton title="모집 마감" type="post" />;
      }
      return null;
    case '모집중':
      if (post.askStatus === '참여' || post.askStatus === '수락') {
        return <YumTalkButton title="냠냠 토크 입장하기" type="post" />;
      }
      if (post.askStatus === '대기') {
        return <TagButton title="신청 완료" type="post" />;
      }
      if (post.askStatus === null || post.askStatus === '거절') {
        return <CompletedButton title="신청하기" onClick={handleAskButtonClick} />;
      }
      return null;
    default:
      return null;
  }
};

export default GuestButtonContainer;
