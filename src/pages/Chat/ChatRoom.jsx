import Label from '@components/ui/Label/Label';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import styled from 'styled-components';
import { Popover } from 'antd';
import MenuIcon from '@assets/images/svg/menu.svg?react';
import SvgComponent from '@components/ui/Logo/SvgComponent';
import { useState } from 'react';
import useChatStore from '@store/useChatStore';
import ChatWindow from '@/pages/Chat/ChatWindow';

const ChatRoom = () => {
  const [open, setOpen] = useState(false);
  const { room } = useChatStore();

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <Wrapper>
      <ChatRoomTop>
        <ChatRoomTitle>
          <Label content={room.roomName} size="large" />
          <Paragraphy content={room.joinUsers.length} size="medium" color="contentSecondary" />
        </ChatRoomTitle>
        <CustomPopHover
          content={<>123</>}
          title="대화 참여자"
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}
          placement="rightTop"
        >
          <MenuButton>
            <SvgComponent src={MenuIcon} width={15} height={20} />
          </MenuButton>
        </CustomPopHover>
      </ChatRoomTop>
      <ChatWindow />
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

const MenuButton = styled.div`
  cursor: pointer;
`;
