import { get, post } from '@/api/common/apiUtils';

const participantsInfo = async (postId) => {
  return get(`/api/review/userInfo/${postId}`);
};

const reviewSave = async (reviewData) => {
  return post(`/api/review/save`, reviewData);
};

export default {
  participantsInfo,
  reviewSave,
};
