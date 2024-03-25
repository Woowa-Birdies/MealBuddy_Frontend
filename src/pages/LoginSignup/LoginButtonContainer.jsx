import styled from 'styled-components';
import LoginButton from '@components/ui/Button/LoginButton';
import KakaoLogo from '@assets/images/svg/kakao.svg?react';
import NaverLogo from '@assets/images/svg/naver.svg?react';
import GoogleLogo from '@assets/images/svg/google.svg?react';
import SvgComponent from '@components/ui/Logo/SvgComponent';
import PropTypes from 'prop-types';
import useLoginStore from '@store/useLoginStore';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@enums/CommonEnum';

const LoginButtonContainer = ({ type }) => {
  const { setIsLogin } = useLoginStore();
  const nav = useNavigate();

  const handleLogin = () => {
    setIsLogin(true);
    nav(ROUTES.HOME);
  };

  return (
    <ButtonContainer>
      <LoginButton
        type="kakao"
        title={type === 'login' ? '카카오 로그인' : '카카오로 회원가입'}
        icon={<SvgComponent src={KakaoLogo} width={36} height={33.6} />}
        onClick={handleLogin}
      />
      <LoginButton
        type="naver"
        title={type === 'login' ? '네이버 로그인' : '네이버로 회원가입'}
        icon={<SvgComponent src={NaverLogo} width={28} height={28} />}
        style={{ border: '1px solid' }}
        onClick={handleLogin}
      />
      <LoginButton
        type="google"
        title={type === 'login' ? '구글 로그인' : '구글로 회원가입'}
        icon={<SvgComponent src={GoogleLogo} width={32} height={32} />}
        onClick={handleLogin}
      />
    </ButtonContainer>
  );
};

export default LoginButtonContainer;

LoginButtonContainer.propTypes = {
  type: PropTypes.oneOf(['login', 'signup']).isRequired,
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 104px 0 130px 0;
`;
