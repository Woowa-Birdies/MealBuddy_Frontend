import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SelectButton = ({ title, type, onClick, selected }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick(title);
  };

  return (
    <StyledButton
      onClick={handleClick}
      isClicked={isClicked}
      type={type}
      title={title}
      selected={selected}
    >
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
  type: PropTypes.oneOf(['recruit', 'tag', 'ghost', 'manner', 'request', 'response']),
};

export default SelectButton;

const StyledButton = styled.button`
  bottom: ${({ type }) => {
    if (type === 'request' || type === 'response') {
      return '0.5vw';
    }
    return 'auto';
  }};
  right: ${({ type }) => {
    if (type === 'request' || type === 'response') {
      return '0px';
    }
    return 'auto';
  }};
  position: ${({ type }) => {
    if (type === 'request' || type === 'response') {
      return 'absolute';
    }
    return 'static';
  }};
  padding: ${({ type }) => {
    if (type === 'request' || type === 'response') {
      return `0.42vw 1.04vw`;
    }
    return '0 15px';
  }};
  width: ${({ type }) => {
    if (type === 'ghost') {
      return `${819 * 0.75}px`;
    }
    if (type === 'manner') {
      return '376px';
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
    if (type === 'request' || type === 'response') {
      return `auto`;
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
    return '0.83vw';
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
    if (type === 'request') {
      return '1px solid #898989';
    }
    return '20px';
  }};

  border-radius: ${({ type }) => {
    if (type === 'ghost' || type === 'manner') {
      return '10px';
    }
    if (type === 'request' || type === 'response') {
      return '1.56vw';
    }
    return '20px';
  }};

  background: ${({ theme, isClicked, selected, type }) => {
    if (type === 'recruit') {
      return selected ? theme.color.secondary : theme.border.borderTransparent;
    }
    if (type === 'ghost') {
      return isClicked ? theme.color.contentPrimary : theme.color.secondary;
    }
    if (type === 'manner') {
      return isClicked ? theme.color.darkgray : theme.color.lightgray;
    }
    if (type === 'request') {
      return theme.color.contentWhite;
    }
    return theme.color.secondary;
  }};

  color: ${({ theme, isClicked, selected, type }) => {
    if (type === 'recruit') {
      return selected ? theme.color.contentWhite : theme.border.content;
    }
    if (type === 'ghost') {
      return theme.color.contentWhite;
    }
    if (type === 'manner') {
      return isClicked ? theme.color.contentWhite : theme.color.content;
    }
    if (type === 'request') {
      return theme.color.contentPrimary;
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
      if (type === 'response') {
        return theme.color.contentWhite;
      }
      return theme.color.secondary;
    }};
    color: ${({ theme, type }) => {
      if (type === 'response') {
        return theme.color.contentPrimary;
      }
      return theme.color.contentWhite;
    }};
    border: ${({ type }) => {
      if (type === 'request') {
        return `1px solid transparent`;
      }
      if (type === 'response') {
        return `1px solid #898989`;
      }
      return 'auto';
    }};
  }
`;
