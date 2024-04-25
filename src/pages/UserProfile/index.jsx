import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ProfileTitle from '@/pages/UserProfile/ProfileTitle';
import UserInfo from '@/pages/UserProfile/UserInfo';
import UserHistory from '@/pages/UserProfile/UserHistory';
import UserReview from '@/pages/UserProfile/UserReview';
import useLogout from '@hooks/useLogout';
import useUserInfoStore from '@store/useUserInfoStore';
import userProfileApi from '@api/biz/userProfileApi';

const UserProfile = ({ type }) => {
  const handleLogout = useLogout();
  const { userProfile } = useUserInfoStore();
  const location = useLocation();
  const userId = location.state ? location.state : userProfile.userId;
  const [information, setInformation] = useState([]);

  console.log('현재 상태', location.state);
  console.log('현재 상태', userProfile.userId, userId);

  useEffect(() => {
    console.log('유저아이디', userId);
    const loadData = async () => {
      try {
        const response = await userProfileApi.getUserProfileInfo(userId);
        console.log('response', response);
        setInformation(response.data);
      } catch (error) {
        console.error('Failed to load data', error);
      }
    };

    loadData();
  }, [userId]);

  return (
    <ProfileWrapper>
      <ProfileInner>
        <ProfileTitle type={type} propData={information} />
        <UserInfo type={type} propData={information} />
        <UserHistory type={type} propData={information} />
        <UserReview type={type} propData={information} />
      </ProfileInner>
      <ProfileBottom>
        {type === 'mypage' ? <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn> : null}
      </ProfileBottom>
    </ProfileWrapper>
  );
};

export default UserProfile;

const ProfileWrapper = styled.div`
  width: 100%;
  padding: 0px 16.71vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileBottom = styled.div`
  align-self: flex-end;
  margin-bottom: 200px;
`;

const LogoutBtn = styled.button`
  font-size: 1.481vw;
  color: #6b6b6b;
  cursor: pointer;
  background-color: transparent;
`;
