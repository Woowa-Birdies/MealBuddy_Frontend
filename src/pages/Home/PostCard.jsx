import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import TagButton from '@components/ui/Button/TagButton';
import CompletedButton from '@components/ui/Button/CompletedButton';
import pariticipant from '@assets/images/svg/participant.svg';
import clock from '@assets/images/svg/clock.svg';
import dayjs from 'dayjs';

const PostCard = ({ post, type }) => {
  const nav = useNavigate();
  console.log(type);

  const handleJoin = () => {
    nav(`post/${post.postId}`);
  };

  return (
    <Container type={type}>
      <Img type={type} />
      <Info>
        <TagButton title={post.foodTypeTag} type="tag" />
        <Paragraphy content={post.place} size="xl" />
        {/* <About>
          <Div>
            <Icon src={pariticipant} />
            <Text>{`${post.participantCount} / ${post.participantTotal}`}</Text>
          </Div>
          <Div>
            <Icon src={clock} />
            <Text>{dayjs(post.meetAt).format('A hh:mm')}</Text>
          </Div>
        </About>
        <Tag>
          {post.genderTag && <Paragraphy content={`#${post.genderTag}`} size="large" />}
          {post.ageTag && <Paragraphy content={`#${post.ageTag}`} size="large" />}
        </Tag> */}
        {type === 'list' ? (
          <>
            <About>
              <Div>
                <Icon src={pariticipant} />
                <Text>{`${post.participantCount} / ${post.participantTotal}`}</Text>
              </Div>
              <Div>
                <Icon src={clock} />
                <Text>{dayjs(post.meetAt).format('A hh:mm')}</Text>
              </Div>
            </About>
            <Tag>
              {post.genderTag && <Paragraphy content={`#${post.genderTag}`} size="large" />}
              {post.ageTag && <Paragraphy content={`#${post.ageTag}`} size="large" />}
            </Tag>
          </>
        ) : (
          <About>
            <Div>
              <Icon src={pariticipant} />
              <Text>{`${post.participantCount} / ${post.participantTotal}`}</Text>
            </Div>
            <Div>
              <Icon src={clock} />
              <Text>{dayjs(post.meetAt).format('A hh:mm')}</Text>
            </Div>
            <Tag>
              {post.genderTag && <Paragraphy content={`#${post.genderTag}`} size="large" />}
              {post.ageTag && <Paragraphy content={`#${post.ageTag}`} size="large" />}
            </Tag>
          </About>
        )}
      </Info>
      {type === 'list' && (
        <CompletedButton title="참여하기" type={`join${type}`} onClick={handleJoin} />
      )}
    </Container>
  );
};

export default PostCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.type === 'list' ? '15.88vw' : '21.17vw')};
  height: 569px;
  // background: #d9d9d9;
  gap: 16px;
  margin-bottom: 1vh;
`;

const Img = styled.div`
  display: flex;
  width: ${(props) => (props.type === 'list' ? '15.88vw' : '21.17vw')};
  height: 14.58vw;
  border-radius: 20px;
  background: #d9d9d9;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Icon = styled.img`
  margin-right: 5px;
`;

const About = styled.div`
  display: flex;
  gap: 20px;
`;

const Div = styled.div`
  display: flex;
`;

const Text = styled.div`
  display: flex;
  font-size: 1.111vw;
  font-weight: 400;
  line-height: 1.777vw;
`;

const Tag = styled.div`
  display: flex;
  gap: 10px;
`;