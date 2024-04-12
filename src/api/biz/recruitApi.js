import { post, get, patch, del } from '@/api/common/apiUtils';

const postRecruit = async (postData) => {
  return post(`/post`, postData);
};

const getPost = async (params) => {
  return get(`/post/${params.postId}`);
};

const updateRecruit = async (postData) => {
  return patch(`/post`, postData);
};

const deleteRecruit = async (postId) => {
  return del(`/post/${postId}`);
};

export default {
  postRecruit,
  getPost,
  updateRecruit,
  deleteRecruit,
};
