import { get, post } from '@/api/common/apiUtils';

const checkEmailToken = async (verificationData) => {
  return post(`/email/verifications`, verificationData);
};
const getEmailVerification = async (params) => {
  return get(`/email/${params.toEmail}/verifications/${params.userId}`);
};

const checkNickname = async (nickname) => {
  return get(`/check/${nickname}`);
};

const postVerification = async (verificationData) => {
  return post(`/signup`, verificationData);
};

export default {
  checkEmailToken,
  getEmailVerification,
  checkNickname,
  postVerification,
};
