import styled from 'styled-components';
import { Input, Space } from 'antd';
import riceImg from '@assets/images/svg/rice.svg';
import Typography from '@components/ui/Typography/Typography';

const { Search } = Input;

const FilterContainer = () => {
  return (
    <Container>
      <Main>
        <Typography content="혼자 밥먹기가 아쉬울 때, 냠메이트와 냠냠해요." size="xl" />
        <Space direction="vertical">
          {/* <Search placeholder="input search text" onSearch={onSearch} enterButton /> */}
          <Search
            placeholder="가고싶은 식당을 검색해보세요"
            allowClear
            enterButton="검색"
            size="large"
            // onSearch={onSearch}
            style={{ width: '25vw' }}
          />
        </Space>
      </Main>
      <Img src={riceImg} />
    </Container>
  );
};

export default FilterContainer;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 66.67vw;
  height: 450px;
  background: #edf9eb;
`;

const Main = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Img = styled.img`
  width: 15.1vw;
`;
