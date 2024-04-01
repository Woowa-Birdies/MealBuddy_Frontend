import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styled from 'styled-components';
import Label from '@components/ui/Label/Label';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import deleteIcon from '@/assets/images/svg/CloseBtn.svg';

const NameEdit = () => {
  const { register, setValue, watch } = useForm({
    defaultValues: {
      nickname: 'USER1', // 기본값 설정
    },
  });

  const [isFocused, setIsFocused] = useState(false);
  const nickname = watch('nickname');

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleDelete = () => {
    setValue('nickname', '', { shouldValidate: true });
  };
  return (
    <NameBoxWrapper>
      <Label content="닉네임" size="large" />
      <InputWrapper>
        <Input
          id="nickname"
          {...register('nickname')}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={isFocused ? '' : nickname}
        />
        <ClearBtn onClick={handleDelete} src={deleteIcon} />
      </InputWrapper>
      <Paragraphy content="*닉네임은 1회 수정만 가능합니다." color="primary" size="medium" />
    </NameBoxWrapper>
  );
};

export default NameEdit;

const NameBoxWrapper = styled.div`
  width: 100%;
`;
const InputWrapper = styled.div`
  position: static;
  height: 53px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 21px;
  margin-top: 22px;
`;
const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${(props) => (props.isFocused ? 'black' : '#ccc')}; /* 조건부 스타일 */
  outline: none;
  font-family: Pretendard;
  font-size: 2vw;
  font-style: normal;
  font-weight: 700;

  &:focus {
    border-bottom: 1px solid black;
  }
`;
const ClearBtn = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  right: 30px;
`;
