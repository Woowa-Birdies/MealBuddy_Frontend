import usePostStore from '@store/usePostStore';
import askApi from '@api/biz/askApi';
import CompletedButton from '@components/ui/Button/CompletedButton';
import TagButton from '@components/ui/Button/TagButton';
import Btn from '@components/ui/Button/UserActivityButton';

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
      await askApi.postmyRequest(askData);
    } catch (error) {
      console.error('Error in processing:', error);
    }

    window.location.reload();
  };

  switch (post.postStatus) {
    case '모임 종료':
      return post.askStatus === '참여' ? (
        <Btn title="후기 작성하기" action="review" propData={post.postId} type="post" />
      ) : (
        <TagButton title="모임 종료" type="post" />
      );
    case '모집 마감':
      if (post.askStatus === '참여' || post.askStatus === '수락') {
        return <Btn title="냠냠 토크방" action="chat" type="post" />;
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
        return <Btn title="냠냠 토크방" action="chat" type="post" />;
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
