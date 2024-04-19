import { useState, useRef } from 'react';
// import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Avatar } from 'antd';
import Label from '@components/ui/Label/Label';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import useChatStore from '@store/useChatStore';
// import chatApi from '@api/biz/chatApi';
import dayjs from 'dayjs';
// import { Client } from '@stomp/stompjs';
// import SockJS from 'sockjs-client';

const ChatListItem = () => {
  const { room, setRoom } = useChatStore();
  const client = useRef(null);
  const [chatList, setChatList] = useState([]);
  const currentTime = dayjs().toISOString();
  // const [authToken, setAuthToken] = useState('your-auth-token'); // 인증 토큰

  // useEffect(() => {
  //   client.current = new Client({
  //     webSocketFactory: () => new SockJS('https://api.woowabirdieside.com/'),
  //     reconnectDelay: 5000,
  //     // connectHeaders: {
  //     //   Authorization: `Bearer ${authToken}`, // 헤더에 토큰 추가
  //     // },
  //     debug: (str) => {
  //       console.log('STOMP Debug:', str);
  //     },
  //   });

  //   client.current.onConnect = () => {
  //     console.log('Connected to the server.');

  //     client.current.subscribe(`/sub/chat/status/${room.roomId}`, (message) => {
  //       console.log('Received:', message.body);
  //       // 서버로부터 받은 데이터를 상태에 반영
  //       // setRoom(JSON.parse(message.body));
  //     });
  //   };

  //   client.current.activate();

  //   return () => {
  //     client.current.deactivate();
  //   };
  // }, [room.roomId]);
  // // }, [room.roomId, authToken]);

  const joinChatRoom = async (roomId, roomName) => {
    // 서버에서 채팅방 정보를 요청
    const roomData = {
      roomId,
      lastReadAt: currentTime,
    };
    // 서버로 데이터 보내기
    if (client.current) {
      client.current.send({
        destination: `/sub/chat/status/${roomId}`,

        body: JSON.stringify(roomData),
      });
      console.log('Sent room data to the server:', roomData);
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
      // const res = chatApi.chatList();
      // console.log(res.data);
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
