import Label from '@components/ui/Label/Label';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import styled from 'styled-components';
import { Popover, Button } from 'antd';
import MenuIcon from '@assets/images/svg/menu.svg?react';
import SvgComponent from '@components/ui/Logo/SvgComponent';
import { useState } from 'react';
import useChatStore from '@store/useChatStore';
import ChatWindow from '@/pages/Chat/ChatWindow';
import chatApi from '@api/biz/chatApi';
import exit from '@assets/images/svg/exit.svg';

const ChatRoom = () => {
  const [open, setOpen] = useState(false);
  const { room } = useChatStore();
  const { joinUsers } = room;

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const handleExportUsers = async (targetUserId) => {
    try {
      const res = await chatApi.kick({ roomId: room.roomId, targetUserId });
      console.log('success to kick: ', res);
    } catch (error) {
      console.log('Failed to kick: ', error);
    }
  };

  const handleExitClick = async () => {
    try {
      window.location.reload();
      const res = await chatApi.exit({ roomId: room.roomId });
      console.log('success to exit: ', res);
    } catch (error) {
      console.log('Failed to exit: ', error);
    }
  };

  const renderUsers = () => (
    <>
      {joinUsers.map((user) => (
        <JoinUserContainer key={user.userId}>
          <p>사용자 {user.userId}</p>
          {/* 각 사용자별로 내보내기 버튼을 추가 */}
          <StyledButton onClick={() => handleExportUsers(user.userId)}>내보내기</StyledButton>
        </JoinUserContainer>
      ))}
      <Exit src={exit} onClick={handleExitClick} />
    </>
  );

  return (
    <Wrapper>
      <ChatRoomTop>
        <ChatRoomTitle>
          {room.roomId > 0 ? (
            <Label content={room.roomName} size="large" />
          ) : (
            <Label content="채팅" size="large" />
          )}
          {room.roomId > 0 && room.joinUsers ? (
            <Paragraphy
              content={room.joinUsers.length.toString()}
              size="medium"
              color="contentSecondary"
            />
          ) : null}
        </ChatRoomTitle>

        {room.roomId > 0 ? (
          <CustomPopHover
            content={<>{renderUsers()}</>}
            title="대화 참여자"
            footer="ㅁ"
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
            placement="rightTop"
          >
            <MenuButton>
              <SvgComponent src={MenuIcon} width={15} height={20} />
            </MenuButton>
          </CustomPopHover>
        ) : null}
      </ChatRoomTop>
      {room.roomId > 0 && <ChatWindow />}
    </Wrapper>
  );
};

export default ChatRoom;

const Wrapper = styled.div`
  height: 40vw;
  flex: 0.7;
  border: ${({ theme }) => theme.border.borderTransparent};
  border-left: none;
  border-radius: 0 20px 20px 0;
  display: flex;
  flex-direction: column;
`;

const ChatRoomTop = styled.div`
  position: relative;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ChatRoomTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px;
  gap: 16px;
`;

const CustomPopHover = styled(Popover)`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 20px;
`;

const Exit = styled.img`
  width: 1vw;
  height: 1vw;
  cursor: pointer;
`;

const JoinUserContainer = styled.div`
  height: 3vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  height: 1.8vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffd234 !important;
  border: none !important;
  font-size: 12px;
  border-radius: 10px;

  &:hover {
    background: #000 !important;
    color: #fff !important;
  }

  &:active {
    transform: none !important; // 트랜스폼 효과 제거
    box-shadow: none !important; // 박스 쉐도우 효과 제거
  }
`;

const MenuButton = styled.div`
  cursor: pointer;
`;
