import { get } from '@/api/common/apiUtils';

const getUserPostList = async (params) => {
  return get(`/gather/list/${params.userId}?type=${params.type}`);
};
const getAskList = async (postId) => {
  return get(`/gather/ask/list/${postId}`);
  // return get(`/gather/ask/list/${params.userId}?type=${params.type}`);
};

export default {
  getUserPostList,
  getAskList,
};
