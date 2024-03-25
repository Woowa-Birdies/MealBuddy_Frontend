import Typography from '@components/ui/Typography/Typography';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HistoryBox = ({ title, items }) => {
  return (
    <BoxWrapper>
      <Typography content={title} size="large" />
      <Paragraphy size="large" />
      <ItemList>
        {items.map((itemContent) => (
          <Paragraphy key={itemContent} content={itemContent} size="large" />
        ))}
      </ItemList>
    </BoxWrapper>
  );
};

HistoryBox.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
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
  /* Your styles for the list, e.g., */
  list-style: none;
  padding: 0;
`;
