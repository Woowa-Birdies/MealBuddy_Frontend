import styled from 'styled-components';
import HistoryBox from '@/pages/UserProfile/HistoryBox';

const UserHistory = ({ type }) => {
  const appliedHistory = ['참여 모임 제목', '참여 모임 제목', '참여 모임 제목', '참여 모임 제목'];

  const postedHistory = ['작성 모임 제목', '작성 모임 제목', '작성 모임 제목', '작성 모임 제목'];
  return (
    <HistoryWrapper>
      <HistoryBox title="최근 참여한 모임" items={appliedHistory} />
      <HistoryBox
        title={type === 'mypage' ? '내가 모집한 냠냠' : 'OOO님이 모집한 냠냠'}
        items={postedHistory}
      />
    </HistoryWrapper>
  );
};

export default UserHistory;

const HistoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 128px;
`;
