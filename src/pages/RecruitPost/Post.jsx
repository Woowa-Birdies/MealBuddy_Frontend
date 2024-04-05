import styled from 'styled-components';
import StatusButton from '@components/ui/Button/StatusButton';
import SelectButton from '@components/ui/Button/SelectButton';
import useRecruitStore from '@store/useRecruitStore';

const Post = () => {
  const { recruitPost } = useRecruitStore();

  return (
    <Container>
      <StatusButton title="모집중" />
      <TagContainer>
        <SelectButton title={recruitPost.foodType} type="tag" />
        <SelectButton title={recruitPost.ageRange} type="tag" />
        <SelectButton title={recruitPost.gender} type="tag" />
      </TagContainer>
      <Map>지도입니다.</Map>
      <Detail>{recruitPost.detail}</Detail>
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

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
