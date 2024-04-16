import styled from 'styled-components';
import LoginButton from '@components/ui/Button/LoginButton';
import KakaoLogo from '@assets/images/svg/kakao.svg?react';
import NaverLogo from '@assets/images/svg/naver.svg?react';
import GoogleLogo from '@assets/images/svg/google.svg?react';
import SvgComponent from '@components/ui/Logo/SvgComponent';
import PropTypes from 'prop-types';
import { API_BASE_URL } from '@constants/Constants';

const logos = {
  kakao: KakaoLogo,
  naver: NaverLogo,
  google: GoogleLogo,
};

const OAuthContainer = ({ type }) => {
  const handleLogin = (provider) => {
    window.location.href = `${API_BASE_URL}/oauth2/authorization/${provider}`;
  };

  const createButton = (provider) => (
    <LoginButton
      key={provider}
      type={provider}
      title={
        type === 'login'
          ? `${provider.toUpperCase()} 로그인`
          : `${provider.toUpperCase()}로 회원가입`
      }
      icon={
        <SvgComponent
          src={logos[provider]}
          width={provider === 'naver' ? 28 : 32}
          height={provider === 'naver' ? 28 : 32}
        />
      }
      onClick={() => handleLogin(provider)}
      style={provider === 'naver' ? { border: '1px solid' } : undefined}
    />
  );

  return <ButtonContainer>{['kakao', 'naver', 'google'].map(createButton)}</ButtonContainer>;
};

export default OAuthContainer;

OAuthContainer.propTypes = {
  type: PropTypes.oneOf(['login', 'signup']).isRequired,
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 78px 0 97.5px 0;
`;
