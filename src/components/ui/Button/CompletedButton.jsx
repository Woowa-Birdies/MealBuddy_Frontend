import styled from 'styled-components';
import PropTypes from 'prop-types';

const CompletedButton = ({ title, onClick, type }) => {
  console.log(type);
  return (
    <StyledButton onClick={onClick} type={type}>
      {title}
    </StyledButton>
  );
};

CompletedButton.defaultProps = {
  onClick: () => {},
  type: 'submit',
};

CompletedButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default CompletedButton;

const StyledButton = styled.button`
  width: ${({ type }) => {
    if (type === 'joinlist') {
      return '16vw';
    }
    if (type === 'joindeadline') {
      return '21vw';
    }
    return '26.04vw';
  }};
  height: 4.17vw;
  font-size: ${({ theme }) => theme.headings.medium.fontSize};
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  border-radius: 20px;
  background: ${({ theme, type }) => {
    if (type === 'joinlist' || type === 'joindeadline') {
      return '#9CDB9E';
    }
    return theme.color.primary;
  }};
  color: ${({ theme }) => theme.color.contentWhite};
  cursor: pointer;

  // &:hover {
  //   background: ${({ theme }) => theme.color.secondary};
  // }
`;
