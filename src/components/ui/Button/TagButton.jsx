import styled from 'styled-components';
import PropTypes from 'prop-types';

const TagButton = ({ title, type, color }) => {
  return (
    <StyledButton type={type} title={title} color={color}>
      {title}
    </StyledButton>
  );
};

TagButton.defaultProps = {
  type: 'tag',
  color: 'primary',
};

TagButton.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['review', 'tag', 'post', 'status']),
  color: PropTypes.oneOf([
    'primary',
    'contentPrimary',
    'contentSecondary',
    'contentTertiary',
    'contentWhite',
    'malachite',
  ]),
};

export default TagButton;

const StyledButton = styled.button`
  width: ${({ type }) => {
    if (type === 'post') {
      return '26.04vw';
    }
    if (type === 'status') {
      return 'fit-content';
    }
    return 'fit-content';
  }};
  height: ${({ type }) => {
    if (type === 'post') {
      return '4.17vw';
    }
    if (type === 'status') {
      return 'fit-content';
    }
    return '40px';
  }};
  font-size: ${({ theme, type }) => {
    if (type === 'tag') {
      return theme.labels.medium.fontSize;
    }
    if (type === 'status') {
      return '0.73vw';
    }
    return theme.headings.medium.fontSize;
  }};
  padding: ${({ type }) => {
    if (type === 'status') {
      return '0.32vw 0.8vw';
    }
    return '0.42vw 1.04vw';
  }};

  font-style: normal;
  font-weight: ${({ type }) => {
    if (type === 'status' || type === 'tag') {
      return '400';
    }
    return '700';
  }};
  line-height: 140%;
  border-radius: ${({ type }) => {
    if (type === 'tag' || type === 'status') {
      return '20px';
    }
    return '0.625vw';
  }};
  background-color: ${({ theme, type, color }) => {
    if (type === 'post') {
      return theme.color.contentPrimary;
    }
    if (type === 'status') {
      return theme.color[color];
    }
    return theme.color.Gray200;
  }};
  color: ${({ theme, type }) =>
    type === 'tag' ? theme.color.contentPrimary : theme.color.contentWhite};
`;
