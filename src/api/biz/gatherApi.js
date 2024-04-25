import { get } from '@/api/common/apiUtils';

const getUserPostList = async (params) => {
  return get(`/gather/list/${params.userId}?type=${params.type}&page=${params.page}`);
};
const getAskList = async (params) => {
  return get(`/gather/ask/list/${params.postId}?type=${params.type}&page=${params.page}`);
};

export default {
  getUserPostList,
  getAskList,
};
