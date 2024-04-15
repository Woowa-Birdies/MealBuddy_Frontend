import Typography from '@components/ui/Typography/Typography';
import styled from 'styled-components';

const Chat = () => {
  return (
    <PageWrapper>
      <ChatTitle>
        <Typography content="냠냠 토크" size="large" />
      </ChatTitle>
      <ChatWrapper>
        <ChatList>123</ChatList>
        <ChatType>123</ChatType>
      </ChatWrapper>
    </PageWrapper>
  );
};

export default Chat;

const PageWrapper = styled.div`
  width: 100%;
  padding: 120px 120px 120px 120px;
`;

const ChatTitle = styled.div`
  text-align: center;
`;

const ChatWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  height: 950px;
  display: flex;
  flex-direction: row;
`;

const ChatList = styled.div`
  flex: 0.3;
  border: ${({ theme }) => theme.border.borderTransparent};
  border-radius: 20px 0 0 20px;
  height: 100%;
`;

const ChatType = styled.div`
  flex: 0.7;
  border: ${({ theme }) => theme.border.borderTransparent};
  border-radius: 0 20px 20px 0;
  height: 100%;
`;
