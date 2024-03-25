import styled from 'styled-components';
import PropTypes from 'prop-types';

const CompletedButton = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

CompletedButton.defaultProps = {
  onClick: () => {},
};

CompletedButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default CompletedButton;

const StyledButton = styled.button`
  width: 500px;
  height: 80px;
  font-size: 28.43px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  border-radius: 12px;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.contentWhite};

  // &:hover {
  //   background: ${({ theme }) => theme.color.secondary};
  //   color: ${({ theme }) => theme.color.contentWhite};
  // }
`;
