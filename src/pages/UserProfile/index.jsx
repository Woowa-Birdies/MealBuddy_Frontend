import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProfileTitle from '@/pages/UserProfile/ProfileTitle';
import UserInfo from '@/pages/UserProfile/UserInfo';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import UserHistory from '@/pages/UserProfile/UserHistory';
// import UserReview from '@/pages/UserProfile/UserReview';

const UserProfile = ({ type }) => {
  return (
    <ProfileWrapper>
      <ProfileInner>
        <ProfileTitle type={type} />
        <UserInfo type={type} />
        <UserHistory />
        {/* <UserReview /> */}
      </ProfileInner>
      <ProfileBottom>
        {type === 'mypage' ? (
          <Paragraphy content="로그아웃" size="xl" color="contentSecondary" />
        ) : null}
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
  padding: 0px 320px;
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
`;
