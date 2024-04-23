import styled from 'styled-components';
import PropTypes from 'prop-types';
import recruitApi from '@api/biz/recruitApi';
import askApi from '@api/biz/askApi';
import chatApi from '@api/biz/chatApi';

import { useNavigate } from 'react-router-dom';
// import gatherApi from '@api/biz/gatherApi';
import useConfirmModal from '@hooks/component/modal/useConfirmModal';
import useChatStore from '@store/useChatStore';

const UserActivityButton = ({ title, action, propData, type, disabled }) => {
  const nav = useNavigate();
  const showConfirm = useConfirmModal();
  const { room, setRoom } = useChatStore();

  // close : 모집 마감하기 / ongoing : 모집 재개하기 /review : 후기 작성하기 / chat : 냠냠 토크방 / request : 신청자 보기 / cancel : 신청 취소하기
  const handleClick = async (event) => {
    event.stopPropagation(); // 이벤트 버블링 방지

    if (action === 'close') {
      // postId
      await showConfirm('모집을 마감하시겠습니까?');
      await recruitApi.completionRecruit(propData);
      window.location.reload();
    }
    if (action === 'ongoing') {
      // postId
      await showConfirm('모집을 재개하시겠습니까?');
      await recruitApi.ongoingRecruit(propData);
      window.location.reload();
    }
    if (action === 'review') {
      console.log('후기 작성하기');
      nav(`/review/${propData}`);
    }
    if (action === 'chat') {
      await showConfirm('채팅방에 입장하시겠습니까?');
      console.log('postId: ', propData);
      const res = await chatApi.joinChat({ postId: propData });
      await setRoom({
        ...room,
        roomId: res.data.roomId,
        roomName: res.data.roomName,
      });
      await console.log(res.data);
      console.log('채팅방 입장', propData);
      nav('/chat');
    }
    if (action === 'request') {
      nav(`/applicantslist/${propData}`);
    }
    if (action === 'cancel') {
      await showConfirm('신청을 취소하시겠습니까?');
      await askApi.deleteAsk(propData); // askId
      console.log('신청 취소하기');
      window.location.reload();
    }
  };

  return (
    <StyledButton onClick={handleClick} action={action} type={type} disabled={disabled}>
      {title}
    </StyledButton>
  );
};

UserActivityButton.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
};

export default UserActivityButton;

const StyledButton = styled.button`
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')} !important;
  width: ${({ type }) => {
    if (type === 'post') {
      return '23.04vw';
    }
    return '13.0836vw';
  }};
  height: ${({ type }) => {
    if (type === 'post') {
      return '4.17vw';
    }
    return '3.334vw';
  }};
  box-sizing: border-box;
  padding: 0.834vw 2vw;
  font-size: 1.1vw;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 31.992px */
  border-radius: 0.625vw;
  background-color: ${({ theme, action }) => {
    if (action === 'close' || action === 'ongoing' || action === 'cancel') {
      return theme.color.contentTertiary;
    }
    if (action === 'chat') {
      return theme.color.primary;
    }
    if (action === 'request') {
      return theme.color.secondary;
    }
    if (action === 'review') {
      return theme.color.contentPrimary;
    }
    return theme.color.primary;
  }};
  color: ${({ theme }) => theme.color.contentWhite};
  cursor: pointer;
`;
