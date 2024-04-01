import styled from 'styled-components';
import PropTypes from 'prop-types';

const EditButton = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

EditButton.defaultProps = {
  onClick: () => {},
};

EditButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default EditButton;

const StyledButton = styled.button`
  width: ${380 * 0.75}px;
  height: ${80 * 0.75}px;
  display: flex;
  padding: 24px 153px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: ${({ theme }) => theme.headings.small.fontSize};
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.lightgray};
  color: ${({ theme }) => theme.color.contentSecondary};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.darkgray};
    color: ${({ theme }) => theme.color.contentWhite};
  }
`;
