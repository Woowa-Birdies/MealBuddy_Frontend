import styled from 'styled-components';
import PropTypes from 'prop-types';
import Label from '@components/ui/Label/Label';
import Typography from '@components/ui/Typography/Typography';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import TagButton from '@components/ui/Button/TagButton';
import Btn from '@/components/ui/Button/ActivityButton';
// 입력 데이터 형식
// 제목, (분류, 성별, 나이), (모임 날짜, 인원수), (장소, 주소)
// "menuCategory": "한식", // 메뉴 종류
// "address": "서울특별시 ~~", // 주소
// "place": "동대문 엽기 떡볶이", // 식당 이름
// "participantTotal": 4, // 모집 인원
// "participantCount": 2, // 수락된 인원
// "postStatus": "모집중", // 모집 상태
// type : 0, 1, 2 (0: 모집중 / 1: 모집 완료 / 2: 모임 종료)
// "requestStatus": "대기", // 신청 상태
// "meetAt": "2050-01-01 pm 12:30", // 만나는 시간
// "closeAt": "2050-01-01 pm 12:00", // 모집 마감 시간
// "createAt": "2049-12-30 pm 12:00", // 글 작성 일시
const ActivityContent = ({ information }) => {
  return (
    <BoxWrapper>
      {information.map((item) => (
        <ListItem key={item.id}>
          <Thumnail />
          <InnerBox>
            <TopSection>
              <Paragraphy content="동네" size="medium" color="contentTertiary" />
              <Typography content="남은 모집 시간 00 ~ 00" size="small" color="primary" />
            </TopSection>
            <Label content={item.title} size="xl" />
            <TagSection>
              <TagButton title={item.menuCategory} type="tag" />
              <TagButton title={item.gender} type="tag" />
              <TagButton title={item.age} type="tag" />
            </TagSection>
            <InfoSection>
              <Label content={item.meetAt} size="large" />
              <Label
                content={`인원수 : ${item.participantCount} / ${item.participantTotal}`}
                size="large"
              />
            </InfoSection>
            <InfoSection>
              <Label content={item.place} size="large" />
              <Label content={item.address} size="large" />
            </InfoSection>
            <BtnSection>
              <Btn title="수정하기" color="contentTertiary" />
              <Btn title="냠냠 토크방" color="primary" />
            </BtnSection>
          </InnerBox>
        </ListItem>
      ))}
    </BoxWrapper>
  );
};

export default ActivityContent;

ActivityContent.propTypes = {
  information: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      menuCategory: PropTypes.string,
      gender: PropTypes.string,
      age: PropTypes.string,
      place: PropTypes.string,
      address: PropTypes.string,
      participantTotal: PropTypes.number,
      participantCount: PropTypes.number,
      postStatus: PropTypes.number,
      meetAt: PropTypes.string,
      closeAt: PropTypes.string,
    }),
  ).isRequired,
};

const BoxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const ListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const TagSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  margin-bottom: 0.7813vw;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
`;

const BtnSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 0.9375vw;
  gap: 18px;
`;
const Thumnail = styled.div`
  width: 16.15vw;
  height: 16.15vw;
  background-color: gray;
`;

const InnerBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding-top: 5px;
`;
