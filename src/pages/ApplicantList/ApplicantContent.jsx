// import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Label from '@components/ui/Label/Label';
import TimeLimit from '@components/ui/TimeLimit/TimeLimit';
import dayjs from 'dayjs';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import TagButton from '@components/ui/Button/TagButton';

const ActivityContent = ({ postData }) => {
  /* 날짜 변환 */
  const formatDate = (dateString) => {
    return dayjs(dateString).format('YYYY년 MM월 DD일 dddd A hh:mm');
  };
  console.log(postData, typeof postData);
  return (
    <BoxWrapper>
      <ListItem>
        <Thumnail />
        <InnerBox>
          <TopSection>
            <Paragraphy content="동네" size="medium" color="contentTertiary" />
            {postData.postStatus === '모집중' && <TimeLimit closeAt={postData.closeAt} />}
          </TopSection>
          <Label content={postData.place} size="xl" />
          <TagSection>
            <TagButton title={postData.foodTypeTag} type="tag" />
            <TagButton title={postData.genderTag} type="tag" />
            <TagButton title={postData.ageTag} type="tag" />
          </TagSection>
          <InfoSection>
            <Label content={`모임 날짜 : ${formatDate(postData.meetAt)}`} size="large" />
            <Label
              content={`인원수 : ${postData.participantCount} / ${postData.participantTotal}`}
              size="large"
            />
          </InfoSection>
          <InfoSection>
            <Label content={postData.address} size="large" />
          </InfoSection>
        </InnerBox>
      </ListItem>
    </BoxWrapper>
  );
};

export default ActivityContent;

ActivityContent.propTypes = {
  postData: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    menuCategory: PropTypes.string,
    gender: PropTypes.string,
    age: PropTypes.string,
    place: PropTypes.string,
    address: PropTypes.string,
    participantTotal: PropTypes.number,
    participantCount: PropTypes.number,
    postStatus: PropTypes.string,
    meetAt: PropTypes.string,
    closeAt: PropTypes.string,
  }).isRequired,
};

const BoxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-top: 140px;
`;

const ListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  cursor: pointer;
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
