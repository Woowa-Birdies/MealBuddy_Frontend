import styled, { css } from 'styled-components';
import { Button } from 'antd';
import PropTypes from 'prop-types';

// primary | dashed | link | text | default 타입일 경우 Ant Design의 Button을 사용
// 그 외 경우 커스텀한 StyledButton 사용(ex.sub, ...)
const LoginButton = ({ title, type, onClick, icon }) => {
  return ['primary', 'dashed', 'link', 'text', 'default'].includes(type) ? (
    <StyledButton type={type} onClick={onClick} icon={icon}>
      {title}
    </StyledButton>
  ) : (
    <StyledButton $type={type} onClick={onClick} icon={icon}>
      {title}
    </StyledButton>
  );
};

LoginButton.defaultProps = {
  type: 'default',
  onClick: () => {},
  icon: null,
};

LoginButton.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element,
};

export default LoginButton;

const KakaoStyle = css`
  background: ${({ theme }) => theme.color.goldenYellow};
  color: ${({ theme }) => theme.color.contentPrimary};
  border: unset;
  color: ${({ theme }) => theme.color.contentPrimary};
  .ant-btn-icon {
    position: absolute;
    left: 30px;
  }

  &:hover {
    background: ${({ theme }) => theme.color.goldenYellowHover} !important;
    color: ${({ theme }) => theme.color.contentPrimary} !important;
    border-color: unset !important;
  }
`;

const NaverStyle = css`
  background: ${({ theme }) => theme.color.malachite};
  color: ${({ theme }) => theme.color.contentWhite};
  border: unset;
  color: ${({ theme }) => theme.color.contentWhite};
  .ant-btn-icon {
    position: absolute;
    left: 34px;
  }

  &:hover {
    background: ${({ theme }) => theme.color.malachiteHover} !important;
    color: ${({ theme }) => theme.color.contentWhite} !important;
    border-color: unset !important;
  }
`;

const GoogleStyle = css`
  background: ${({ theme }) => theme.color.contentWhite};
  color: ${({ theme }) => theme.color.contentPrimary};
  border: ${({ theme }) => theme.border.borderTransparent};
  color: ${({ theme }) => theme.color.contentPrimary};
  .ant-btn-icon {
    position: absolute;
    left: 29px;
  }
  &:hover {
    background: ${({ theme }) => theme.color.contentWhite} !important;
    color: ${({ theme }) => theme.color.contentPrimary} !important;
    border: ${({ theme }) => theme.border.borderTransparent} !important;
  }
`;

const selectButtonStyle = ({ $type }) => {
  switch ($type) {
    case 'kakao':
      return KakaoStyle;
    case 'naver':
      return NaverStyle;
    case 'google':
      return GoogleStyle;
    default:
      return '';
  }
};

const StyledButton = styled(Button)`
  width: 500px;
  height: 80px;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.headings.medium.fontSize};
  font-weight: ${({ theme }) => theme.headings.medium.fontWeight};
  line-height: ${({ theme }) => theme.headings.medium.lineHeight};
  ${selectButtonStyle};

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
