import { get, post } from '@/api/common/apiUtils';

const postmyRequest = async () => {
  return post(`/ask`);
};
const getmyAskList = async (params) => {
  return get(`/ask/list/${params.userId}?type=${params.type}`);
};

export default {
  postmyRequest,
  getmyAskList,
};
