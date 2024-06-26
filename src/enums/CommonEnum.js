export const ENVMODE = Object.freeze({
  PROD: 'prod',
  DEV: 'dev',
  LOCAL: 'local',
});

export const PAGENAMES = Object.freeze({
  HOME: '홈',
  LOGIN: '로그인',
  SIGNUP: '회원가입',
  RECRUIT: '모집글 작성 페이지',
  RECRUITPOST: '모집글 페이지',
  MYPAGE: '마이 페이지',
  USERPAGE: '유저 페이지',
  REVIEW: '후기 페이지',
  REPORT: '신고하기',
  EDITPROFILE: '프로필 수정',
  VERIFICATION: '추가 인증',
  USERACTIVITY: '모집 냠냠',
  USERREQUESTSTATUS: '신청 냠냠',
  APPLICANTSLIST: '신청자 내역',
  CHAT: '냠냠토크',
  LOGOUT: '로그아웃',
});

export const ROUTES = Object.freeze({
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  RECRUIT: '/recruit/:postId?',
  RECRUITPOST: '/post/:postId',
  MYPAGE: '/mypage',
  USERPAGE: '/userpage',
  REVIEW: '/review/:postId',
  REPORT: '/report',
  EDITPROFILE: '/editprofile',
  VERIFICATION: '/verification',
  USERACTIVITY: '/myactivity',
  USERREQUESTSTATUS: '/myrequest',
  APPLICANTSLIST: '/applicantslist/:postId',
  CHAT: '/chat',
  LOGOUT: '/logout',
});
