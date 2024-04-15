import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// import { ROUTES } from '@enums/CommonEnum';

// const GoReviewButton = ({ title, type, postId }) => {
const GoReviewButton = ({ title, type }) => {
  const nav = useNavigate();

  const handleClick = () => {
    nav('/review');
    // nav(`/review/${postId}`);
  };
  return (
    <StyledButton onClick={handleClick} type={type} title={title}>
      {title}
    </StyledButton>
  );
};

GoReviewButton.defaultProps = {
  type: 'post',
  // onClick: () => {},
};

GoReviewButton.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['post', 'mypage']),
  // onClick: PropTypes.func,
};

export default GoReviewButton;

const StyledButton = styled.button`
  width: ${({ type }) => {
    if (type === 'post') {
      return '26.04vw';
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
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.contentWhite};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.contentPrimary};
  }
`;
