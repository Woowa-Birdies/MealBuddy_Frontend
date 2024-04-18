import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Label from '@components/ui/Label/Label';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import useStore from '@/store/useVerificationStore';
// import Typography from '@components/ui/Typography/Typography';

const IdentificationField = () => {
  const setUserData = useStore((state) => state.setUserData);
  const [firstPart, setFirstPart] = useState('');
  const [secondPart, setSecondPart] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setIsCompleted(firstPart.length === 6 && secondPart.length === 1);
    setUserData('registerNumber', `${firstPart}-${secondPart}`);
  }, [firstPart, secondPart, setUserData]);

  return (
    <BoxWrapper>
      <Label content="주민등록번호" size="large" />
      <IdBox>
        <FirstInput
          type="number"
          maxLength={6}
          value={firstPart}
          onInput={(e) => {
            if (e.target.value.length > e.target.maxLength)
              e.target.value = e.target.value.slice(0, e.target.maxLength);
          }}
          onChange={(e) => setFirstPart(e.target.value)}
          placeholder="주민등록번호 앞자리"
        />
        <Paragraphy content="-" size="medium" />
        <SecondInput
          type="number"
          maxLength={1}
          value={secondPart}
          onInput={(e) => {
            if (e.target.value.length > e.target.maxLength)
              e.target.value = e.target.value.slice(0, e.target.maxLength);
          }}
          onChange={(e) => setSecondPart(e.target.value)}
        />
        <Paragraphy
          content="******"
          size="xl"
          color={isCompleted ? 'contentPrimary' : 'contentTertiary'}
        />
      </IdBox>
    </BoxWrapper>
  );
};
export default IdentificationField;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 60px;
`;
const IdBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 32px;
  gap: 0.57vw;
`;
const FirstInput = styled.input`
  width: 11.2vw;
  font-size: 0.83vw;
  border: none;
  border-bottom: solid #a6a6a6 1px;
  padding: 10px 0px;
  background: none;
  transition: border-bottom-color 0.3s ease;
  margin-right: 1.41vw;
  &:focus {
    border-bottom: solid black 1px;
    outline: none;
  }
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
`;

const SecondInput = styled.input`
  width: 2.08vw;
  height: 2.08vw;
  font-size: 0.83vw;
  border: solid #a6a6a6 1px;
  padding: 10px 0px;
  background: none;
  text-align: center;
  transition: border-color 0.3s ease;
  margin-left: 1.41vw;
  &:focus {
    border: solid black 1px;
    outline: none;
  }
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
`;
