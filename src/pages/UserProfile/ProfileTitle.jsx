import Typography from '@components/ui/Typography/Typography';
import styled from 'styled-components';

const ProfileTitle = ({ type }) => {
  return (
    <TitleWrapper>
      <Typography content={type === 'mypage' ? '마이페이지' : '프로필 보기'} size="large" />
    </TitleWrapper>
  );
};

export default ProfileTitle;

const TitleWrapper = styled.div`
  width: 100%;
  margin: 167px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
