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
  type: PropTypes.oneOf(['recruit', 'tag']),
};

export default SelectButton;

const StyledButton = styled.button`
  width: ${({ title }) => title.length * 10 + 60}px;
  height: 40px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  border-radius: 20px;
  background: ${({ theme, isClicked, type }) =>
    isClicked || type === 'tag' ? theme.color.secondary : theme.border.borderTransparent};
  color: ${({ theme, isClicked, type }) =>
    isClicked || type === 'tag' ? theme.color.contentWhite : theme.color.contentSub};
  cursor: pointer;
  &:hover {
    background: ${({ theme, type }) =>
      type === 'tag' ? theme.color.secondary : theme.color.secondary};
    color: ${({ theme, type }) =>
      type === 'tag' ? theme.color.contentWhite : theme.color.contentWhite};
  }
`;
