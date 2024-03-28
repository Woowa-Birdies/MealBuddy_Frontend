import styled from 'styled-components';
import PropTypes from 'prop-types';

const StatusButton = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

StatusButton.defaultProps = {
  onClick: () => {},
};

StatusButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default StatusButton;

const StyledButton = styled.button`
  width: 74px;
  height: 40px;
  display: inline-flex;
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

  // &:hover {
  //   background: ${({ theme }) => theme.color.secondary};
  //   color: ${({ theme }) => theme.color.contentWhite};
  // }
`;
