import { get, post } from '@/api/common/apiUtils';

const chatList = async () => {
  return get('/room');
};

const joinChat = async (postId) => {
  return post(`/room/join`, postId);
};

const messages = async (roomData) => {
  return post('/chat', roomData);
};

export default {
  chatList,
  joinChat,
  messages,
};
