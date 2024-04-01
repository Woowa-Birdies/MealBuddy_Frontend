import styled from 'styled-components';
import PropTypes from 'prop-types';

const ActivityButton = ({ title, onClick, color }) => {
  return (
    <StyledButton $color={color} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

ActivityButton.defaultProps = {
  onClick: () => {},
  color: 'primary',
};

ActivityButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf([
    'primary',
    'contentPrimary',
    'contentSecondary',
    'contentTertiary',
    'contentWhite',
  ]),
};

export default ActivityButton;

const StyledButton = styled.button`
  width: 17.0836vw;
  height: 3.334vw;
  box-sizing: border-box;
  padding: 0.834vw 6vw;
  font-size: 1.1vw;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 31.992px */
  border-radius: 12px;
  background: ${({ theme, $color }) => theme.color[$color]};
  color: ${({ theme }) => theme.color.contentWhite};
  cursor: pointer;
`;
