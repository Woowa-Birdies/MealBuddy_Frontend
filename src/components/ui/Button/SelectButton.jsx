import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SelectButton = ({ title, type, onClick, selected, disabled }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick(title);
  };

  return (
    <StyledButton
      onClick={!disabled ? handleClick : undefined}
      isClicked={isClicked}
      type={type}
      title={title}
      selected={selected}
      disabled={disabled}
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
  type: PropTypes.oneOf(['recruit', 'tag', 'ghost', 'request', 'response', 'del']),
};

export default SelectButton;

const StyledButton = styled.button`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
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
    return 'auto';
  }};

  height: ${({ type }) => {
    if (type === 'ghost') {
      return `${96 * 0.75}px`;
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
    return '0.83vw';
  }};

  font-weight: '600';
  line-height: '150%';

  border: ${({ type }) => {
    if (type === 'request') {
      return '1px solid #898989';
    }
    return '20px';
  }};

  border-radius: ${({ type }) => {
    if (type === 'request' || type === 'response') {
      return '1.56vw';
    }
    return '20px';
  }};

  background: ${({ theme, isClicked, selected, type }) => {
    if (type === 'recruit' || type === 'del') {
      return selected ? theme.color.secondary : theme.border.borderTransparent;
    }
    if (type === 'ghost') {
      return isClicked ? theme.color.contentPrimary : theme.color.secondary;
    }
    if (type === 'request') {
      return theme.color.contentWhite;
    }
    return theme.color.secondary;
  }};

  color: ${({ theme, selected, type }) => {
    if (type === 'recruit') {
      return selected ? theme.color.contentWhite : theme.border.content;
    }
    if (type === 'request' || type === 'del') {
      return theme.color.contentPrimary;
    }
    return theme.color.contentWhite;
  }};
  cursor: ${({ type, disabled }) => {
    if (type === 'tag') {
      return 'default';
    }
    return disabled ? 'not-allowed' : 'pointer';
  }};

  &:hover {
    background: ${({ theme, isClicked, type }) => {
      if (type === 'response') {
        return theme.color.contentWhite;
      }
      if (type === 'ghost') {
        return isClicked ? theme.color.secondary : theme.color.contentPrimary;
      }
      if (type === 'del') {
        return theme.color.primary;
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
