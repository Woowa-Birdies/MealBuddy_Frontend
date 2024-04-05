import useRecruitStore from '@store/useRecruitStore';
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
  const { setRecruitPost, recruitPost } = useRecruitStore();

  // 선택된 데이터를 전역 상태에 저장하는 함수
  const handleSelect = (field, value) => {
    setRecruitPost({ ...recruitPost, [field]: value });
  };

  return (
    <Form>
      <Field>
        <Typography content="냠냠유형" />
        <ButtonList>
          {['식사', '간식', '커피', '술'].map((item) => (
            <SelectButton key={item} title={item} onClick={() => handleSelect('foodType', item)} />
          ))}
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
          {['남자만', '여자만', '남녀무관'].map((item) => (
            <SelectButton key={item} title={item} onClick={() => handleSelect('gender', item)} />
          ))}
        </ButtonList>
      </Field>
      <Field>
        <Typography content="메이트 연령대" />
        <ButtonList>
          {['20대', '30대', '40대', '50대 이상'].map((item) => (
            <SelectButton key={item} title={item} onClick={() => handleSelect('ageRange', item)} />
          ))}
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
