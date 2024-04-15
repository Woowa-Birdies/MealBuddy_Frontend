import { get, post, patch, del } from '@/api/common/apiUtils';

const postmyRequest = async (askData) => {
  return post(`/ask`, askData);
};
const getmyAskList = async (params) => {
  return get(`/ask/list/${params.userId}?type=${params.type}`);
};

const updateAskStatus = async (updateData) => {
  return patch(`/ask`, updateData);
};

const deleteAsk = async (askId) => {
  return del(`/ask/${askId}`);
};

export default {
  postmyRequest,
  getmyAskList,
  updateAskStatus,
  deleteAsk,
};
