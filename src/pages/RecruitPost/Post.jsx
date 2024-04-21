import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Dropdown } from 'antd';
import usePostStore from '@store/usePostStore';
import styled from 'styled-components';
import Map from '@/pages/RecruitPost/Map';
import StatusButton from '@components/ui/Button/StatusButton';
import TitleTypography from '@components/ui/Typography/Typography';
import dayjs from 'dayjs';
import recruitApi from '@api/biz/recruitApi';
import TagButton from '@components/ui/Button/TagButton';
import settingIcon from '@assets/images/svg/setting.svg';
import SelectButton from '@components/ui/Button/SelectButton';
import TimeLimit from '@components/ui/TimeLimit/TimeLimit';
import useConfirmModal from '@hooks/component/modal/useConfirmModal';

const Post = () => {
  const nav = useNavigate();
  const showConfirm = useConfirmModal();
  const { post, setPost } = usePostStore();
  const { postId } = useParams();
  const now = 1;

  const editMenuItems = () => {
    switch (post.postStatus) {
      case '모집중':
        return [
          { label: <span style={{ fontSize: '14px' }}>모집마감하기</span>, key: 'close' },
          { label: <span style={{ fontSize: '14px' }}>수정하기</span>, key: 'edit' },
          { label: <span style={{ fontSize: '14px' }}>삭제하기</span>, key: 'delete' },
        ];
      case '모집 마감':
        return [
          { label: <span style={{ fontSize: '14px' }}>모집재개하기</span>, key: 'recruit' },
          { label: <span style={{ fontSize: '14px' }}>수정하기</span>, key: 'edit' },
          { label: <span style={{ fontSize: '14px' }}>삭제하기</span>, key: 'delete' },
        ];
      default:
        return [];
    }
  };

  const handleDeleteClick = () => {
    recruitApi.deleteRecruit(post.postId);
    nav('/');
  };

  const handleMenuClick = async ({ key }) => {
    switch (key) {
      case 'close':
        await showConfirm('모집을 마감하시겠습니까?');
        await recruitApi.completionRecruit(post.postId);
        window.location.reload();
        break;
      case 'recruit':
        await showConfirm('모집을 재개하시겠습니까?');
        await recruitApi.ongoingRecruit(post.postId);
        window.location.reload();
        break;
      case 'edit':
        nav(`/recruit/${post.postId}`);
        break;
      case 'delete':
        await handleDeleteClick();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // console.log(post.askStatus);
    const fetchPost = async () => {
      try {
        const res = await recruitApi.getPost({ postId }, `${now}`);
        setPost(res.data);
      } catch (error) {
        console.error('Failed to fetch post:', error);
      }
    };

    fetchPost();
  }, [postId, setPost, post.askStatus]);

  const meeting = dayjs(post.meetAt).format('YYYY년 MM월 DD일 dddd A hh:mm');

  return (
    <Container>
      {/* {console.log(post)} */}
      <StatusContainer>
        <PostStatus>
          <StatusButton title={post.postStatus} />
          <TimeLimit closeAt={post.closeAt} />
        </PostStatus>
        {now === post.userId && (
          <EditSection>
            {post.postStatus !== '모임 종료' ? (
              <Dropdown
                menu={{
                  items: editMenuItems(),
                  onClick: handleMenuClick,
                }}
                placement="bottomRight"
              >
                <Setting src={settingIcon} alt="Settings" />
              </Dropdown>
            ) : (
              <SelectButton title="삭제하기" type="del" onClick={handleDeleteClick} />
            )}
          </EditSection>
        )}
      </StatusContainer>
      <TitleTypography content={post.place} size="large" />
      <TagContainer>
        <TagButton title={post.foodTypeTag} type="tag" />
        <TagButton title={post.ageTag} type="tag" />
        <TagButton title={post.genderTag} type="tag" />
      </TagContainer>
      <Info>🗓️ {meeting}</Info>
      <Info>👤 {post.participantTotal}명 모집</Info>
      <Info>📍 {post.address}</Info>
      <Map place={post.place} />
      <Contents>{post.contents}</Contents>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Setting = styled.img``;

const TagContainer = styled.div`
  display: flex;
  gap: 14px;
`;

const Info = styled.div``;

const Contents = styled.div`
  width: 50vw;
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
