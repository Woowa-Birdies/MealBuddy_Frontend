import { get, post } from '@/api/common/apiUtils';

const getHealthCheck = async () => {
  return get(`/actuator/health`);
};

const postAsk = async (askRequest) => {
  return post(`/ask`, askRequest);
};

const postCreate = async (postCreateDto) => {
  return post(`/post`, postCreateDto);
};

const getByPostId = async (postId) => {
  return get(`/postId/${postId}`);
};

const getUserPostList = async (userId, type) => {
  return get(`/gather/list/${userId}`, { params: { type } });
};

export default {
  getHealthCheck,
  postAsk,
  postCreate,
  getUserPostList,
  getByPostId,
};
