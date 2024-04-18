import { get, post } from '@/api/common/apiUtils';

const chatList = async () => {
  return get('/room');
};

const joinChat = async (postId) => {
  return post(`/room/join`, postId);
};

export default {
  chatList,
  joinChat,
};
