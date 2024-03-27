import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Typography from '@components/ui/Typography/Typography';
import ImageEdit from '@/pages/ProfileEdit/ImageEdit';
import axios from 'axios';
import defaultImg from '@/assets/images/svg/DefaultProfile.svg';
// import PropTypes from 'prop-types';

const ProfileEdit = () => {
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    // 프로필 이미지를 가져오는 API 호출
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('/api/user-profile');
        setProfileImage(response.data.profileImageUrl || defaultImg);
      } catch (error) {
        console.error('프로필 데이터 가져오기 실패', error);
        setProfileImage(defaultImg); // 에러 발생 시 디폴트 이미지 설정
      }
    };

    fetchProfileData();
  }, []);

  const handleImageSelected = (imageFile) => {
    // 이미지 미리보기를 위한 URL 생성
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(imageFile);
  };

  const handleSaveProfile = async () => {
    if (profileImage) {
      const formData = new FormData();
      formData.append('profileImage', profileImage);

      try {
        const response = await axios.post('/api/upload-profile-image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        // 성공 시 처리 로직
        console.log('이미지 업로드 성공: ', response.data);
      } catch (error) {
        // 에러 처리 로직
        console.error('이미지 업로드 실패: ', error);
      }
    }
  };

  return (
    <EditWrapper>
      <TitleWrapper>
        <Typography content="프로필 수정" size="large" />
      </TitleWrapper>
      <ImageEdit existingImageUrl={profileImage} onImageSelected={handleImageSelected} />
      <SaveBtn onClick={handleSaveProfile}>저장 완료</SaveBtn>
    </EditWrapper>
  );
};

export default ProfileEdit;

const EditWrapper = styled.div`
  width: 100%;
  padding: 0px 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin: 160px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SaveBtn = styled.button``;
