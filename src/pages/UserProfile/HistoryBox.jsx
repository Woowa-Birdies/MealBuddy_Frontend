import Typography from '@components/ui/Typography/Typography';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HistoryBox = ({ title, items }) => {
  return (
    <BoxWrapper>
      <Typography content={title} size="large" />
      <ItemList>
        {items.map((item) => (
          <Paragraphy key={item.id} content={item.text} size="large" />
        ))}
      </ItemList>
    </BoxWrapper>
  );
};

HistoryBox.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default HistoryBox;

const BoxWrapper = styled.div`
  width: 100%;
  height: 348px;
  display: flex;
  flex-direction: column;
  padding: 62px 0px 0px 58px;
  border-radius: 20px;
  background: #fafafa;
  box-shadow: 2px 4px 20px 0px rgba(0, 0, 0, 0.1);
`;

const ItemList = styled.ul`
  list-style: disc;
  padding: 0;
  margin-top: 24px;
`;
