import { get, post } from '@/api/common/apiUtils';
import { API_BASE_URL } from '@constants/Constants';

const socket = new WebSocket(`wss://${API_BASE_URL}`);

const chatList = async () => {
  return get('/room');
};

const joinChat = async (postId) => {
  return post(`/room/join`, postId);
};

const messages = async (roomData) => {
  return post('/chat', roomData);
};

const chatRoomInfo = async (roomData) => {
  return socket.send(`sub/chat/status/${roomData.roomId}`, roomData);
};

export default {
  chatList,
  joinChat,
  messages,
  chatRoomInfo,
};
