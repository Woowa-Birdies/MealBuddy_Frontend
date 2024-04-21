import usePostStore from '@store/usePostStore';
import Btn from '@components/ui/Button/UserActivityButton';

const HostButtonContainer = () => {
  const { post } = usePostStore();

  if (post.postStatus === '모임 종료') {
    return <Btn title="후기 작성하기" action="review" propData={post.postId} type="post" />;
  }
  return (
    <>
      <Btn title="신청자 보기" action="request" propData={post.postId} type="post" />
      <Btn title="냠냠 토크방" action="chat" propData={post.postId} type="post" />
    </>
  );
};

export default HostButtonContainer;
