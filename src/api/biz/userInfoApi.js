import { get } from '@/api/common/apiUtils';

const getMe = async () => {
  return get(`/me`);
};

const getProfile = async (userId) => {
  return get(`/profile/${userId}`);
};

export default {
  getMe,
  getProfile,
};
