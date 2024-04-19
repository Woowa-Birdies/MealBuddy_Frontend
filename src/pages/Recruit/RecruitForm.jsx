import React, { useEffect } from 'react';
import useRecruitStore from '@store/useRecruitStore';
import styled from 'styled-components';
// import dayjs from 'dayjs';
import Typography from '@components/ui/Typography/Typography';
import SelectButton from '@components/ui/Button/SelectButton';
import recruitApi from '@api/biz/recruitApi';
import PlaceField from '@/pages/Recruit/PlaceField';
import MeetAtField from '@/pages/Recruit/MeetAtField';
import CloseAtField from '@/pages/Recruit/CloseAtField';
import ParticipantTotalField from '@/pages/Recruit/ParticipantTotalField';
import ContentsField from '@/pages/Recruit/ContentsField';

const RecruitForm = ({ postId }) => {
  const { setRecruitPost, recruitPost } = useRecruitStore();

  // 선택된 데이터를 전역 상태에 저장하는 함수
  const handleSelect = (field, value) => {
    setRecruitPost({ ...recruitPost, [field]: value });
  };

  useEffect(() => {
    if (postId) {
      const fetchPost = async () => {
        try {
          const res = await recruitApi.getEdit({ postId });
          setRecruitPost(res.data);
        } catch (error) {
          console.error('Failed to fetch post:', error);
        }
      };

      fetchPost();
    }
  }, [postId, setRecruitPost]);

  return (
    <Form>
      <Field>
        <Typography content="냠냠 유형" />
        <ButtonList>
          {['식사', '카페', '술'].map((item) => (
            <SelectButton
              key={item}
              title={item}
              onClick={() => handleSelect('foodTypeTag', item)}
              selected={recruitPost.foodTypeTag === item}
            />
          ))}
        </ButtonList>
      </Field>
      <Field>
        <Typography content="냠냠 장소" />
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
              selected={recruitPost.genderTag === item}
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
              selected={recruitPost.ageTag === item}
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
