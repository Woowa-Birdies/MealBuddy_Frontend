import { useState } from 'react';
import styled from 'styled-components';
import Label from '@components/ui/Label/Label';
import CheckBtn from '@components/ui/Button/SelectButton';
import emailApi from '@api/biz/verificationApi';
import useStore from '@/store/useVerificationStore';
import useUserInfoStore from '@store/useUserInfoStore';
// import Typography from '@components/ui/Typography/Typography';

const NameField = () => {
  const setUserData = useStore((state) => state.setUserData);
  const [errorMesage, setErrorMesage] = useState('');
  const [nickname, setNickname] = useState('');
  const [checkStatus, setCheckStatus] = useState(false);
  const { userProfile } = useUserInfoStore();

  const handleNicknameInput = (event) => {
    setNickname(event.target.value);
    setErrorMesage('');
  };

  const checkNicknameAvailability = async () => {
    try {
      const response = await emailApi.checkNickname(nickname);
      if (response.status === 200) {
        setCheckStatus(true);
        setUserData('nickname', nickname);
        setUserData('userId', userProfile.userId);
        setErrorMesage(`사용 가능한 닉네임입니다.`);
      } else if (response.status === 400) {
        setCheckStatus(false);
        setErrorMesage(`${nickname}는 이미 존재하는 닉네임입니다.`);
      }
    } catch (error) {
      setCheckStatus(false);
      setErrorMesage(error.message); // 오류 발생 시 에러 메시지 설정
    }
  };

  return (
    <BoxWrapper>
      <Label content="닉네임" size="large" />
      <InnerBox>
        <NameInput
          type="text"
          placeholder="사용하실 닉네임을 입력하세요"
          value={nickname}
          onChange={handleNicknameInput}
        />
        <CheckBtn
          title="중복 확인"
          type="request"
          disabled={nickname.length === 0}
          onClick={checkNicknameAvailability}
        />
      </InnerBox>
      <Message checkStatus={checkStatus}>{errorMesage}</Message>
    </BoxWrapper>
  );
};
export default NameField;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 60px;
`;

const NameInput = styled.input`
  width: 100%;
  font-size: 0.83vw;
  margin-top: 32px;
  border: none;
  border-bottom: solid #a6a6a6 1px;
  padding: 10px 0px;
  background: none;
  transition: border-bottom-color 0.3s ease;

  &:focus {
    border-bottom: solid black 1px;
    outline: none;
  }
`;

const InnerBox = styled.div`
  width: 100%;
  position: relative !important;
  display: flex;
  flex-direction: row;
  margin-top: 32px;
`;

const Message = styled.div`
  color: ${(props) => (props.checkStatus ? 'green' : 'red')};
`;
