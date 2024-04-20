import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'antd';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import filter from '@assets/images/svg/filter.svg';
import PostCard from '@/pages/Home/PostCard';
import homeApi from '@api/biz/homeApi';
import Typography from '@components/ui/Typography/Typography';
import handleError from '@utils/ErrorHandler';

const List = ({ posts, setPosts }) => {
  const [isModal, setIsModal] = useState(false);

  const [dateTypes, setDateTypes] = useState('');
  const [foodTypes, setFoodTypes] = useState('');
  const [ages, setAges] = useState('');
  const [genders, setGenders] = useState('');

  const showModal = () => {
    setIsModal(true);
  };

  const fetchList = async () => {
    try {
      const res = await homeApi.getFilter({ dateTypes, foodTypes, ages, genders });
      setPosts(res.data);
    } catch (error) {
      handleError(error);
    }
  };

  // 마운트 시에 실행
  useState(() => {
    fetchList();
  }, []);

  const handleOk = () => {
    fetchList();
    setIsModal(false);
  };

  const handleReset = () => {
    setDateTypes('');
    setFoodTypes('');
    setAges('');
    setGenders('');
  };

  const toggleSelection = (value, current, setter) => {
    const currentValues = current ? current.split(',').filter((v) => v) : [];
    const index = currentValues.indexOf(value);
    if (index === -1) {
      // 값이 배열에 없으면 추가
      setter(current ? `${current},${value}` : value);
    } else {
      // 값이 배열에 있으면 제거
      setter(currentValues.filter((item) => item !== value).join(','));
    }
  };

  return (
    <Container>
      {/* {console.log(posts)} */}
      <FilterContainer>
        <FilterClick onClick={showModal}>
          <FilterIcon src={filter} />
          <Paragraphy content="필터" size="large" />
        </FilterClick>
      </FilterContainer>
      <PostsGrid>
        {posts.ongoing ? (
          posts.ongoing.map((post) => <PostCard key={post.postId} post={post} type="list" />)
        ) : (
          <Message>
            <Typography content="관련 모집글이 없습니다." />
          </Message>
        )}
      </PostsGrid>
      <Modal
        title="필터"
        open={isModal}
        onOk={handleOk}
        onCancel={() => setIsModal(false)}
        footer={
          <FooterContainer>
            <FooterButton key="reset" onClick={handleReset}>
              선택 초기화
            </FooterButton>
            <FooterButton key="submit" type="primary" onClick={handleOk}>
              적용하기
            </FooterButton>
          </FooterContainer>
        }
      >
        <FilterOptions>
          <OptionGroup>
            <OptionTitle>날짜</OptionTitle>
            {[
              { label: '오늘', value: '0' },
              { label: '내일', value: '1' },
              { label: '이번 주말', value: '2' },
            ].map((option) => (
              <StyledButton
                key={option.value}
                onClick={() => toggleSelection(option.value, dateTypes, setDateTypes)}
                selected={dateTypes.split(',').includes(option.value)}
              >
                {option.label}
              </StyledButton>
            ))}
          </OptionGroup>
          <OptionGroup>
            <OptionTitle>냠냠 유형</OptionTitle>
            {[
              { label: '식사', value: 'MEAL' },
              { label: '카페', value: 'CAFE' },
              { label: '술', value: 'ALCOHOL' },
            ].map((option) => (
              <StyledButton
                key={option.value}
                onClick={() => toggleSelection(option.value, foodTypes, setFoodTypes)}
                selected={foodTypes.split(',').includes(option.value)}
              >
                {option.label}
              </StyledButton>
            ))}
          </OptionGroup>
          <OptionGroup>
            <OptionTitle>연령대</OptionTitle>
            {[
              { label: '20대', value: 'AGE20S' },
              { label: '30대', value: 'AGE30S' },
              { label: '40대', value: 'AGE40S' },
              { label: '50대', value: 'AGE50S' },
              { label: '제한없음', value: 'NOLIMIT' },
            ].map((option) => (
              <StyledButton
                key={option.value}
                onClick={() => toggleSelection(option.value, ages, setAges)}
                selected={ages.split(',').includes(option.value)}
              >
                {option.label}
              </StyledButton>
            ))}
          </OptionGroup>
          <OptionGroup>
            <OptionTitle>성별</OptionTitle>
            {[
              { label: '남자만', value: 'MALE' },
              { label: '여자만', value: 'FEMALE' },
              { label: '남녀무관', value: 'ANYONE' },
            ].map((option) => (
              <StyledButton
                key={option.value}
                onClick={() => toggleSelection(option.value, genders, setGenders)}
                selected={genders.split(',').includes(option.value)}
              >
                {option.label}
              </StyledButton>
            ))}
          </OptionGroup>
        </FilterOptions>
      </Modal>
    </Container>
  );
};

export default List;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 66.67vw;
  gap: 1.04vw;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;

const FilterClick = styled.div`
  display: flex;
  gap: 3px;
  cursor: pointer;
`;

const FilterIcon = styled.img``;

const PostsGrid = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  margin-left: 1rem;
`;

const Message = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0 200px 0;
  margin-left: 28.33vw;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2vw;
  padding: 10px;
`;

const FooterButton = styled(Button)`
  width: 25vw;
  height: 40px;
  font-size: 14px;
  margin: 0 auto;
`;

const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  letter-spacing: 0.5px;
`;

const OptionGroup = styled.div`
  padding: 10px;
`;

const StyledButton = styled(Button)`
  width: calc(20% - 15px);
  height: 40px;
  text-align: center;
  margin-right: 15px;
  border-radius: 30px;
  padding: 5px 15px;
  font-size: 14px;
  border-radius: 30px;
  color: ${(props) => (props.selected ? '#FF544A' : 'rgba(0, 0, 0, 0.85)')};
  border-color: ${(props) => (props.selected ? '#FF544A' : '#d9d9d9')};

  &:hover {
    border-color: ${(props) => (props.selected ? '#40a9ff' : '#d9d9d9')};
  }
`;

const OptionTitle = styled.h3`
  color: black;
  font-weight: 300;
  margin-bottom: 10px;
  font-size: 16px;
  letter-spacing: 0.5px;
`;
