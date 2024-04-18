import ChatListItem from '@/pages/Chat/ChatListItem';
import Label from '@components/ui/Label/Label';
import styled from 'styled-components';

const ChatList = () => {
  return (
    <Wrapper>
      <ChatListTitle>
        <Label content="채팅목록" size="large" />
      </ChatListTitle>
      <ChatListItem />
    </Wrapper>
  );
};

export default ChatList;

const Wrapper = styled.div`
  height: 40vw;
  flex: 0.3;
  border: ${({ theme }) => theme.border.borderTransparent};
  border-radius: 20px 0 0 20px;
  display: flex;
  flex-direction: column;
  padding: 0px 22px;
`;

const ChatListTitle = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
`;
