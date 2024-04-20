import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProfileTitle from '@/pages/UserProfile/ProfileTitle';
import UserInfo from '@/pages/UserProfile/UserInfo';
import UserHistory from '@/pages/UserProfile/UserHistory';
import UserReview from '@/pages/UserProfile/UserReview';
import useLogout from '@hooks/useLogout';

const UserProfile = ({ type }) => {
  const handleLogout = useLogout();

  return (
    <ProfileWrapper>
      <ProfileInner>
        <ProfileTitle type={type} />
        <UserInfo type={type} />
        <UserHistory type={type} />
        <UserReview type={type} />
      </ProfileInner>
      <ProfileBottom>
        {type === 'mypage' ? <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn> : null}
      </ProfileBottom>
    </ProfileWrapper>
  );
};

export default UserProfile;

UserProfile.propTypes = {
  type: PropTypes.oneOf(['mypage', 'userpage']).isRequired,
};

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
