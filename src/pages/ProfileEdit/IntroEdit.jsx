import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Typography from '@components/ui/Typography/Typography';
import deleteIcon from '@/assets/images/svg/CloseBtn.svg';

const IntroEdit = () => {
  const { setValue } = useForm({
    defaultValues: {
      intro: '이곳에 자기소개를 작성해주세요...', // 기본값 설정
    },
  });

  const handleDelete = () => {
    setValue('intro', '', { shouldValidate: true });
  };
  return (
    <IntroBoxWrapper>
      <Typography content="자기소개" size="medium" />
      <InputWrapper>
        <Textarea id="intro" placeholder="이곳에 자기소개를 작성해주세요.." />
        <ClearBtn onClick={handleDelete} src={deleteIcon} />
      </InputWrapper>
    </IntroBoxWrapper>
  );
};

export default IntroEdit;

const IntroBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8.23vw;
`;
const InputWrapper = styled.div`
  position: static;
  height: 218px;
  width: 100%;
  padding: 26px 29px;
  display: flex;
  flex-direction: row;
  margin-bottom: 21px;
  margin-top: 26px;
  border-radius: 20px;
  background: #fafafa;
  box-shadow: 2px 4px 20px 0px rgba(0, 0, 0, 0.1);
`;
const Textarea = styled.textarea`
  flex-grow: 1;
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: none;
  resize: none;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;
const ClearBtn = styled.img`
  width: 24px;
  height: 24px;
`;
