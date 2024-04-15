import { post, patch } from '@/api/common/apiUtils';

const ask = async (askData) => {
  return post(`/ask`, askData);
};

const updateAskStatus = async (updateData) => {
  return patch(`/ask`, updateData);
};

export default {
  ask,
  updateAskStatus,
};
