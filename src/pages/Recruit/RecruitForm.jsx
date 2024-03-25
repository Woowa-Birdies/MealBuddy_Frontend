import styled from 'styled-components';
// import dayjs from 'dayjs';
import Typography from '@components/ui/Typography/Typography';
import SelectButton from '@components/ui/Button/SelectButton';

const RecruitForm = () => {
  return (
    <Form>
      <Field>
        <Typography content="냠냠유형" />
        <ButtonList>
          <SelectButton title="식사" />
          <SelectButton title="간식" />
          <SelectButton title="커피" />
          <SelectButton title="술" />
        </ButtonList>
      </Field>
      <Field>
        <Typography content="날짜와 시간" />
        <input placeholder="날짜와 시간을 입력해주세요" />
      </Field>
      <Field>
        <Typography content="냠냠장소" />
        <input placeholder="장소을 입력해주세요" />
      </Field>
      <Field>
        <Typography content="메이트 인원" />
        <input placeholder="인원을 입력해주세요" />
      </Field>
      <Field>
        <Typography content="성별" />
        <ButtonList>
          <SelectButton title="남자만" />
          <SelectButton title="여자만" />
          <SelectButton title="남녀무관" />
        </ButtonList>
      </Field>
      <Field>
        <Typography content="메이트 연령대" />
        <ButtonList>
          <SelectButton title="20대" />
          <SelectButton title="30대" />
          <SelectButton title="40대" />
          <SelectButton title="50대 이상" />
        </ButtonList>
      </Field>
      <Field>
        <Typography content="예상 비용" />
        <input placeholder="예상 비용을 입력해주세요" />
      </Field>
      <Field>
        <Typography content="내용" />
        <input placeholder="내용을 입력해주세요" />
      </Field>
    </Form>
  );
};

export default RecruitForm;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 200px;
  gap: 60px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const ButtonList = styled.div`
  display: flex;
  gap: 12px;
`;
