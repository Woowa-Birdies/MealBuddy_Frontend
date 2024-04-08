import Label from '@components/ui/Label/Label';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import styled from 'styled-components';
import { Popover } from 'antd';
import MenuIcon from '@assets/images/svg/menu.svg?react';
import SvgComponent from '@components/ui/Logo/SvgComponent';

const ChatRoom = () => {
  return (
    <Wrapper>
      <ChatRoomTop>
        <ChatRoomTitle>
          <Label content="모임제목" size="large" />
          <Paragraphy content="7" size="medium" color="contentSecondary" />
        </ChatRoomTitle>
        <Popover content={<>123</>} title="Title" trigger="click">
          <SvgComponent src={MenuIcon} width={18} height={18.72} />
        </Popover>
      </ChatRoomTop>
    </Wrapper>
  );
};

export default ChatRoom;

const Wrapper = styled.div`
  flex: 0.7;
  border: ${({ theme }) => theme.border.borderTransparent};
  border-radius: 0 20px 20px 0;
  height: 100%;
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
  gap: 16px;
`;
