import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Label from '@components/ui/Label/Label';
import ListexpandBtn from '@components/ui/Button/ListexpandBtn';
import TimeLimit from '@components/ui/TimeLimit/TimeLimit';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import TagButton from '@components/ui/Button/TagButton';
import Btn from '@components/ui/Button/UserActivityButton';

const RequestContent = ({ information }) => {
  /* 3개씩 모집글 아이템 끊어보이기 */
  const initialDisplayCount = 3;
  const [displayedCount, setDisplayedCount] = useState(initialDisplayCount);

  const handleToggleDisplay = () => {
    if (displayedCount >= information.length) {
      setDisplayedCount(initialDisplayCount);
      window.scrollTo({
        top: 0,
      });
    } else {
      setDisplayedCount(displayedCount + 3);
    }
  };

  const isExpandable = information.length > initialDisplayCount;
  const isExpanded = displayedCount < information.length;

  /* 날짜 변환 */
  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ko-KR', options).format(date);
  };

  /* postStatus별 버튼 구성 변경 */
  const renderButtons = (postStatus) => {
    switch (postStatus) {
      case '모집중':
        return (
          <>
            <Btn title="모집 마감하기" color="contentTertiary" />
            <Btn title="신청자 보기" color="secondary" />
            <Btn title="냠냠 토크방" color="primary" />
          </>
        );
      case '모집 완료':
        return (
          <>
            <Btn title="모집 재개하기" color="contentTertiary" />
            <Btn title="신청자 보기" color="secondary" />
            <Btn title="냠냠 토크방" color="primary" />
          </>
        );
      default:
        return (
          <>
            <Btn title="후기 작성하기" color="contentPrimary" />
            <Btn title="냠냠 토크방" color="primary" />
          </>
        );
    }
  };

  return (
    <BoxWrapper>
      {information.length === 0 ? (
        <Paragraphy content="등록된 글이 없습니다." size="large" color="contentTertiary" />
      ) : (
        information.slice(0, displayedCount).map((item) => (
          <ListItem key={item.postId}>
            <Thumnail />
            <InnerBox>
              <TopSection>
                <Paragraphy content="동네" size="medium" color="contentTertiary" />
                {item.postStatus === '모집중' && <TimeLimit closeAt={item.closeAt} />}
              </TopSection>
              <Label content={item.place} size="xl" />
              <TagSection>
                <TagButton title={item.foodTypeTag} type="tag" />
                <TagButton title={item.genderTag} type="tag" />
                <TagButton title={item.ageTag} type="tag" />
              </TagSection>
              <InfoSection>
                <Label content={`모임 날짜 : ${formatDate(item.meetAt)}`} size="large" />
                <Label
                  content={`인원수 : ${item.participantCount} / ${item.participantTotal}`}
                  size="large"
                />
              </InfoSection>
              <InfoSection>
                <Label content={item.address} size="large" />
              </InfoSection>
              <BtnSection>{renderButtons(item.postStatus)}</BtnSection>
            </InnerBox>
          </ListItem>
        ))
      )}
      {isExpandable && (
        <ListexpandBtn isExpanded={!isExpanded} toggleDisplay={handleToggleDisplay} />
      )}
    </BoxWrapper>
  );
};

export default RequestContent;

RequestContent.propTypes = {
  information: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      menuCategory: PropTypes.string,
      gender: PropTypes.string,
      age: PropTypes.string,
      place: PropTypes.string,
      address: PropTypes.string,
      participantTotal: PropTypes.number,
      participantCount: PropTypes.number,
      postStatus: PropTypes.number,
      meetAt: PropTypes.string,
      closeAt: PropTypes.string,
    }),
  ).isRequired,
};

const BoxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const ListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const TagSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  margin-bottom: 0.7813vw;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
`;

const BtnSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 0.9375vw;
  gap: 18px;
`;
const Thumnail = styled.div`
  width: 16.15vw;
  height: 16.15vw;
  background-color: gray;
`;

const InnerBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding-top: 5px;
`;