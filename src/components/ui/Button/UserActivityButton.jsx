import styled from 'styled-components';
import PropTypes from 'prop-types';

const UserActivityButton = ({ title, onClick, color }) => {
  return (
    <StyledButton $color={color} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

UserActivityButton.defaultProps = {
  onClick: () => {},
  color: 'primary',
};

UserActivityButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf([
    'primary',
    'contentPrimary',
    'contentSecondary',
    'contentTertiary',
    'contentWhite',
    'secondary',
  ]),
};

export default UserActivityButton;

const StyledButton = styled.button`
  width: 13.0836vw;
  height: 3.334vw;
  box-sizing: border-box;
  padding: 0.834vw 2vw;
  font-size: 1.1vw;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 31.992px */
  border-radius: 0.625vw;
  background: ${({ theme, $color }) => theme.color[$color]};
  color: ${({ theme }) => theme.color.contentWhite};
  cursor: pointer;
`;
