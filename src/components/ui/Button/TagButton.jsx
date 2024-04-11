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
  type: PropTypes.oneOf(['review', 'tag', 'post']),
};

export default TagButton;

const StyledButton = styled.button`
  width: ${({ type }) => {
    if (type === 'post') {
      return '26.04vw';
    }
    return 'auto';
  }};
  height: ${({ type }) => {
    if (type === 'post') {
      return '4.17vw';
    }
    return '40px';
  }};
  font-size: ${({ theme, type }) => {
    if (type === 'tag') {
      return theme.labels.medium.fontSize;
    }
    return theme.headings.medium.fontSize;
  }};
  padding: 0.42vw 1.04vw;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  border-radius: ${({ type }) => {
    if (type === 'tag') {
      return '20px';
    }
    return '0.625vw';
  }};
  background-color: ${({ theme, type }) => {
    if (type === 'post') {
      return theme.color.contentPrimary;
    }
    return theme.color.Gray200;
  }};
  color: ${({ theme, type }) =>
    type === 'tag' ? theme.color.contentPrimary : theme.color.contentWhite};
`;
