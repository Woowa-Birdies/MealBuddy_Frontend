import styled from 'styled-components';
import PropTypes from 'prop-types';

const TagButton = ({ title, type }) => {
  return (
    <StyledButton type={type} title={title}>
      {title}
    </StyledButton>
  );
};

TagButton.defaultProps = {
  type: 'tag',
};

TagButton.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['review', 'tag']),
};

export default TagButton;

const StyledButton = styled.button`
  width: ${({ title }) => title.length * 10 + 60}px;
  height: 40px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  border-radius: 20px;
  background-color: ${({ theme, type }) =>
    type === 'tag' ? theme.color.borderOpaque : theme.color.Gray200};
  color: ${({ theme, type }) =>
    type === 'tag' ? theme.color.contentWhite : theme.color.contentSub};
`;
