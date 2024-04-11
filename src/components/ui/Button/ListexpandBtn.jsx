import styled from 'styled-components';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import close from '@/assets/images/svg/closeIcon.svg';
import open from '@/assets/images/svg/moreIcon.svg';

const ListexpandBtn = ({ isExpanded, toggleDisplay }) => {
  return (
    <StyledButton onClick={toggleDisplay}>
      {isExpanded ? (
        <>
          <Icon src={close} alt="close" />
          <Paragraphy content="접기" size="large" color="contentTertiary" />
        </>
      ) : (
        <>
          <Icon src={open} alt="open" />
          <Paragraphy content="더보기" size="large" color="contentTertiary" />
        </>
      )}
    </StyledButton>
  );
};

export default ListexpandBtn;

const StyledButton = styled.button`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Icon = styled.img``;
