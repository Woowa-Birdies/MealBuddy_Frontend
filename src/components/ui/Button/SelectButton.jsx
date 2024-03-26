import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SelectButton = ({ title, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledButton onClick={handleClick} isClicked={isClicked} title={title}>
      {title}
    </StyledButton>
  );
};

SelectButton.defaultProps = {
  onClick: () => {},
};

SelectButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
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
  background: ${({ theme, isClicked }) =>
    isClicked ? theme.color.secondary : theme.border.borderTransparent};
  color: ${({ theme, isClicked }) =>
    isClicked ? theme.color.contentWhite : theme.color.contentSub};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.contentWhite};
  }
`;
