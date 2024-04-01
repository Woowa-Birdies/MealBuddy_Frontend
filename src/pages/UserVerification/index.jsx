import styled from 'styled-components';
import VerificationTitle from '@/pages/UserVerification/VerificationTitle';
import NameField from '@/pages/UserVerification/NameField';
import IdentificationField from '@/pages/UserVerification/IdentificationField';
import PhoneField from '@/pages/UserVerification/PhoneField';

const UserVerification = () => {
  return (
    <VerificationBox>
      <VerificationTitle />
      <NameField />
      <IdentificationField />
      <PhoneField />
    </VerificationBox>
  );
};
export default UserVerification;

const VerificationBox = styled.div`
  padding: 25vh 37vw;
  display: flex;
  flex-direction: column;
`;
