import { post } from '@/api/common/apiUtils';

const reviewSave = async (reviewData) => {
  return post(`/review/save`, reviewData);
};

export default {
  reviewSave,
};
