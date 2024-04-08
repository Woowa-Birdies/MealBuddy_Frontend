import styled from 'styled-components';
import VerificationTitle from '@/pages/UserVerification/VerificationTitle';
import NameField from '@/pages/UserVerification/NameField';
import IdentificationField from '@/pages/UserVerification/IdentificationField';
import PhoneField from '@/pages/UserVerification/PhoneField';
import SubmitBtn from '@/components/ui/Button/CompletedButton';

const UserVerification = () => {
  return (
    <VerificationBox>
      <VerificationTitle />
      <NameField />
      <IdentificationField />
      <PhoneField />
      <SubmitBtn title="추가 인증 완료" />
    </VerificationBox>
  );
};
export default UserVerification;

const VerificationBox = styled.div`
  padding: 12.34vw 37vw;
  display: flex;
  flex-direction: column;
`;
