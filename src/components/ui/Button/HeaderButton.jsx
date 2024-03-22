import styled, { css } from 'styled-components';
import { Button } from 'antd';
import PropTypes from 'prop-types';

// primary | dashed | link | text | default 타입일 경우 Ant Design의 Button을 사용
// 그 외 경우 커스텀한 StyledButton 사용(ex.sub, ...)
const HeaderButton = ({ title, type, onClick }) => {
  return ['primary', 'dashed', 'link', 'text', 'default'].includes(type) ? (
    <StyledButton type={type} onClick={onClick}>
      {title}
    </StyledButton>
  ) : (
    <StyledButton $type={type} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

HeaderButton.defaultProps = {
  type: 'default',
  onClick: () => {},
};

HeaderButton.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default HeaderButton;

const subStyle = css`
  background: ${({ theme }) => theme.color.contentSub};
  color: ${({ theme }) => theme.color.contentWhite};

  &:hover {
    background: ${({ theme }) => theme.color.contentSubHover} !important;
    color: ${({ theme }) => theme.color.contentWhite} !important;
    border-color: unset !important;
  }
`;

const StyledButton = styled(Button)`
  width: 102px;
  height: 40px;
  border-radius: 39.07px;
  ${({ $type }) => $type === 'sub' && subStyle}
`;
