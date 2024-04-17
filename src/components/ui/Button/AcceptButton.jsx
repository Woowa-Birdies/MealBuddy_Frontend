import styled from 'styled-components';
import PropTypes from 'prop-types';
import askApi from '@api/biz/askApi';

const AcceptButton = ({ title, action, propData }) => {
  const handleClick = async (event) => {
    event.stopPropagation(); // 이벤트 버블링 방지
    if (action === 'accept') {
      // postId
      await askApi.updateAskStatus(propData);
      console.log('수락 완료');
      window.location.reload();
    }
    if (action === 'reject') {
      // postId
      await askApi.updateAskStatus(propData);
      console.log('거절 완료');
      window.location.reload();
    }
  };
  return (
    <StyledButton onClick={handleClick} action={action}>
      {title}
    </StyledButton>
  );
};

AcceptButton.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
};

export default AcceptButton;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: auto;
  box-sizing: border-box;
  padding: 0.83vw 1.56vw;
  font-size: 1.11vw;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 31.992px */
  border-radius: 0.625vw;
  background-color: ${({ theme, action }) => {
    if (action === 'accept') {
      return theme.color.primary;
    }
    if (action === 'reject') {
      return theme.color.contentPrimary;
    }
    return theme.color.primary;
  }};
  color: ${({ theme }) => theme.color.contentWhite};
  cursor: pointer;
`;
