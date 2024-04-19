import { get, post, del } from '@/api/common/apiUtils';

const chatList = async () => {
  return get('/room');
};

const joinChat = async (postId) => {
  return post(`/room/join`, postId);
};

const messages = async (roomData) => {
  return post('/chat', roomData);
};

const kick = async (roomId, targetUserId) => {
  return del(`/room/kick/${roomId}/${targetUserId}`);
};

export default {
  chatList,
  joinChat,
  messages,
  kick,
};
