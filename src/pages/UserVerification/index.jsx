import styled from 'styled-components';
import { Modal, notification } from 'antd';
import { ROUTES } from '@enums/CommonEnum';
import VerificationTitle from '@/pages/UserVerification/VerificationTitle';
import NameField from '@/pages/UserVerification/NameField';
import { useNavigate } from 'react-router-dom';
import IdentificationField from '@/pages/UserVerification/IdentificationField';
import EmailField from '@/pages/UserVerification/EmailField';
import SubmitBtn from '@/components/ui/Button/CompletedButton';
import useVerificationStore from '@/store/useVerificationStore';
import verificationApi from '@api/biz/verificationApi';

const UserVerification = () => {
  const nav = useNavigate();
  const { userData } = useVerificationStore();
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    if (type === 'error') {
      api[type]({
        message: '오류 발생!',
        description: '인증에 실패했습니다. 잠시 후 다시 시도해주세요.🥹',
      });
    } else if (type === 'success') {
      api[type]({
        message: '🎉추가인증 성공🎉',
        description: '냠메이트를 찾으러 가볼까요?',
      });
    }
  };
  const handleClick = async () => {
    const showWarning = (message) => {
      Modal.warning({
        content: message,
        style: { top: '35vh' },
      });
    };

    console.log('확인', userData);
    // 필수 필드 리스트
    const requiredFields = [
      { key: 'nickname', label: '닉네임 입력을' },
      { key: 'registerNumber', label: '주민 번호 입력을' },
      { key: 'email', label: '이메일 입력을' },
      { key: 'verificationHash', label: '이메일 인증을' },
    ];

    // 빈 필드 찾기
    const missingFields = requiredFields.filter((field) => !userData[field.key]);

    // 빈 필드가 있으면 경고 메시지 표시
    if (missingFields.length > 0) {
      const missingFieldNames = missingFields[0].label;
      showWarning(`${missingFieldNames} 완료해주세요`);
      return;
    }

    try {
      await verificationApi.postVerification(userData);
      openNotificationWithIcon('success');
      nav(ROUTES.HOME);
    } catch (error) {
      openNotificationWithIcon('error');
      console.error('Failed to update/create post:', error);
    }
  };
  return (
    <VerificationBox>
      {contextHolder}
      <VerificationTitle />
      <NameField />
      <IdentificationField />
      <EmailField />
      <SubmitBtn title="추가 인증 완료" onClick={handleClick} />
    </VerificationBox>
  );
};
export default UserVerification;

const VerificationBox = styled.div`
  padding: 12.34vw 37vw;
  display: flex;
  flex-direction: column;
`;
