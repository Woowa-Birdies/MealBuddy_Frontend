// import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import dayjs from 'dayjs';

const MyMessage = ({ time, message }) => {
  return (
    <Container>
      <Time>{dayjs(time).format('A hh:mm')}</Time>
      <MessageContainer>
        <Paragraphy content={message} />
      </MessageContainer>
    </Container>
  );
};

export default MyMessage;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

const Time = styled.div``;

const MessageContainer = styled.div`
  max-width: 400px;
  padding: 26px;
  background: #e0efe0;
  border-radius: 26.447px 26.447px 0 26.447px;
  flex-wrap: wrap;
  word-wrap: break-word;
`;
