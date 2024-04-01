import styled from 'styled-components';
import Label from '@components/ui/Label/Label';
import CheckButton from '@components/ui/Button/CheckButton';
// import Typography from '@components/ui/Typography/Typography';

const PhoneField = () => {
  return (
    <BoxWrapper>
      <Label content="휴대전화 인증" size="large" />
      <PhoneInput
        type="number"
        maxLength="11"
        onInput={(e) => {
          if (e.target.value.length > e.target.maxLength)
            e.target.value = e.target.value.slice(0, e.target.maxLength);
        }}
        placeholder="휴대전화 번호 입력"
      />
      <CheckButton title="인증 요청" />
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

const PhoneInput = styled.input`
  width: 100%;
  font-size: 0.83vw;
  margin-top: 32px;
  border: none;
  border-bottom: solid #a6a6a6 1px;
  padding: 10px 0px;
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
