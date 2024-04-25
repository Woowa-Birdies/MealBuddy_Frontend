import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '@enums/CommonEnum';
import PropTypes from 'prop-types';
import AcceptButton from '@components/ui/Button/AcceptButton';
import SampleImg from '@/assets/images/png/profileimg.png';
import Typography from '@components/ui/Typography/Typography';
import TagButton from '@components/ui/Button/TagButton';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';

const ApplicantCard = ({ information }) => {
  const nav = useNavigate();
  const { postId } = useParams();
  const handleClick = (userId) => {
    nav(ROUTES.USERPAGE, { state: userId });
  };
  return (
    <BoxWrapper>
      {information.length === 0 ? (
        <Paragraphy content="텅..." size="large" color="contentTertiary" />
      ) : (
        information.map((item) => (
          <ApplicantContainer key={item.userId} onClick={() => handleClick(item.userId)}>
            <ProfileContainer>
              <ProfileImg src={SampleImg} />
              <User>
                <Typography content="닉네임" size="large" /> {/* 닉네임 수정 */}
                <TagContainer>
                  <TagButton title={`${item.age}대`} />
                  <TagButton title={`${item.gender}`} />
                </TagContainer>
              </User>
            </ProfileContainer>
            {item.introduce ? <Intro>{item.introduce}</Intro> : <Intro>안녕하세요.</Intro>}
            <ButtonContainer>
              {item.askStatus === '대기' ? (
                <>
                  <AcceptButton
                    title="거절하기"
                    action="reject"
                    propData={{
                      userId: item.userId,
                      postId,
                      askId: item.askId,
                      askStatus: '거절',
                    }}
                  />
                  <AcceptButton
                    title="수락하기"
                    action="accept"
                    propData={{
                      userId: item.userId,
                      postId,
                      askId: item.askId,
                      askStatus: '수락',
                    }}
                  />
                </>
              ) : null}
            </ButtonContainer>
          </ApplicantContainer>
        ))
      )}
    </BoxWrapper>
  );
};

export default ApplicantCard;

ApplicantCard.propTypes = {
  information: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      askStatus: PropTypes.string,
      gender: PropTypes.string,
      age: PropTypes.number,
      introduce: PropTypes.string,
    }),
  ).isRequired,
};

const BoxWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.15vw;
`;

const ApplicantContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-evenly;
  align-items: flex-start;
  border-radius: 20px;
  border: 1px solid rgba(137, 137, 137, 0.3);
  background: #fff;
  gap: 0.83vw;
  padding: 1.77vw 1.25vw;
`;

const ProfileContainer = styled.div`
  display: flex;
`;

const ProfileImg = styled.img`
  width: 5.21vw;
  height: 5.21vw;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-right: 28.56px;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Intro = styled.div`
  display: flex;
  font-size: 1.11vw;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.52vw;
`;
