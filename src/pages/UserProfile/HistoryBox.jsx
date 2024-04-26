import Typography from '@components/ui/Typography/Typography';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import styled from 'styled-components';

const HistoryBox = ({ title, items }) => {
  return (
    <BoxWrapper>
      <Typography content={title} size="large" />
      <ItemList>
        {items.length === 0 ? (
          <Paragraphy content={`${title}이 없습니다`} size="large" />
        ) : (
          items.map((item, index) => (
            <Paragraphy
              key={item.index}
              content={item.contents !== null ? `- ${item.contents}` : `- ${title} ${index + 1}`}
              size="large"
            />
          ))
        )}
      </ItemList>
    </BoxWrapper>
  );
};

export default HistoryBox;

const BoxWrapper = styled.div`
  width: 100%;
  height: 348px;
  display: flex;
  flex-direction: column;
  padding: 3.25vw 0px 0px 3.05vw;
  border-radius: 20px;
  background: #fafafa;
  box-shadow: 2px 4px 20px 0px rgba(0, 0, 0, 0.1);
`;

const ItemList = styled.ul`
  list-style: disc;
  padding: 0;
  margin-top: 24px;
`;
