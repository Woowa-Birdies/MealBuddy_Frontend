import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams 훅을 임포트
import usePostStore from '@store/usePostStore';
import styled from 'styled-components';
import Map from '@/pages/RecruitPost/Map';
import StatusButton from '@components/ui/Button/StatusButton';
import Typography from '@components/ui/Typography/Typography';
import dayjs from 'dayjs';
import showPostApi from '@api/biz/showPostApi';
import TagButton from '@components/ui/Button/TagButton';

const Post = () => {
  const { post, setPost } = usePostStore();
  const { postId } = useParams(); // 현재 경로에서 postId 파라미터를 추출

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await showPostApi.showPost({ postId });
        // console.log(res.data);    // 확인용
        setPost(res.data);
      } catch (error) {
        console.error('Failed to fetch post:', error);
      }
    };

    fetchPost();
  }, [postId, setPost]);

  const meeting = dayjs(post.meetAt).format('YYYY년 MM월 DD일 dddd A hh:mm');

  return (
    <Container>
      <StatusButton title={post.postStatus} />
      <Typography content={post.place} size="large" />
      <TagContainer>
        <TagButton title={post.foodTypeTag} type="tag" />
        <TagButton title={post.ageTag} type="tag" />
        <TagButton title={post.genderTag} type="tag" />
      </TagContainer>
      <Info>🗓️ {meeting}</Info>
      <Info>👤 {post.participantTotal}명 모집</Info>
      <Info>📍 {post.address}</Info>
      <Map />
      <Contents>{post.contents}</Contents>
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
