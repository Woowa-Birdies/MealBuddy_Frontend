import { get } from '@/api/common/apiUtils';

const getUserProfileInfo = async (userId) => {
  return get(`/api/profile/search/${userId}`);
};

export default {
  getUserProfileInfo,
};
