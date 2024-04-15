import styled from 'styled-components';
import PropTypes from 'prop-types';
import recruitApi from '@api/biz/recruitApi';
import askApi from '@api/biz/askApi';
import chatApi from '@api/biz/chatApi';
import { useNavigate } from 'react-router-dom';
import gatherApi from '@api/biz/gatherApi';

const UserActivityButton = ({ title, action, propData }) => {
  const nav = useNavigate();
  // close : 모집 마감하기 / ongoing : 모집 재개하기 /review : 후기 작성하기 / chat : 냠냠 토크방 / request : 신청자 보기 / cancel : 신청 취소하기
  const handleClick = async (event) => {
    event.stopPropagation(); // 이벤트 버블링 방지

    if (action === 'close') {
      // postId
      await recruitApi.completionRecruit(propData);
      window.location.reload();
    }
    if (action === 'ongoing') {
      // postId
      await recruitApi.ongoingRecruit(propData);
      window.location.reload();
    }
    if (action === 'review') {
      console.log('후기 작성하기');
      window.location.reload();
    }
    if (action === 'chat') {
      await chatApi.joinChat(propData);
      console.log('채팅방 입장', propData);
      nav(0);
    }
    if (action === 'request') {
      await gatherApi.getAskList(propData); // postId
      console.log('신청자 보기');
      window.location.reload();
    }
    if (action === 'cancel') {
      await askApi.deleteAsk(propData); // askId
      console.log('신청 취소하기');
      window.location.reload();
    }
  };
  return (
    <StyledButton onClick={handleClick} action={action}>
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
  width: 13.0836vw;
  height: 3.334vw;
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
