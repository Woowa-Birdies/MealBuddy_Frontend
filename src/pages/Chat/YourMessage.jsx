// import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import dayjs from 'dayjs';

const YourMessage = ({ time, message }) => {
  return (
    <Container>
      <MessageContainer>
        <Paragraphy content={message} />
      </MessageContainer>
      <Time>{dayjs(time).format('A hh:mm')}</Time>
    </Container>
  );
};

export default YourMessage;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

const Time = styled.div``;

const MessageContainer = styled.div`
  max-width: 400px;
  padding: 26px;
  background: #f0f0f0;
  border-radius: 26.447px 26.447px 26.447px 0;
  flex-wrap: wrap;
  word-wrap: break-word;
`;
