import { useState } from 'react';
import styled from 'styled-components';
import { Avatar } from 'antd';
import Label from '@components/ui/Label/Label';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import useChatStore from '@store/useChatStore';
import chatApi from '@api/biz/chatApi';
import dayjs from 'dayjs';

const ChatListItem = () => {
  const { room, setRoom } = useChatStore();
  const [chatList, setChatList] = useState([]);
  const currentTime = dayjs().toISOString();

  const joinChatRoom = async (roomId, roomName) => {
    // 서버에서 채팅방 정보를 요청
    const roomData = {
      roomId,
      lastReadAt: currentTime,
    };
    const res = await chatApi.chatRoomInfo(roomData);
    console.log(res);
    setRoom({ ...room, roomId, roomName, joinUsers: res.joinUsers });
  };

  const fetchList = async () => {
    try {
      // const res = await chatApi.chatList();
      // setChatList(res);
      // console.log(res);

      // 임의로 채팅목록 저장
      setChatList([
        {
          roomId: 4,
          roomName: '서울역 맛집 탐방',
        },
        {
          roomId: 5,
          roomName: '서울역 맛집 탐방2',
        },
      ]);
    } catch (error) {
      console.error('Failed to fetch chat list:', error);
    }
  };

  useState(() => {
    fetchList();
  }, []);

  return (
    <ChatListContainer>
      {chatList.map((chatRoom) => (
        <ItemWrapper
          key={chatRoom.roomId}
          onClick={() => joinChatRoom(chatRoom.roomId, chatRoom.roomName)}
        >
          <ChatListBox>
            <Avatar size="5vw" />
            <ChatRoomInfo>
              <Label content={chatRoom.roomName} size="large" />
              <Paragraphy content="최근 채팅 내용을 보여줍니다..." size="medium" />
            </ChatRoomInfo>
            {/* <Paragraphy content="7" size="small" color="primary" /> */}
          </ChatListBox>
        </ItemWrapper>
      ))}
    </ChatListContainer>
  );
};

export default ChatListItem;

const ChatListContainer = styled.div`
  height: 40vw;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0); /* 기본 상태에서는 투명 */
    border-radius: 6px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(150, 150, 150, 1);
  }
`;

const ItemWrapper = styled.div`
  padding-left: 10px;
  margin-bottom: 16px;
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
