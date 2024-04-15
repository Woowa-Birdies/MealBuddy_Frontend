import styled from 'styled-components';
import { Avatar } from 'antd';
import Label from '@components/ui/Label/Label';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';

const ChatListItem = () => {
  return (
    <ItemWrapper>
      <ChatListBox>
        <Avatar size={51} icon={<>1</>} />
        <ChatRoomInfo>
          <Label content="모임 제목" size="large" />
          <Paragraphy content="최근 채팅 내용을 보여줍니다. . . ." size="medium" />
        </ChatRoomInfo>
        <Paragraphy content="7" size="small" color="primary" />
      </ChatListBox>
      <ChatListBox>
        <Avatar size={51} icon={<>1</>} />
        <ChatRoomInfo>
          <Label content="모임 제목" size="large" />
          <Paragraphy content="최근 채팅 내용을 보여줍니다. . . ." size="medium" />
        </ChatRoomInfo>
        <Paragraphy content="7" size="small" />
      </ChatListBox>
      <ChatListBox>
        <Avatar size={51} icon={<>1</>} />
        <ChatRoomInfo>
          <Label content="모임 제목" size="large" />
          <Paragraphy content="최근 채팅 내용을 보여줍니다. . . ." size="medium" />
        </ChatRoomInfo>
        <Paragraphy content="7" size="small" />
      </ChatListBox>
    </ItemWrapper>
  );
};

export default ChatListItem;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const ChatListBox = styled.div`
  height: 84px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color.whiteSmoke};
  display: flex;
  align-items: center;
  padding: 10px 15px;
  justify-content: space-between;
  cursor: pointer;
  & * {
    cursor: pointer;
  }
`;

const ChatRoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0.8;
`;
