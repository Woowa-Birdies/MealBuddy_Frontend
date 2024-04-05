import React from 'react';
import styled from 'styled-components';
import minus from '@/assets/images/svg/minus.svg';
import plus from '@/assets/images/svg/plus.svg';
import useRecruitStore from '@store/useRecruitStore';

const ParticipantTotalField = () => {
  const { recruitPost, setRecruitPost } = useRecruitStore();

  const incrementParticipants = () => {
    setRecruitPost({ ...recruitPost, participantTotal: recruitPost.participantTotal + 1 });
  };

  const decrementParticipants = () => {
    if (recruitPost.participantTotal > 0) {
      setRecruitPost({ ...recruitPost, participantTotal: recruitPost.participantTotal - 1 });
    }
  };

  return (
    <Container>
      <Button src={minus} onClick={decrementParticipants} alt="감소" />
      <Total>{recruitPost.participantTotal}</Total>
      <Button src={plus} onClick={incrementParticipants} alt="증가" />
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
