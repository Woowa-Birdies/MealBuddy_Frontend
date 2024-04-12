import { post, get, patch } from '@/api/common/apiUtils';

const postRecruit = async (postData) => {
  return post(`/post`, postData);
};

const getPost = async (params) => {
  return get(`/post/${params.postId}`);
};

const updateRecruit = async (postData) => {
  return patch(`/post`, postData);
};

export default {
  postRecruit,
  getPost,
  updateRecruit,
};
