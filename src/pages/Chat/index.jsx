import ChatList from '@/pages/Chat/ChatList';
import ChatRoom from '@/pages/Chat/ChatRoom';
import Typography from '@components/ui/Typography/Typography';
import styled from 'styled-components';

const Chat = () => {
  return (
    <PageWrapper>
      <PageTitle>
        <Typography content="냠냠 토크" size="large" />
      </PageTitle>
      <ChatWrapper>
        <ChatList />
        <ChatRoom />
      </ChatWrapper>
    </PageWrapper>
  );
};

export default Chat;

const PageWrapper = styled.div`
  padding: 160px;
  margin: 0 160px;
`;

const PageTitle = styled.div`
  text-align: center;
`;

const ChatWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  min-height: 950px;
  display: flex;
  flex-direction: row;
`;
