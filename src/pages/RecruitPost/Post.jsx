import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // useParams 훅을 임포트
import styled from 'styled-components';
import Map from '@/pages/RecruitPost/Map';
import StatusButton from '@components/ui/Button/StatusButton';
import SelectButton from '@components/ui/Button/SelectButton';
import useRecruitStore from '@store/useRecruitStore';
import Typography from '@components/ui/Typography/Typography';
import dayjs from 'dayjs';
import showPostApi from '@api/biz/showPostApi';

const Post = () => {
  const { recruitPost } = useRecruitStore();
  const aa = dayjs(recruitPost.meetAt).format('YYYY년 MM월 DD일 dddd A hh:mm');

  const { postId } = useParams(); // 현재 경로에서 postId 파라미터를 추출
  console.log('아이디는 ', postId);
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await showPostApi.showPost({ postId });
        console.log(res.data);
        setPost(res);
      } catch (error) {
        console.error('Failed to fetch post:', error);
      }
    };

    fetchPost();
  }, [postId, post]); // postId가 변경될 때마다 요청을 다시 보냅니다.

  return (
    <Container>
      <StatusButton title="모집중" />
      <Typography content={recruitPost.place} size="large" />
      <TagContainer>
        <SelectButton title={recruitPost.foodTypeTag} type="tag" />
        <SelectButton title={recruitPost.ageTag} type="tag" />
        <SelectButton title={recruitPost.genderTag} type="tag" />
      </TagContainer>
      <Info>{aa}</Info>
      <Info>{recruitPost.participantTotal}명 모집</Info>
      <Info>{recruitPost.address}</Info>
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
