import React, { useState } from 'react';
import useRecruitStore from '@store/useRecruitStore';
import styled from 'styled-components';
// import dayjs from 'dayjs';
import Typography from '@components/ui/Typography/Typography';
import SelectButton from '@components/ui/Button/SelectButton';
import PlaceField from '@/pages/Recruit/PlaceField';
import MeetAtField from '@/pages/Recruit/MeetAtField';
import CloseAtField from '@/pages/Recruit/CloseAtField';
import ParticipantTotalField from '@/pages/Recruit/ParticipantTotalField';
import ContentsField from '@/pages/Recruit/ContentsField';

const RecruitForm = () => {
  const { setRecruitPost, recruitPost } = useRecruitStore();
  const [selectedFoodType, setSelectedFoodType] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedAge, setSelectedAge] = useState('');

  // 선택된 데이터를 전역 상태에 저장하는 함수
  const handleSelect = (field, value) => {
    if (field === 'foodTypeTag') {
      setSelectedFoodType(value);
    } else if (field === 'genderTag') {
      setSelectedGender(value);
    } else if (field === 'ageTag') {
      setSelectedAge(value);
    }
    setRecruitPost({ ...recruitPost, [field]: value });
  };

  return (
    <Form>
      <Field>
        <Typography content="냠냠유형" />
        <ButtonList>
          {['식사', '카페', '술'].map((item) => (
            <SelectButton
              key={item}
              title={item}
              onClick={() => handleSelect('foodTypeTag', item)}
              selected={selectedFoodType === item}
            />
          ))}
        </ButtonList>
      </Field>
      <Field>
        <Typography content="냠냠장소" />
        <PlaceField />
      </Field>
      <Field>
        <Typography content="모임 날짜" />
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
            <SelectButton
              key={item}
              title={item}
              onClick={() => handleSelect('genderTag', item)}
              selected={selectedGender === item}
            />
          ))}
        </ButtonList>
      </Field>
      <Field>
        <Typography content="메이트 연령대" />
        <ButtonList>
          {['제한없음', '20대', '30대', '40대', '50대'].map((item) => (
            <SelectButton
              key={item}
              title={item}
              onClick={() => handleSelect('ageTag', item)}
              selected={selectedAge === item}
            />
          ))}
        </ButtonList>
      </Field>
      <Field>
        <Typography content="내용" />
        <ContentsField />
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
