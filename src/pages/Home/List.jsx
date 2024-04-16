import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Button, Radio } from 'antd';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import filter from '@assets/images/svg/filter.svg';
import PostCard from '@/pages/Home/PostCard';
import homeApi from '@api/biz/homeApi';
import Typography from '@components/ui/Typography/Typography';

const List = () => {
  const [isModal, setIsModal] = useState(false);
  const [posts, setPosts] = useState({ ongoing: [] });

  const [dateTypes, setDateTypes] = useState(null);
  const [foodTypes, setFoodTypes] = useState(null);
  const [ages, setAges] = useState(null);
  const [genders, setGenders] = useState(null);

  const showModal = () => {
    setIsModal(true);
  };

  const fetchList = async () => {
    try {
      const res = await homeApi.getFilter({ dateTypes, foodTypes, ages, genders });
      setPosts(res.data);
    } catch (error) {
      console.error('Failed to fetch post list:', error);
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
    setDateTypes(null);
    setFoodTypes(null);
    setAges(null);
    setGenders(null);
  };

  return (
    <Container>
      <FilterContainer>
        <FilterClick onClick={showModal}>
          <FilterIcon src={filter} />
          <Paragraphy content="필터" size="large" />
        </FilterClick>
      </FilterContainer>
      <PostsGrid>
        {posts.ongoing ? (
          posts.ongoing.map((post) => <PostCard key={post.postId} post={post} />)
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
            <StyledButton key="reset" onClick={handleReset}>
              선택 초기화
            </StyledButton>
            <StyledButton key="submit" type="primary" onClick={handleOk}>
              적용하기
            </StyledButton>
          </FooterContainer>
        }
      >
        <FilterOptions>
          <OptionGroup>
            <OptionTitle>날짜</OptionTitle>
            <StyledRadioGroup value={dateTypes} onChange={(e) => setDateTypes(e.target.value)}>
              <Radio.Button value="0">오늘</Radio.Button>
              <Radio.Button value="1">내일</Radio.Button>
              <Radio.Button value="2">이번 주말</Radio.Button>
            </StyledRadioGroup>
          </OptionGroup>
          <OptionGroup>
            <OptionTitle>냠냠 유형</OptionTitle>
            <StyledRadioGroup value={foodTypes} onChange={(e) => setFoodTypes(e.target.value)}>
              <Radio.Button value="MEAL">식사</Radio.Button>
              <Radio.Button value="CAFE">카페</Radio.Button>
              <Radio.Button value="ALCOHOL">술</Radio.Button>
            </StyledRadioGroup>
          </OptionGroup>
          <OptionGroup>
            <OptionTitle>연령대</OptionTitle>
            <StyledRadioGroup value={ages} onChange={(e) => setAges(e.target.value)}>
              <Radio.Button value="AGE20S">20대</Radio.Button>
              <Radio.Button value="AGE30S">30대</Radio.Button>
              <Radio.Button value="AGE40S">40대</Radio.Button>
              <Radio.Button value="AGE50S">50대</Radio.Button>
            </StyledRadioGroup>
          </OptionGroup>
          <OptionGroup>
            <OptionTitle>성별</OptionTitle>
            <StyledRadioGroup value={genders} onChange={(e) => setGenders(e.target.value)}>
              <Radio.Button value="MALE">남자만</Radio.Button>
              <Radio.Button value="FEMALE">여자만</Radio.Button>
              <Radio.Button value="ANYONE">남녀무관</Radio.Button>
            </StyledRadioGroup>
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

const FilterClick = styled.div`
  display: flex;
  gap: 3px;
  cursor: pointer;
`;

const FilterIcon = styled.img``;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2vw;
  padding: 10px;
`;

const StyledButton = styled(Button)`
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

const StyledRadioGroup = styled(Radio.Group)`
  display: flex;

  .ant-radio-button-wrapper {
    &:not(:first-child)::before {
      content: none;
    }
    width: calc(25% - 15px);
    height: 40px;
    text-align: center;
    margin-right: 15px;
    border-radius: 30px;
    padding: 5px 15px;
    font-size: 14px;
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    border-color: #ff544a;
    border-width: 2px;
  }
`;

const OptionTitle = styled.h3`
  color: black;
  font-weight: 300;
  margin-bottom: 10px;
  font-size: 16px;
  letter-spacing: 0.5px;
`;
