import { get } from '@/api/common/apiUtils';

const getPost = async (params, userId) => {
  return get(`/post/${params.postId}?userId=${userId}`);
};

export default {
  getPost,
};
