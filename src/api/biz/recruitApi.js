import { post, get, patch, del } from '@/api/common/apiUtils';

const postRecruit = async (postData) => {
  return post(`/post`, postData);
};

const getPost = async (params, userId) => {
  return get(`/post/${params.postId}?userId=${userId}`);
};

const updateRecruit = async (postData) => {
  return patch(`/post`, postData);
};

const deleteRecruit = async (postId) => {
  return del(`/post/${postId}`);
};

const completionRecruit = async (postId) => {
  return patch(`/post/completion/${postId}`);
};

const ongoingRecruit = async (postId) => {
  return patch(`/post/ongoing/${postId}`);
};

export default {
  postRecruit,
  getPost,
  updateRecruit,
  deleteRecruit,
  completionRecruit,
  ongoingRecruit,
};
