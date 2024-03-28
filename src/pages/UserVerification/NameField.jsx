import styled from 'styled-components';
import Label from '@components/ui/Label/Label';
// import Typography from '@components/ui/Typography/Typography';

const NameField = () => {
  return (
    <BoxWrapper>
      <Label content="이름" size="large" />
    </BoxWrapper>
  );
};
export default NameField;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 30vh;
`;
