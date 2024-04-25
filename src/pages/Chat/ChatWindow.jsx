import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import chatApi from '@api/biz/chatApi';
import useChatStore from '@store/useChatStore';
import dayjs from 'dayjs';
import MyMessage from '@/pages/Chat/MyMessage';
import YourMessage from '@/pages/Chat/YourMessage';
import ChatInput from '@/pages/Chat/ChatInput';
import useUserInfoStore from '@store/useUserInfoStore';

const ChatWindow = () => {
  const { userId } = useUserInfoStore();
  const { chat } = useChatStore();
  const [messages, setMessages] = useState({ content: [] });
  const [sendMessages, setSendMessages] = useState({ content: [] });

  const handleSendMessage = (newMessage) => {
    setSendMessages(newMessage);
  };
  console.log(sendMessages);

  useEffect(() => {
    // 임의로 채팅목록 저장
    // setMessages({
    //   content: [
    //     {
    //       messageId: '0032010',
    //       message: '메시지 입니다.',
    //       sender: 1, // userId
    //       roomId: 4,
    //       createdAt: '2019-12-20T11:20:33.333Z',
    //     },
    //     {
    //       messageId: '0032010',
    //       message:
    //         '반갑습니다.QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ',
    //       sender: 2, // userId
    //       roomId: 4,
    //       createdAt: '2019-12-20T11:20:33.333Z',
    //     },
    //     {
    //       messageId: '0032010',
    //       message:
    //         '안녕하세요.QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ',
    //       sender: 3, // userId
    //       roomId: 4,
    //       createdAt: '2019-12-21T11:20:33.333Z',
    //     },
    //     {
    //       messageId: '0032010',
    //       message: '안녕하세요.',
    //       sender: 2, // userId
    //       roomId: 4,
    //       createdAt: '2019-12-21T11:20:33.333Z',
    //     },
    //     {
    //       messageId: '0032010',
    //       message: '메시지 입니다.',
    //       sender: 2, // userId
    //       roomId: 4,
    //       createdAt: '2019-12-21T11:20:33.333Z',
    //     },
    //     {
    //       messageId: '0032010',
    //       message: '반갑습니다.',
    //       sender: 2, // userId
    //       roomId: 4,
    //       createdAt: '2019-12-25T11:20:33.333Z',
    //     },
    //     {
    //       messageId: '0032010',
    //       message: '안녕하세요.',
    //       sender: 3, // userId
    //       roomId: 4,
    //       createdAt: '2019-12-25T11:20:33.333Z',
    //     },
    //     {
    //       messageId: '0032010',
    //       message: '안녕하세요.',
    //       sender: 3, // userId
    //       roomId: 4,
    //       createdAt: '2019-12-29T11:20:33.333Z',
    //     },
    //     // 여기에 추가 메시지가 이어질 수 있습니다.
    //   ],
    // });
    // console.log(chat);
    setMessages(chat);

    // fetchMessages();
  }, [chat]);

  const fetchMessages = async () => {
    try {
      // const res = await chatApi.messages({
      //   roomId: 4,
      //   entryAt: '2024-04-20T11:20:33.333Z',
      //   page: 1,
      //   offset: 100,
      // });
      // 200 확인
      // setMessages(res);
      // console.log(res);
    } catch (error) {
      console.error('Failed to chat:', error);
    }
  };

  useState(() => {
    fetchMessages();
  }, []);

  const shouldDisplayDate = (index) => {
    if (index === 0) return true;
    const currentDate = dayjs(messages.content[index].createdAt).format('YYYY-MM-DD');
    const previousDate = dayjs(messages.content[index - 1].createdAt).format('YYYY-MM-DD');
    return currentDate !== previousDate;
  };

  return (
    <>
      <ChatWindowContainer>
        {messages.content.map((messageObject, index) => (
          <>
            {shouldDisplayDate(index) && (
              <DateContainer>
                <Date>{dayjs(messageObject.createdAt).format('YYYY년 MM월 DD일')}</Date>
              </DateContainer>
            )}
            {userId === messageObject.sender ? (
              <MyMessageContainer>
                <MyMessage time={messageObject.createdAt} message={messageObject.message} />
              </MyMessageContainer>
            ) : (
              <YourMessageContainer>
                <YourMessage time={messageObject.createdAt} message={messageObject.message} />
              </YourMessageContainer>
            )}
          </>
        ))}
      </ChatWindowContainer>
      <ChatInput onSend={handleSendMessage} />
    </>
  );
};

export default ChatWindow;

const ChatWindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 48px;
  overflow-y: scroll;

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0); /* 기본 상태에서는 투명 */
    border-radius: 6px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(150, 150, 150, 1);
  }
`;

const Date = styled.div`
  padding: 4px 16px;
  border-radius: 10px;
  background: #e0efe0;
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MyMessageContainer = styled.div`
  align-self: flex-end;
`;

const YourMessageContainer = styled.div`
  align-self: flex-start;
`;
