import { post } from '@/api/common/apiUtils';

const postLogout = async () => {
  return post(`/api/logout`);
};

export default {
  postLogout,
};
