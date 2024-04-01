import styled from 'styled-components';
import deleteIcon from '@/assets/images/svg/CloseBtn.svg';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';

const LocationBtn = ({ item, onDelete }) => {
  return (
    <BoxWrapper>
      <Paragraphy size="large" content={`${item.city} > ${item.address}`} />
      <ClearBtn onClick={() => onDelete(item.id)} src={deleteIcon} />
    </BoxWrapper>
  );
};

export default LocationBtn;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  border-radius: 20px;
  padding: 1.2vw 1.45vw;
  border: 1px solid rgba(137, 137, 137, 0.3);
  gap: 16px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const ClearBtn = styled.img`
  width: 24px;
  height: 24px;
`;
