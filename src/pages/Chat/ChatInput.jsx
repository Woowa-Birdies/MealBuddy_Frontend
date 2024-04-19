import React, { useState } from 'react';
import styled from 'styled-components';
import send from '@assets/images/svg/send.svg';

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <ChatInputContainer>
      <InputContainer>
        <Input
          type="text"
          value={message}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="메시지 입력..."
        />
        <Img src={send} onClick={handleSend} />
      </InputContainer>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  display: flex;
  padding: 0 10px 10px 10px;
`;

const InputContainer = styled.div`
  flex-grow: 1;
  display: flex;
  border: 1px solid var(--content-borderTransparent, rgba(137, 137, 137, 0.3));
  padding-right: 10px;
  border-radius: 20px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 30px 15px;
  outline: none;
  border-radius: 20px;
`;

const Img = styled.img`
  width: 2.5vw;
  wigth: 2.5vw;
  cursor: pointer;
`;
