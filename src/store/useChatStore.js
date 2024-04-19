import { create } from 'zustand';

const useChatStore = create((set) => ({
  room: {
    roomId: 0,
    roomName: '',
    joinUsers: [],
  },
  // chat: {
  //   roomId: 0,
  //   roomName: '',
  // },
  setRoom: (roomData) =>
    set((state) => ({
      room: {
        ...state.room, // Retain all other existing room properties
        ...roomData, // Overwrite and add new properties from roomData
      },
    })),
}));

export default useChatStore;
