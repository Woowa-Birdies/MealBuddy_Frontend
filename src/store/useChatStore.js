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
        ...state.room, // Retain all other existing room properties
        ...roomData, // Overwrite and add new properties from roomData
      },
    })),
  setChat: (chatData) =>
    set((state) => ({
      chat: {
        ...state.chat, // Retain all other existing room properties
        ...chatData, // Overwrite and add new properties from roomData
      },
    })),
}));

export default useChatStore;
