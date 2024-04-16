import styled from 'styled-components';
import LoginLogo from '@/pages/LoginSignup/LoginLogo';
import LoginButton from '@components/ui/Button/LoginButton';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@enums/CommonEnum';
import OAuthContainer from '@/pages/LoginSignup/LoginButtonContainer';

const Login = ({ type }) => {
  const nav = useNavigate();

  return (
    <LoginWrapper>
      <LoginInner>
        <LoginLogo />
        <OAuthContainer type={type} />
        {type === 'login' && (
          <LoginButton type="primary" title="회원가입 하기" onClick={() => nav(ROUTES.SIGNUP)} />
        )}
      </LoginInner>
    </LoginWrapper>
  );
};

export default Login;

Login.propTypes = {
  type: PropTypes.oneOf(['login', 'signup']).isRequired,
};

const LoginWrapper = styled.div`
  width: 100%;
`;

const LoginInner = styled.div`
  width: 375px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 90.75px 0;
  margin: auto;
`;
