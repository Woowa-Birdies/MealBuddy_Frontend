import { create } from 'zustand';

const useChatStore = create((set) => ({
  roomList: [],
  room: {
    roomId: 0,
    roomName: '',
    joinUsers: [],
  },
  chat: [],
  setRoomList: (value) => set({ roomList: value }),
  setRoom: (roomData) =>
    set((state) => ({
      room: {
        ...state.room,
        ...roomData,
      },
    })),
  setChat: (chatData) =>
    set((state) => ({
      chat: {
        ...state.chat,
        ...chatData,
      },
    })),
}));

export default useChatStore;
