import { get } from '@/api/common/apiUtils';

const showPost = async (params) => {
  return get(`/post/${params.postId}`);
};

export default {
  showPost,
};
