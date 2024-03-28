import styled from 'styled-components';
import PropTypes from 'prop-types';

const ReviewStatusButton = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

ReviewStatusButton.defaultProps = {
  onClick: () => {},
};

ReviewStatusButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ReviewStatusButton;

const StyledButton = styled.button`
  width: 88px;
  height: 40px;
  display: flex;
  padding: 8px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.contentWhite};
  cursor: pointer;

  // &:hover {
  //   background: ${({ theme }) => theme.color.secondary};
  //   color: ${({ theme }) => theme.color.contentWhite};
  // }
`;
