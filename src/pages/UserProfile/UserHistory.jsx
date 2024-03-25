import HistoryBox from '@/pages/UserProfile/HistoryBox';
import styled from 'styled-components';

const UserInfo = () => {
  const appliedHistory = ['참여 모임 제목', '참여 모임 제목', '참여 모임 제목', '참여 모임 제목'];

  const postedHistory = ['작성 모임 제목', '작성 모임 제목', '작성 모임 제목', '작성 모임 제목'];
  return (
    <HistoryWrapper>
      <HistoryBox title="참고 참여한 모임" items={appliedHistory} />
      <HistoryBox title="내가 모집한 모임" items={postedHistory} />
    </HistoryWrapper>
  );
};

export default UserInfo;

const HistoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
