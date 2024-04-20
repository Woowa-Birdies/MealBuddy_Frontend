import { get, post } from '@/api/common/apiUtils';

const participantsInfo = async (postId) => {
  return get(`/review/userInfo/${postId}`);
};

const reviewSave = async (reviewData) => {
  return post(`/review/save`, reviewData);
};

export default {
  participantsInfo,
  reviewSave,
};
