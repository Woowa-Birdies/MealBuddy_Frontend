import { useState } from 'react';
// import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Typography from '@components/ui/Typography/Typography';
import ImageEdit from '@/pages/ProfileEdit/ImageEdit';
// import axios from 'axios';
import NameEdit from '@/pages/ProfileEdit/NameEdit';
import IntroEdit from '@/pages/ProfileEdit/IntroEdit';
import LocationEdit from '@/pages/ProfileEdit/LocationEdit';
import defaultImg from '@/assets/images/svg/DefaultProfile.svg';
import SaveBtn from '@/components/ui/Button/CompletedButton';
// import PropTypes from 'prop-types';

const ProfileEdit = () => {
  const [profileImage, setProfileImage] = useState(defaultImg);

  // useEffect(() => {
  //   // 프로필 이미지를 가져오는 API 호출
  //   const fetchProfileData = async () => {
  //     try {
  //       const response = await axios.get('/api/user-profile');
  //       setProfileImage(response.data.profileImageUrl || defaultImg);
  //     } catch (error) {
  //       console.error('프로필 데이터 가져오기 실패', error);
  //       setProfileImage(defaultImg);
  //     }
  //   };

  //   fetchProfileData();
  // }, []);

  const handleImageSelected = (imageFile) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(imageFile);
  };

  const handleSaveProfile = async () => {
    // if (profileImage) {
    //   const formData = new FormData();
    //   formData.append('profileImage', profileImage);
    //   try {
    //     const response = await axios.post('/api/upload-profile-image', formData, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //       },
    //     });
    //     console.log('이미지 업로드 성공: ', response.data);
    //   } catch (error) {
    //     console.error('이미지 업로드 실패: ', error);
    //   }
    // }
  };

  return (
    <EditWrapper>
      <TitleWrapper>
        <Typography content="프로필 수정" size="large" />
      </TitleWrapper>
      <InfoBox>
        <ImageEdit existingImageUrl={profileImage} onImageSelected={handleImageSelected} />
        <NameEdit />
      </InfoBox>
      <IntroEdit />
      <LocationEdit title="활동 지역 설정" />
      <SaveBtn title="수정 완료" onClick={handleSaveProfile} />
    </EditWrapper>
  );
};

export default ProfileEdit;

const EditWrapper = styled.div`
  width: 100%;
  padding: 0px 28vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 412px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin: 9vw 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 3.3rem;
  align-items: center;
  margin-bottom: 108px;
`;
