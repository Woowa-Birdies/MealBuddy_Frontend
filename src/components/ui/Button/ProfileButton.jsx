import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const ProfileButton = ({ title, type, onClick, to, color }) => {
  // 'link' 타입일 경우 Link 컴포넌트를 사용하도록 수정
  const ButtonComponent =
    type === 'link' && to ? (
      <Link to={to}>
        <StyledButton $type={type} $color={color} onClick={onClick}>
          {title}
        </StyledButton>
      </Link>
    ) : (
      <StyledButton $type={type} $color={color} onClick={onClick}>
        {title}
      </StyledButton>
    );

  return ButtonComponent;
};

ProfileButton.defaultProps = {
  type: 'default',
  backgroundColor: 'contentPrimary',
  onClick: () => {},
};

ProfileButton.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  backgroundColor: PropTypes.oneOf(['secondary', 'contentPrimary']),
  onClick: PropTypes.func,
  to: PropTypes.string, // 'to' prop에 대한 PropTypes 정의 추가
};

export default ProfileButton;

const StyledButton = styled(Button)`
  width: fit-content;
  height: 56px;
  border-radius: 20px;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background-color: ${({ theme, $color }) => theme.color[$color]};
  line-height: 23.87px;
  letter-spacing: 0.04px;
`;
