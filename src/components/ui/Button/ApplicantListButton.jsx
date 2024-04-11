import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// const ApplicantListButton = ({ title, type, postId }) => {
const ApplicantListButton = ({ title, type }) => {
  const nav = useNavigate();

  const handleClick = () => {
    nav('/applicantslist');
  };
  return (
    <StyledButton onClick={handleClick} type={type} title={title}>
      {title}
    </StyledButton>
  );
};

ApplicantListButton.defaultProps = {
  type: 'post',
  // onClick: () => {},
};

ApplicantListButton.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['post', 'mypage']),
  // onClick: PropTypes.func,
};

export default ApplicantListButton;

const StyledButton = styled.button`
  width: ${({ type }) => {
    if (type === 'post') {
      return '23.04vw';
    }
    return '16vw';
  }};
  height: ${({ type }) => {
    if (type === 'post') {
      return '4.17vw';
    }
    return '4vw';
  }};
  font-size: ${({ theme }) => theme.headings.medium.fontSize};
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  border-radius: 0.625vw;
  background: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.contentWhite};
  cursor: pointer;

  // &:hover {
  //   background: ${({ theme }) => theme.color.secondary};
  //   color: ${({ theme }) => theme.color.contentWhite};
  // }
`;
