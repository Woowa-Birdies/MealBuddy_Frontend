import styled from 'styled-components';
import PropTypes from 'prop-types';
import cafeImage from '@/assets/images/svg/cafe.svg';
import mealImage from '@/assets/images/svg/meal.svg';
import drinkImage from '@/assets/images/svg/drink.svg';

const imageMap = {
  식사: mealImage,
  카페: cafeImage,
  술: drinkImage,
};

const ThumnailImage = ({ content, type }) => {
  const imageUrl = imageMap[content] || mealImage;
  return <Thumnail src={imageUrl} type={type} alt={`${content} 이미지`} />;
};

ThumnailImage.defaultProps = {
  content: '식사',
  type: 'nyam',
};

ThumnailImage.propTypes = {
  content: PropTypes.oneOf(['식사', '카페', '술']),
  type: PropTypes.oneOf(['deadline', 'list', 'nyam']), // nyam: '냠관리, 신청 메이트 조회', deadline: '마감임박', list: '메인 일반 목록'
};

export default ThumnailImage;

const Thumnail = styled.img`
  width: ${({ type }) => {
    if (type === 'deadline') {
      return '21.17vw';
    }
    if (type === 'list') {
      return '15.88vw';
    }
    return '16.15vw';
  }};
  height: ${({ type }) => {
    if (type === 'deadline' || type === 'list') {
      return '14.58vw';
    }
    return '16.15vw';
  }};
  border-radius: ${({ type }) => (type === 'deadline' || type === 'list' ? '20px' : '0px')};
  object-fit: cover;
  object-position: center;
`;
