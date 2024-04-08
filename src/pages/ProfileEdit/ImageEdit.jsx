import React, { useState } from 'react';
import styled from 'styled-components';
import cameraIcon from '@/assets/images/svg/CameraIcon.svg'; // 카메라 아이콘 경로

const ImageEdit = ({ existingImageUrl, onImageSelected }) => {
  const [imagePreview, setImagePreview] = useState(existingImageUrl);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && onImageSelected) {
      onImageSelected(file); // 부모 컴포넌트로 파일 데이터 전달
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result); // 이미지 미리보기
    };
    reader.readAsDataURL(file);
  };

  return (
    <ProfileImageWrapper>
      <ProfileImage src={imagePreview} alt="프로필 이미지" />
      <UploadButton>
        <CameraIcon src={cameraIcon} alt="업데이트" />
        <HiddenFileInput type="file" onChange={handleImageChange} accept="image/*" />
      </UploadButton>
    </ProfileImageWrapper>
  );
};

const ProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 14vw;
  height: 14vw;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  position: static;
`;

const UploadButton = styled.label`
  cursor: pointer;
  display: inline-block;
  position: relative;
  right: 4vw;
  align-self: flex-end;
  width: 4.64vw;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const CameraIcon = styled.img`
  width: 100%;
`;

export default ImageEdit;
