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

const Post = () => {
  const nav = useNavigate();
  const { post, setPost } = usePostStore();
  const { postId } = useParams();
  const now = 3;

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

  const handleMenuClick = ({ key }) => {
    switch (key) {
      case 'close':
        recruitApi.completionRecruit(post.postId);
        break;
      case 'recruit':
        recruitApi.ongoingRecruit(post.postId);
        break;
      case 'edit':
        console.log('수정');
        nav(`/recruit/${post.postId}`);
        break;
      default:
        break;
    }
  };
  const handleDeleteClick = () => {
    recruitApi.deleteRecruit(post.postId);
    nav('/');
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
        <StatusButton title={post.postStatus} />
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
              // <DelButton onClick={handleDeleteClick}>삭제하기</DelButton>
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
`;

const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
