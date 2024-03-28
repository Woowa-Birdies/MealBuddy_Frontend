import styled from 'styled-components';
import StatusButton from '@components/ui/Button/StatusButton';
import SelectButton from '@components/ui/Button/SelectButton';

const Post = () => {
  return (
    <Container>
      <StatusButton title="모집중" />
      <TagContainer>
        <SelectButton title="유형" type="tag" />
        <SelectButton title="연령" type="tag" />
        <SelectButton title="성별" type="tag" />
      </TagContainer>
      <Map>지도입니다.</Map>
      <Content>본문 내용입니다.</Content>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 14px;
`;

const Map = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
