import { ROUTES } from '@enums/CommonEnum';
import Typography from '@components/ui/Typography/Typography';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import styled from 'styled-components';
import ProfileButton from '@components/ui/Button/ProfileButton';
import defaultImg from '@/assets/images/svg/DefaultProfile.svg';
import Label from '@components/ui/Label/Label';
import useUserInfoStore from '@store/useUserInfoStore';

const UserInfo = ({ type }) => {
  const { userProfile } = useUserInfoStore();

  return (
    <InfoWrapper>
      <InfoTop>
        <TopInner>
          <ProfileImg src={defaultImg} />
          <Typography content={userProfile.nickname || '냠메이트'} size="xl" />
          <Paragraphy
            content={`#user${userProfile.userId.toString()}`}
            size="large"
            color="contentTertiary"
          />
        </TopInner>
        <ProfileButton
          type="link"
          title={type === 'mypage' ? '프로필 수정' : '신고하기'}
          color={type === 'mypage' ? 'secondary' : 'contentPrimary'}
          to={type === 'mypage' ? ROUTES.EDITPROFILE : ROUTES.REPORT}
        />
      </InfoTop>
      <InfoBottom>
        <Label content={userProfile.introduce || '자기소개를 입력하세요.'} size="xl" />
      </InfoBottom>
    </InfoWrapper>
  );
};

export default UserInfo;

const InfoWrapper = styled.div`
  width: 100%;
`;
const InfoTop = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 58.56px;
`;
const TopInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2vw;
`;
const InfoBottom = styled.div``;
const ProfileImg = styled.img`
  width: 8.17vw;
  height: 8.17vw;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-right: 28.56px;
  filter: drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.25));
`;
