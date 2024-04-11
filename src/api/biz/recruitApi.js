import { post } from '@/api/common/apiUtils';

const postRecruit = async (postData) => {
  return post(`/post`, postData);
};

export default {
  postRecruit,
};
