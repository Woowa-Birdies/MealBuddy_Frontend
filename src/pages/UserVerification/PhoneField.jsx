import { useState } from 'react';
import styled from 'styled-components';
import Label from '@components/ui/Label/Label';
import CheckBtn from '@components/ui/Button/SelectButton';

const PhoneField = () => {
  const [showVerificationInput, setShowVerificationInput] = useState(false);
  const [phone, setPhone] = useState('');
  const [vetificationNumber, setVerificationNumber] = useState('');
  const [timeLeft, setTimeLeft] = useState(300);

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const handleRequestVerificationModified = () => {
    setShowVerificationInput(true);
    startTimer();
  };
  return (
    <BoxWrapper>
      <Label content="휴대전화 인증" size="large" />
      <InnerBox>
        <PhoneInput
          type="number"
          maxLength="11"
          onInput={(e) => {
            if (e.target.value.length > e.target.maxLength)
              e.target.value = e.target.value.slice(0, e.target.maxLength);
          }}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="휴대전화 번호 입력"
        />
        <CheckBtn
          onClick={handleRequestVerificationModified}
          title="인증 요청"
          type="request"
          disabled={phone.length !== 11}
        />
      </InnerBox>
      {showVerificationInput && (
        <InnerBox>
          <PhoneInput
            type="number"
            maxLength="4"
            onInput={(e) => {
              if (e.target.value.length > e.target.maxLength)
                e.target.value = e.target.value.slice(0, e.target.maxLength);
            }}
            value={vetificationNumber}
            onChange={(e) => setVerificationNumber(e.target.value)}
            placeholder="인증번호 입력"
          />
          <Timer>{`${Math.floor(timeLeft / 60)
            .toString()
            .padStart(2, '0')}:${(timeLeft % 60).toString().padStart(2, '0')}`}</Timer>
          <CheckBtn title="인증 완료" disabled={vetificationNumber.length !== 4} type="response" />
        </InnerBox>
      )}
    </BoxWrapper>
  );
};
export default PhoneField;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 60px;
`;
const InnerBox = styled.div`
  width: 100%;
  position: relative !important;
  display: flex;
  flex-direction: row;
  margin-top: 32px;
`;
const PhoneInput = styled.input`
  width: 100%;
  font-size: 0.83vw;
  border: none;
  border-bottom: solid #a6a6a6 1px;
  padding: 0.52vw 0px;
  background: none;
  transition: border-bottom-color 0.3s ease;

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }

  &:focus {
    border-bottom: solid black 1px;
    outline: none;
  }
`;

const Timer = styled.div`
  width: auto;
  position: absolute;
  right: 5.99vw;
  font-size: 0.833vw;
  font-weight: 400;
  line-height: 1.25vw;
  color: ${({ theme }) => {
    return theme.color.secondary;
  }};
`;
