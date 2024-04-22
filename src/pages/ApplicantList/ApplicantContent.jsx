import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import recruitApi from '@api/biz/recruitApi';
import Label from '@components/ui/Label/Label';
import TimeLimit from '@components/ui/TimeLimit/TimeLimit';
import dayjs from 'dayjs';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import TagButton from '@components/ui/Button/TagButton';
import Thumnail from '@components/ui/Thumnail/ThumnailImage';
import useUserInfoStore from '@store/useUserInfoStore';

const ActivityContent = () => {
  const { userProfile } = useUserInfoStore();
  const { postId } = useParams();
  const now = userProfile.userId;
  const [postDetails, setPostDetails] = useState({
    foodTypeTag: '',
    place: '',
    genderTag: '',
    ageTag: '',
    meetAt: '',
    participantCount: 0,
    participantTotal: 0,
    address: '',
  });
  useEffect(() => {
    const loadData = async () => {
      try {
        const postDetailsResponse = await recruitApi.getPost({ postId }, `${now}`); // 주의: getPost 함수의 인터페이스에 맞춰 호출
        setPostDetails(postDetailsResponse.data);
      } catch (error) {
        console.error('Failed to load data', error);
      }
    };

    loadData();
  }, [postId, now]);
  /* 날짜 변환 */
  const formatDate = (dateString) => {
    return dayjs(dateString).format('YYYY년 MM월 DD일 dddd A hh:mm');
  };
  return (
    <BoxWrapper>
      <ListItem>
        <Thumnail content={postDetails.foodTypeTag} />
        <InnerBox>
          <TopSection>
            <Paragraphy content="동네" size="medium" color="contentTertiary" />
            {postDetails.postStatus === '모집중' && <TimeLimit closeAt={postDetails.closeAt} />}
          </TopSection>
          <Label content={postDetails.place} size="xl" />
          <TagSection>
            <TagButton title={postDetails.foodTypeTag} type="tag" />
            <TagButton title={postDetails.genderTag} type="tag" />
            <TagButton title={postDetails.ageTag} type="tag" />
          </TagSection>
          <InfoSection>
            <Label content={`📅 모임 날짜 : ${formatDate(postDetails.meetAt)}`} size="large" />
            <Label
              content={`👥 인원수 : ${postDetails.participantCount} / ${postDetails.participantTotal}`}
              size="large"
            />
          </InfoSection>
          <InfoSection>
            <Label content={`📌 ${postDetails.address}`} size="large" />
          </InfoSection>
        </InnerBox>
      </ListItem>
    </BoxWrapper>
  );
};

export default ActivityContent;

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

const InnerBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.83vw;
  justify-content: flex-start;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding-top: 5px;
`;
