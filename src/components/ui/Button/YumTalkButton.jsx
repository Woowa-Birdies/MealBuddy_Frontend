import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import chatApi from '@api/biz/chatApi';
import usePostStore from '@store/usePostStore';
import useChatStore from '@store/useChatStore';

const YumTalkButton = ({ title, type }) => {
  const nav = useNavigate();
  const { post } = usePostStore();
  const { room, setRoom } = useChatStore();

  const handleClick = async () => {
    const res = await chatApi.joinChat({ postId: post.postId });
    console.log(res.data);
    setRoom({
      ...room,
      roomId: res.data.roomId,
      roomName: res.data.roomName,
    });
    nav('/chat');
  };

  return (
    <StyledButton onClick={handleClick} type={type} title={title}>
      {title}
    </StyledButton>
  );
};

YumTalkButton.defaultProps = {
  type: 'post',
  // onClick: () => {},
};

YumTalkButton.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['post', 'mypage']),
  // onClick: PropTypes.func,
};

export default YumTalkButton;

const StyledButton = styled.button`
  width: ${({ type }) => {
    if (type === 'post') {
      return '23.04vw';
    }
    return '16vw';
  }};
  height: ${({ type }) => {
    if (type === 'post') {
      return '4.17vw';
    }
    return '4vw';
  }};
  font-size: ${({ theme }) => theme.headings.medium.fontSize};
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  border-radius: 0.625vw;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.contentWhite};
  cursor: pointer;

  // &:hover {
  //   background: ${({ theme }) => theme.color.secondary};
  //   color: ${({ theme }) => theme.color.contentWhite};
  // }
`;
