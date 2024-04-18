import { create } from 'zustand';

const useChatStore = create((set) => ({
  room: {
    roomId: 1,
    roomName: '서울역 맛집 탐방',
    joinUsers: [
      {
        userId: 4,
        lastReadAt: '2019-11-20T11:20:40Z', // 해당 시간 기반으로 안읽은 메시지 처리
      },
      {
        userId: 5,
        lastReadAt: '2019-11-20T11:30:80Z',
      },
    ],
  },
  // chat: {
  //   roomId: 0,
  //   roomName: '',
  // },
  setRoom: (roomData) => set({ room: roomData }),
}));

export default useChatStore;
