import { useState } from 'react';
import styled from 'styled-components';
import { Avatar } from 'antd';
import Label from '@components/ui/Label/Label';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import chatApi from '@api/biz/chatApi';

const ChatListItem = () => {
  const [chatList, setChatList] = useState({});

  const fetchList = async () => {
    try {
      const res = await chatApi.chatList();
      setChatList(res);
      console.log(res);
    } catch (error) {
      console.error('Failed to fetch chat list:', error);
    }
  };

  useState(() => {
    fetchList();
  }, []);

  return (
    <>
      {chatList.map((chatRoom) => (
        <ItemWrapper key={chatRoom.roomId}>
          <ChatListBox>
            <Avatar size={51} icon={<>1</>} />
            <ChatRoomInfo>
              <Label content={chatRoom.roomName} size="large" />
              <Paragraphy content="최근 채팅 내용을 보여줍니다. . . ." size="medium" />
            </ChatRoomInfo>
            <Paragraphy content="7" size="small" color="primary" />
          </ChatListBox>
        </ItemWrapper>
      ))}
    </>
  );
};

export default ChatListItem;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
