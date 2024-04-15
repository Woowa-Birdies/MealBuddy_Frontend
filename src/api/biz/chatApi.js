import { post } from '@/api/common/apiUtils';

const joinChat = async (postId) => {
  return post(`/room/join`, postId);
};

export default {
  joinChat,
};
