import styled from 'styled-components';
import usePostStore from '@store/usePostStore';
import Label from '@components/ui/Label/Label';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import TagButton from '@components/ui/Button/TagButton';
import dayjs from 'dayjs';
import TimeLimit from '@components/ui/TimeLimit/TimeLimit';

const formatDate = (dateString) => {
  return dayjs(dateString).format('YYYY년 MM월 DD일 dddd A hh:mm');
};

const History = () => {
  const { post } = usePostStore();

  return (
    <BoxWrapper>
      <ListItem>
        <Thumnail />
        <InnerBox>
          <TopSection>
            <Paragraphy content="동네" size="medium" color="contentTertiary" />
            {post.postStatus === '모집중' && <TimeLimit closeAt={post.closeAt} />}
          </TopSection>
          <Label content={post.place} size="xl" />
          <TagSection>
            <TagButton title={post.foodTypeTag} type="tag" />
            <TagButton title={post.genderTag} type="tag" />
            <TagButton title={post.ageTag} type="tag" />
          </TagSection>
          <InfoSection>
            <Label content={`모임 날짜 : ${formatDate(post.meetAt)}`} size="large" />
            <Label
              content={`인원수 : ${post.participantCount} / ${post.participantTotal}`}
              size="large"
            />
          </InfoSection>
          <InfoSection>
            <Label content={post.address} size="large" />
          </InfoSection>
        </InnerBox>
      </ListItem>
    </BoxWrapper>
  );
};

export default History;

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
