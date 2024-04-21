import { get, post, del } from '@/api/common/apiUtils';

const roomList = async () => {
  return get('/room');
};

const joinChat = async (postId) => {
  return post(`/room/join`, postId.postId);
};

const messages = async (roomData) => {
  return post('/chat', roomData);
};

const kick = async (params) => {
  return del(`/room/kick/${params.roomId}/${params.targetUserId}`);
};

const exit = async (roomId) => {
  return del(`/room/quit/${roomId.roomId}`);
};

export default {
  roomList,
  joinChat,
  messages,
  kick,
  exit,
};
