import styled from 'styled-components';
import { Modal } from 'antd';
import CompletedButton from '@components/ui/Button/CompletedButton';
import { useNavigate } from 'react-router-dom';
import useRecruitStore from '@store/useRecruitStore';
import recruitApi from '@api/biz/recruitApi';

const RecruitCompletedButton = () => {
  const nav = useNavigate();
  const { recruitPost } = useRecruitStore();

  const showWarning = (message) => {
    Modal.warning({
      content: message,
      style: { top: '35vh' },
    });
  };

  const handleClick = async () => {
    console.log('확인', recruitPost);
    // 필수 필드 리스트
    const requiredFields = [
      { key: 'foodTypeTag', label: '식사 유형을' },
      { key: 'place', label: '식사 장소를' },
      { key: 'meetAt', label: '모임 날짜를' },
      { key: 'closeAt', label: '모집 마감일을' },
      { key: 'genderTag', label: '성별을' },
      { key: 'ageTag', label: '연령대를' },
    ];

    // 빈 필드 찾기
    const missingFields = requiredFields.filter((field) => !recruitPost[field.key]);

    // 빈 필드가 있으면 경고 메시지 표시
    if (missingFields.length > 0) {
      const missingFieldNames = missingFields[0].label;
      showWarning(`${missingFieldNames} 선택해주세요`);
      return;
    }

    // post 요청
    try {
      const response = await recruitApi.postRecruit(recruitPost);
      // 확인용
      const postId = response.data;
      nav(`/post/${postId}`);
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };

  return (
    <ButtonContainer>
      <CompletedButton title="작성 완료" onClick={handleClick} />
    </ButtonContainer>
  );
};

export default RecruitCompletedButton;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
