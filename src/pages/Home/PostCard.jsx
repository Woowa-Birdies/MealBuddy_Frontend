import styled from 'styled-components';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import TagButton from '@components/ui/Button/TagButton';
import CompletedButton from '@components/ui/Button/CompletedButton';
import pariticipant from '@assets/images/svg/participant.svg';
import clock from '@assets/images/svg/clock.svg';

const PostCard = () => {
  return (
    <Container>
      <Img />
      <Info>
        <TagButton title="모임종류" type="tag" />
        <Paragraphy content="식당이름입니다" size="xl" />
        <About>
          <Icon src={pariticipant} />
          <Participant />
          <Icon src={clock} />
          <MeetAt />
        </About>
        <Tag>
          <Paragraphy content="#남자만" size="large" />
          <Paragraphy content="#20대" size="large" />
        </Tag>
      </Info>
      <CompletedButton title="참여하기" type="join" />
    </Container>
  );
};

export default PostCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 15.88wv;
  height: 569px;
  backgroud: #d9d9d9;
  gap: 16px;
`;

const Img = styled.div`
  display: flex;
  width: 15.89vw;
  height: 14.58vw;
  border-radius: 20px;
  background: #d9d9d9;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Icon = styled.img``;

const About = styled.div`
  display: flex;
  gap: 10px;
`;

const Participant = styled.div``;
const MeetAt = styled.div``;

const Tag = styled.div`
  display: flex;
  gap: 10px;
`;
