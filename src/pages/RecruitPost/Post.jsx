import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams 훅을 임포트
import useRecruitStore from '@store/useRecruitStore';
import styled from 'styled-components';
import Map from '@/pages/RecruitPost/Map';
import StatusButton from '@components/ui/Button/StatusButton';
import Typography from '@components/ui/Typography/Typography';
import dayjs from 'dayjs';
import showPostApi from '@api/biz/showPostApi';
import TagButton from '@components/ui/Button/TagButton';

const Post = () => {
  const { recruitPost, setRecruitPost } = useRecruitStore();
  const { postId } = useParams(); // 현재 경로에서 postId 파라미터를 추출

  const aa = dayjs(recruitPost.meetAt).format('YYYY년 MM월 DD일 dddd A hh:mm');
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await showPostApi.showPost({ postId });
        setRecruitPost(res.data);
      } catch (error) {
        console.error('Failed to fetch post:', error);
      }
    };

    fetchPost();
  }, [postId, setRecruitPost]);

  return (
    <Container>
      <StatusButton title={recruitPost.postStatus} />
      <Typography content={recruitPost.place} size="large" />
      <TagContainer>
        <TagButton title={recruitPost.foodTypeTag} type="tag" />
        <TagButton title={recruitPost.ageTag} type="tag" />
        <TagButton title={recruitPost.genderTag} type="tag" />
      </TagContainer>
      <Info>🗓️ {aa}</Info>
      <Info>👤 {recruitPost.participantTotal}명 모집</Info>
      <Info>📍 {recruitPost.address}</Info>
      <Map />
      <Contents>{recruitPost.contents}</Contents>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin: 0 250px;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 14px;
`;

const Info = styled.div``;

const Contents = styled.div`
  width: 756px;
  display: flex;
  flex-direction: column;
  padding: 50px;
  border-radius: 20px;
  background: #f8f8f8;
  white-space: pre-wrap;
`;
