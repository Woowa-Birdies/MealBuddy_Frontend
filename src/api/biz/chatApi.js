import { get, post } from '@/api/common/apiUtils';

// const socket = new WebSocket('wss://api.woowabirdieside.com');
// if (socket.readyState !== WebSocket.OPEN) {
//   console.log('WebSocket is not open. State:', socket.readyState);
// } else {
//   console.log('WebSocket is opened. State:', socket.readyState);
// }

const chatList = async () => {
  return get('/room');
};

const joinChat = async (postId) => {
  return post(`/room/join`, postId);
};

const messages = async (roomData) => {
  return post('/chat', roomData);
};

// const chatRoomInfo = async (roomData) => {
//   return socket.send(`sub/chat/status/${roomData.roomId}`, roomData);
// };

export default {
  chatList,
  joinChat,
  messages,
  // chatRoomInfo,
};
