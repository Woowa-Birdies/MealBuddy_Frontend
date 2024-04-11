import { useEffect, useState } from 'react';
import styled from 'styled-components';

const TimeLimit = ({ closeAt }) => {
  const calculateTimeLeft = (closeAtParam) => {
    const now = new Date();
    const closeDate = new Date(closeAtParam);
    const timeDiff = closeDate - now;

    if (timeDiff <= 0) {
      return '0일 0시간 0분 0초';
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    return `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(closeAt));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(closeAt));
    }, 1000);

    return () => clearInterval(timer);
  }, [closeAt]);

  return <StyledSpan>남은 모집 시간 : {timeLeft}</StyledSpan>;
};

export default TimeLimit;

const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.headings.small.fontSize};
  font-weight: 400;
  line-height: ${({ theme }) => theme.headings.small.lineHeight};
  color: ${({ theme }) => theme.color.primary};
`;
