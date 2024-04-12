import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import usePostStore from '@store/usePostStore';
import styled from 'styled-components';
import Map from '@/pages/RecruitPost/Map';
import StatusButton from '@components/ui/Button/StatusButton';
import Typography from '@components/ui/Typography/Typography';
import dayjs from 'dayjs';
import recruitApi from '@api/biz/recruitApi';
import TagButton from '@components/ui/Button/TagButton';
// import EditIcon from '@icons/editIcon.svg';
// import Dropdown from '@components/ui/Dropdown';

const Post = () => {
  const nav = useNavigate();
  const { post, setPost } = usePostStore();
  const { postId } = useParams();
  const now = 1;

  const handleCompletionClick = () => {
    recruitApi.completionRecruit(post.postId);
  };

  const handleOngoingClick = () => {
    recruitApi.ongoingRecruit(post.postId);
  };

  const handleEditClick = () => {
    // console.log(post);
    nav(`/recruit/${post.postId}`);
  };

  const handleDeleteClick = () => {
    recruitApi.deleteRecruit(post.postId);
    nav('/');
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await recruitApi.getPost({ postId });
        setPost(res.data);
      } catch (error) {
        console.error('Failed to fetch post:', error);
      }
    };

    fetchPost();
  }, [postId, setPost]);

  const meeting = dayjs(post.meetAt).format('YYYY년 MM월 DD일 dddd A hh:mm');

  // const renderDropdown = () => {
  //   switch (post.postStatus) {
  //     // case '모집중':
  //     //   return <Dropdown options={['모집마감하기', '수정하기', '삭제하기']} />;
  //     // case '모집 마감':
  //     //   return <Dropdown options={['모집재개하기', '수정하기', '삭제하기']} />;
  //     // case '모임 종료':
  //     //   return <Dropdown options={['삭제하기']} />;
  //     // default:
  //     //   return null;
  //     case '모집중':
  //       return '모집마감하기, 수정하기, 삭제하기';
  //     case '모집 마감':
  //       return '모집재개하기, 수정하기, 삭제하기';
  //     case '모임 종료':
  //       return '삭제하기';
  //     default:
  //       return null;
  //   }
  // };

  return (
    <Container>
      {now === post.userId && (
        <EditSection>
          {/* <img src={EditIcon} alt="Edit" /> */}
          {/* {renderDropdown()} */}
          <CompletionButton onClick={handleCompletionClick}>모집마감하기</CompletionButton>
          <OngoingButton onClick={handleOngoingClick}>모집재개하기</OngoingButton>
          <EditButton onClick={handleEditClick}>수정하기</EditButton>
          <DeleteButton onClick={handleDeleteClick}>삭제하기</DeleteButton>
        </EditSection>
      )}
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

const EditSection = styled.div`
  display: flex;
  align-self: flex-end;
`;

const CompletionButton = styled.button`
  border: 1px solid #000000;
  cursor: pointer;
`;
const OngoingButton = styled.button`
  border: 1px solid #000000;
  cursor: pointer;
`;
const EditButton = styled.button`
  border: 1px solid #000000;
  cursor: pointer;
`;
const DeleteButton = styled.button`
  border: 1px solid #000000;
  cursor: pointer;
`;
