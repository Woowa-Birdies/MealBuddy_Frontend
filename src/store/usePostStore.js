import { create } from 'zustand';

const initialPost = {
  address: '',
  ageTag: '',
  askStatus: null,
  closeAt: '',
  contents: '',
  foodTypeTag: '',
  genderTag: '',
  meetAt: '',
  nickname: '',
  participantCount: 1,
  participantTotal: 0,
  place: ' ',
  postId: 0,
  postStatus: '',
  userId: 0,
};

const usePostStore = create((set) => ({
  post: initialPost,
  setPost: (postData) => set({ post: postData }),
}));

export default usePostStore;

/*
address
: 
"서울 광진구 자양로43길 42 1층"
ageTag
: 
"50대"
askStatus
: 
null
closeAt
: 
"2024-04-01T11:00:00"
contents
: 
"같이 밥먹을 파티원 구합니다."
foodTypeTag
: 
"카페"
genderTag
: 
"남자만"
meetAt
: 
"2024-04-03T12:30:00"
nickname
: 
"user1"
participantCount
: 
1
participantTotal
: 
5
place
: 
"신토불이떡볶이 본점"
postId
: 
4
postStatus
: 
"모집중"
userId
: 
1
*/
