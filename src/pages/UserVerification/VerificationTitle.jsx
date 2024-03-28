import styled from 'styled-components';
import Label from '@components/ui/Label/Label';
import Typography from '@components/ui/Typography/Typography';

const VerificationTitle = () => {
  return (
    <BoxWrapper>
      <Label content="마지막 인증으로 냠메이트가 되어요!" color="primary" size="large" />
      <Typography content="추가인증 완료하기" size="xl" />
    </BoxWrapper>
  );
};
export default VerificationTitle;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 30vh;
`;
