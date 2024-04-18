import usePostStore from '@store/usePostStore';
import ApplicantListButton from '@components/ui/Button/ApplicantListButton';
import YumTalkButton from '@components/ui/Button/YumTalkButton';
import GoReviewButton from '@components/ui/Button/GoReviewButton';

const HostButtonContainer = () => {
  const { post } = usePostStore();
  const { postId } = post;

  if (post.postStatus === '모임 종료') {
    return <GoReviewButton title="후기 작성" />;
  }
  return (
    <>
      <ApplicantListButton title="신청자 보기" postId={postId} />
      <YumTalkButton title="냠냠 토크 입장하기" postId={postId} />
    </>
  );
};

export default HostButtonContainer;
