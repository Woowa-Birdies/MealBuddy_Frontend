import styled from 'styled-components';
// import dayjs from 'dayjs';
import Typography from '@components/ui/Typography/Typography';
import SelectButton from '@components/ui/Button/SelectButton';
import PlaceField from '@/pages/Recruit/PlaceField';
import MeetAtField from '@/pages/Recruit/MeetAtField';
import CloseAtField from '@/pages/Recruit/CloseAtField';
import ParticipantTotalField from '@/pages/Recruit/ParticipantTotalField';
import DetailField from '@/pages/Recruit/DetailField';

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
        <Typography content="냠냠장소" />
        <PlaceField />
      </Field>
      <Field>
        <Typography content="모임 날짜와 시간" />
        <MeetAtField />
      </Field>
      <Field>
        <Typography content="모집 마감일" />
        <CloseAtField />
      </Field>
      <Field>
        <Typography content="메이트 인원" />
        <ParticipantTotalField />
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
        <Typography content="내용" />
        <DetailField />
      </Field>
    </Form>
  );
};

export default RecruitForm;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 250px;
  gap: 50px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
`;

const ButtonList = styled.div`
  display: flex;
  gap: 12px;
`;
