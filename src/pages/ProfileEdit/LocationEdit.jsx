import { useState } from 'react';
import Typography from '@components/ui/Typography/Typography';
import LocationBtn from '@/pages/ProfileEdit/LocationBtn'; // 하위 컴포넌트 파일 경로에 맞게 조정해주세요
import styled from 'styled-components';

const LocationEdit = ({ title }) => {
  const [items, setItems] = useState([
    { id: 1, city: '서울특별시', address: '강남구' },
    { id: 2, city: '서울특별시', address: '강남구' },
    { id: 3, city: '서울특별시', address: '강남구' },
  ]);

  // 항목 삭제 함수
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <BoxWrapper>
      <Typography content={title} size="medium" />
      <BtnInner>
        {items.map((item) => (
          <LocationBtn key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </BtnInner>
    </BoxWrapper>
  );
};

export default LocationEdit;

const BoxWrapper = styled.div`
  width: 100%;
  margin-top: 85px;
`;

const BtnInner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  margin: 26px 0px 85px 0px;
`;
