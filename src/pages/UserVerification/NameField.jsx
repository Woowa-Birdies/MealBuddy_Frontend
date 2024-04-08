import styled from 'styled-components';
import Label from '@components/ui/Label/Label';
// import Typography from '@components/ui/Typography/Typography';

const NameField = () => {
  return (
    <BoxWrapper>
      <Label content="이름" size="large" />
      <NameInput type="text" placeholder="이름 입력" />
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
