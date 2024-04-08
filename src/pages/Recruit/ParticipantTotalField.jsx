import React, { useState } from 'react';
import styled from 'styled-components';
import minus from '@/assets/images/svg/minus.svg';
import plus from '@/assets/images/svg/plus.svg';

const ParticipantTotalField = () => {
  const [participants, setParticipants] = useState(0);

  const incrementParticipants = () => {
    setParticipants(participants + 1);
  };

  const decrementParticipants = () => {
    if (participants > 0) {
      setParticipants(participants - 1);
    }
  };

  return (
    <Container>
      <Button src={minus} onClick={decrementParticipants} />
      <Total>{participants}</Total>
      <Button src={plus} onClick={incrementParticipants} />
      <span style={{ marginLeft: '7px', fontSize: '16px' }}>명</span>
    </Container>
  );
};

export default ParticipantTotalField;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Button = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const Total = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.headings.small.fontSize};
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;
