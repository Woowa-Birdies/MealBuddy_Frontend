import styled from 'styled-components';
import HistoryBox from '@/pages/UserProfile/HistoryBox';

const UserHistory = ({ type, propData }) => {
  return (
    <HistoryWrapper>
      <HistoryBox title="최근 참여한 모임" items={propData.participationInfos || []} />
      <HistoryBox
        title={type === 'mypage' ? '내가 모집한 냠냠' : `${propData.nickname}님이 모집한 냠냠`}
        items={propData.recruitmentInfos || []}
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
