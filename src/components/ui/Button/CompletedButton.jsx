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
  width: 26.04vw;
  height: 4.17vw;
  font-size: ${({ theme }) => theme.headings.medium.fontSize};
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  border-radius: 0.625vw;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.contentWhite};
  cursor: pointer;

  // &:hover {
  //   background: ${({ theme }) => theme.color.secondary};
  // }
`;
