// import { useState, useRef } from 'react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Avatar } from 'antd';
import Label from '@components/ui/Label/Label';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import useChatStore from '@store/useChatStore';
import chatApi from '@api/biz/chatApi';
import dayjs from 'dayjs';
import { Client } from '@stomp/stompjs';
import { TOKEN_DEV } from '@/token';
// import SockJS from 'sockjs-client';

const ChatListItem = () => {
  const client = useRef(null);
  const { roomList, setRoomList, room, setRoom, setChat } = useChatStore();
  const currentTime = dayjs().toISOString();

  const joinChatRoom = async (roomId, roomName) => {
    console.log(roomId);
    if (client.current) {
      client.current.deactivate();
    }

    const sendingData = {
      roomId,
      lastReadAt: currentTime,
    };
    console.log(sendingData);

    client.current = new Client({
      brokerURL: 'wss://api.woowabirdieside.com/ws',
      connectHeaders: {
        Authorization: `Bearer ${TOKEN_DEV}`,
      },
      skipContentLengthHeader: true,

      onConnect: () => {
        console.log(`${roomId}번 채팅방에 연결되었습니다.`);

        client.current.subscribe(`/sub/chat/status/${roomId}`, (message) => {
          const messageData = JSON.parse(message.body);
          console.log(`Receive:`, messageData);
          // setChat(messageData);
        });

        client.current.send({
          destination: `/pub/chat/status/${roomId}`,
          body: sendingData,
        });
      },
      onStompError: (error) => {
        console.error('STOMP Error:', error);
      },
    });

    console.log('웹소켓 연결 성공');

    client.current.activate();

    // 서버에서 채팅방 정보를 요청
    const roomData = {
      roomId,
      entryAt: currentTime,
      page: 1,
      offset: 100,
    };

    // 과거 채팅 내역 불러오기
    try {
      const res = await chatApi.messages(roomData);
      // console.log('채팅: ', res.data);
      setChat(res.data);
    } catch (error) {
      console.log('Failed to fetch chat: ', error);
    }

    setRoom({
      ...room,
      roomId,
      roomName,
      joinUsers: [
        {
          userId: 4,
          lastReadAt: '2019-11-20T11:20:40Z', // 해당 시간 기반으로 안읽은 메시지 처리
        },
        {
          userId: 5,
          lastReadAt: '2019-11-20T11:30:80Z',
        },
      ],
    });
  };

  const fetchList = async () => {
    try {
      const res = await chatApi.roomList();
      setRoomList(res.data);
    } catch (error) {
      console.error('Failed to fetch chat list:', error);
    }
  };

  useEffect(() => {
    return () => {
      // 클라이언트 연결 해제
      if (client.current) {
        client.current.deactivate();
        console.log('웹소켓 연결이 종료되었습니다.');
      }
    };
  }, []);

  useEffect(() => {
    fetchList();
    // eslint-disable-next-line
  }, []);

  return (
    <ChatListContainer>
      {console.log('현재 채팅방: ', room)}
      {roomList.length > 0 ? (
        roomList.map((chatRoom) => (
          <ItemWrapper
            key={chatRoom.roomId}
            onClick={() => joinChatRoom(chatRoom.roomId, chatRoom.roomName)}
          >
            <ChatListBox>
              <Avatar size="5vw" style={{ marginRight: '5px' }} />
              <ChatRoomInfo>
                <Label content={chatRoom.roomName.split(' ').slice(0, -1).join(' ')} size="large" />
                <Paragraphy content="최근 채팅 내용을 보여줍니다..." size="medium" />
              </ChatRoomInfo>
              <Paragraphy content={chatRoom.userCount} size="small" color="primary" />
            </ChatListBox>
          </ItemWrapper>
        ))
      ) : (
        <Paragraphy content="채팅방이 존재하지 않습니다." size="medium" />
      )}
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
