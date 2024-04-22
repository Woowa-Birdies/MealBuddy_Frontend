import styled from 'styled-components';
import { Modal } from 'antd';
import CompletedButton from '@components/ui/Button/CompletedButton';
import { useNavigate } from 'react-router-dom';
import useRecruitStore from '@store/useRecruitStore';
import recruitApi from '@api/biz/recruitApi';
import useUserInfoStore from '@store/useUserInfoStore';

const RecruitCompletedButton = ({ postId }) => {
  const nav = useNavigate();
  const { recruitPost, setRecruitPost } = useRecruitStore();
  const { userId } = useUserInfoStore();

  const showWarning = (message) => {
    Modal.warning({
      content: message,
      style: { top: '35vh' },
    });
  };

  const handleClick = async () => {
    const updatedRecruitPost = { ...recruitPost, userId };
    await setRecruitPost(updatedRecruitPost);
    await console.log('확인', recruitPost);
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
      let response;
      if (postId) {
        const updateData = {
          postId,
          place: recruitPost.place,
          address: recruitPost.address,
          participantTotal: recruitPost.participantTotal, // 예제 데이터에서 변경된 부분
          contents: recruitPost.contents,
          foodTypeTag: recruitPost.foodTypeTag,
          ageTag: recruitPost.ageTag,
          genderTag: recruitPost.genderTag,
          meetAt: recruitPost.meetAt,
          closeAt: recruitPost.closeAt,
        };
        // 수정
        response = await recruitApi.updateRecruit(updateData);
        nav(`/post/${postId}`);
      } else {
        // 등록
        response = await recruitApi.postRecruit(recruitPost);
        const id = response.data;
        nav(`/post/${id}`);
      }
      // 확인용
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        Modal.warning({
          content: error.response.data.message,
          style: { top: '35vh' },
        });
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  return (
    <ButtonContainer>
      <CompletedButton title={postId ? '수정 완료' : '작성 완료'} onClick={handleClick} />
    </ButtonContainer>
  );
};

export default RecruitCompletedButton;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
