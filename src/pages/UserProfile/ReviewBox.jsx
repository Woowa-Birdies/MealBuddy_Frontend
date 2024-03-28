import Typography from '@components/ui/Typography/Typography';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import icon from '@/assets/images/svg/manner.svg';

const ReviewBox = ({ title, items }) => {
  return (
    <BoxWrapper>
      <Typography content={title} size="large" />
      <ItemList>
        {items.map((item) => (
          <ListItem key={item.id}>
            <MannerIcon src={icon} />
            <Paragraphy size="large" content={String(item.score)} />
            <MannerTitle>
              <Paragraphy size="large" content={item.text} />
            </MannerTitle>
          </ListItem>
        ))}
      </ItemList>
    </BoxWrapper>
  );
};

ReviewBox.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      score: PropTypes.number,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default ReviewBox;

const BoxWrapper = styled.div`
  width: 100%;
`;

const ItemList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
  padding: 0;
  margin-top: 51px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5.91px;
`;

const MannerTitle = styled.div`
  padding: 24px 80px;
  width: 376px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #898989;
  margin-left: 14.09px;
`;

const MannerIcon = styled.img``;
