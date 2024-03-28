import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SelectButton = ({ title, type, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledButton onClick={handleClick} isClicked={isClicked} type={type} title={title}>
      {title}
    </StyledButton>
  );
};

SelectButton.defaultProps = {
  onClick: () => {},
  type: 'recruit',
};

SelectButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['recruit', 'tag', 'ghost', 'manner']),
};

export default SelectButton;

const StyledButton = styled.button`
  padding: 0 15px;
  width: ${({ type }) => {
    if (type === 'ghost') {
      return `${819 * 0.75}px`;
    }
    if (type === 'manner') {
      return `${376 * 0.75}px`;
    }
    return 'auto';
  }};

  height: ${({ type }) => {
    if (type === 'ghost') {
      return `${96 * 0.75}px`;
    }
    if (type === 'manner') {
      return `${82 * 0.75}px`;
    }
    return '40px';
  }};

  font-size: ${({ type, theme }) => {
    if (type === 'ghost') {
      return `${theme.headings.medium.fontSize}`;
    }
    if (type === 'manner') {
      return `${theme.headings.small.fontSize}`;
    }
    return '16px';
  }};

  font-weight: ${({ type }) => {
    if (type === 'ghost') {
      return '700';
    }
    if (type === 'manner') {
      return '400';
    }
    return '600';
  }};

  line-height: ${({ type }) => {
    if (type === 'ghost') {
      return '140%';
    }
    if (type === 'manner') {
      return '160%';
    }
    return '150%';
  }};

  border: ${({ type }) => {
    if (type === 'manner') {
      return '1px solid #898989';
    }
    return '20px';
  }};

  border-radius: ${({ type }) => {
    if (type === 'ghost' || type === 'manner') {
      return '10px';
    }
    return '20px';
  }};

  background: ${({ theme, isClicked, type }) => {
    if (type === 'recruit') {
      return isClicked ? theme.color.secondary : theme.border.borderTransparent;
    }
    if (type === 'ghost') {
      return isClicked ? theme.color.contentPrimary : theme.color.secondary;
    }
    if (type === 'manner') {
      return isClicked ? theme.color.darkgray : theme.color.lightgray;
    }
    return theme.color.secondary;
  }};

  color: ${({ theme, isClicked, type }) => {
    if (type === 'recruit') {
      return isClicked ? theme.color.contentWhite : theme.border.content;
    }
    if (type === 'ghost') {
      return theme.color.contentWhite;
    }
    if (type === 'manner') {
      return isClicked ? theme.color.contentWhite : theme.color.content;
    }
    return theme.color.contentWhite;
  }};
  cursor: ${({ type }) => {
    if (type === 'tag') {
      return 'default';
    }
    return 'pointer';
  }};

  &:hover {
    background: ${({ theme, type }) => {
      if (type === 'ghost') {
        return theme.color.contentPrimary;
      }
      if (type === 'manner') {
        return theme.color.darkgray;
      }
      return theme.color.secondary;
    }};
    color: ${({ theme }) => theme.color.contentWhite};
  }
`;
