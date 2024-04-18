import { useState } from 'react';
import styled from 'styled-components';
import Label from '@components/ui/Label/Label';
import emailApi from '@api/biz/verificationApi';
import CheckBtn from '@components/ui/Button/SelectButton';
import useStore from '@/store/useVerificationStore';

const EmailField = () => {
  const now = 2;
  const setUserData = useStore((state) => state.setUserData);
  const [emailSendError, setEmailSendError] = useState('');
  const [tokenSendError, setTokenSendError] = useState('');
  const [showVerificationInput, setShowVerificationInput] = useState(false);
  const [email, setEmail] = useState('');
  const [tokenNumber, setTokenNumber] = useState('');
  const [timeLeft, setTimeLeft] = useState(300);
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [emailCheckStatus, setEmailCheckStatus] = useState(false);
  const [tokenCheckStatus, setTokenCheckStatus] = useState(false);

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

  const PostEmailVerification = async () => {
    try {
      const response = await emailApi.getEmailVerification({ toEmail: email, userId: now });
      if (response.status === 200) {
        setIsRequestSent(true);
        setEmailCheckStatus(true);
        startTimer();
        setShowVerificationInput(true);
        setEmailSendError(`인증 메일 전송 성공! 메일함을 확인해주세요.`);
      } else if (response.status === 400) {
        setIsRequestSent(false);
        setShowVerificationInput(false);
        setEmailCheckStatus(false);
        setEmailSendError(`이미 가입된 이메일입니다.`);
      }
    } catch (error) {
      setIsRequestSent(false);
      setEmailCheckStatus(false);
      setShowVerificationInput(false);
      setEmailSendError('이미 전송된 이메일입니다. 잠시 후 다시 시도해주세요.');
    }
  };

  const checkToken = async () => {
    const PropDate = {
      userId: now,
      token: tokenNumber,
    };
    try {
      const response = await emailApi.checkEmailToken(PropDate);
      if (response.status === 200) {
        setTokenCheckStatus(true);
        setUserData('email', email);
        setUserData('verificationHash', response.data);
        setTokenSendError(`인증 성공`);
      } else if (response.status === 400) {
        setTokenCheckStatus(false);
        setTokenSendError(`올바르지 않은 인증번호입니다.`);
      }
    } catch (error) {
      setTokenCheckStatus(false);
      setTokenSendError(error.message); // 오류 발생 시 에러 메시지 설정
    }
  };

  /* 이메일 형식 확인 */
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  const emailCheck = (emailFormality) => {
    return emailRegEx.test(emailFormality); // 이메일 형식 체크 -> True, False 반환
  };

  return (
    <BoxWrapper>
      <Label content="이메일 인증" size="large" />
      <InnerBox>
        <PhoneInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일 주소 입력"
        />
        <CheckBtn
          onClick={PostEmailVerification}
          title="인증 요청"
          type="request"
          disabled={email.length === 0 || !emailCheck(email) || isRequestSent}
        />
      </InnerBox>
      <Message checkStatus={emailCheckStatus}>{emailSendError}</Message>
      {showVerificationInput && (
        <>
          <InnerBox>
            <PhoneInput
              type="number"
              maxLength="6"
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength)
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
              }}
              value={tokenNumber}
              onChange={(e) => setTokenNumber(e.target.value)}
              placeholder="인증번호 입력"
            />
            <Timer>{`${Math.floor(timeLeft / 60)
              .toString()
              .padStart(2, '0')}:${(timeLeft % 60).toString().padStart(2, '0')}`}</Timer>
            <CheckBtn
              title="인증 완료"
              disabled={tokenNumber.length !== 6}
              type="response"
              onClick={checkToken}
            />
          </InnerBox>
          <Message checkStatus={tokenCheckStatus}>{tokenSendError}</Message>
        </>
      )}
    </BoxWrapper>
  );
};
export default EmailField;

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
const Message = styled.div`
  color: ${(props) => (props.checkStatus ? 'green' : 'red')};
`;
